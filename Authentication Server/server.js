const express = require('express');
const socket = require('socket.io')
const fs = require('fs');
const { Console } = require('console');
const { win32 } = require('path');
const app = express();
var PORT = process.env.PORT || 3000
const server = app.listen(PORT)

function checkArduino() {
    var jf = require('johnny-five');
    var board = new jf.Board();
    board.on('ready', function () {
        main("win32")
    })
    }


//CHECK WHETHER RUNNING WIN32 OR LINUX(raspberry pi or other linux based os with io inputs i guess)
if (process.platform == "win32") {
    console.log("You're running Windows, checking for a connected and configured arduino ")    
    checkArduino();
}

else if (process.platform =="linux") {

    //Code for the GPIO board on Raspberry Pi
    var Gpio = require('onoff').Gpio;
    //Defines PIN4 as pin number 4 on the GPIO board
    var PIN4 = new Gpio(4, 'out')
    main("linux")
}


//Checks whether or not there is a code to go after.
function main(currentOS) {


app.use(express.static('public'));
console.log("Server is running")
const io = socket(server)



io.on('connection', (socket) => {
    console.log("Socket connection: " + socket.id)
    console.log("Origin address: ", socket.request.connection.remoteAddress)
    var jf = require('johnny-five');
    

    
    socket.on("code", (receivedCode) => {
        var currentTime = new Date();
        

        try {
            //Don't change this var to let. let doesn't work outside of the try-catch scope. Dumb me
            var secrets = require('./secrets.json')
        } catch {
            console.log("You haven't made a secrets.json file yet!")
            console.log("Add one in this format: ")
            console.log(`{ \n "secret" : { \n   "code": "YOURCODEHERE" \n   } \n}`)
            process.exit()
        }
        
        if(receivedCode == secrets.secret.code) {
            //Turns PIN4 into an ON
            console.log(currentTime.toUTCString(),": Correct code received" );
            console.log("Opening door")
            if(currentOS == "linux") {
                //Turns PIN4 into an ON
                PIN4.writeSync(1)
            }
            else if(currentOS == "win32") {
                var PIN13 = new jf.Pin(13)
                PIN13.high();
            }


            //setTimeout tells JS to do this after waiting 10 seconds
            setTimeout(() => {  
                console.log("Closing door")
                if(currentOS =="linux") {
                    PIN4.writeSync(0);
                }
                else if(currentOS == "win32") {
                    PIN13.low();
                }
             }, 10000)
        } else {
            console.log(currentTime.toUTCString(),": Wrong code received" );
        }
    })

})
}






