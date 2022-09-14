const express = require('express');
const socket = require('socket.io')
const fs = require('fs');
const { Console } = require('console');
const app = express();
var PORT = process.env.PORT || 3000
const server = app.listen(PORT)

try {
   var secrets = require('./secrets.json') 
} catch {
    console.log("You haven't made a secrets.json file yet!")
    console.log("Add one in this format: ")
    console.log(`{ \n "secret" : { \n   "code": "YOURCODEHERE" \n   } \n}`)
    process.exit()
}


//Raspberry Pi code will not run on windows without throwing errors. This is why they are currently commented out.
//Code for the GPIO board on Raspberry Pi
//var Gpio = require('onoff').Gpio;

//Defines PIN4 as pin number 4 on the GPIO board
//var PIN4 = new Gpio(4, 'out')



app.use(express.static('public'));
console.log("Server is running")
const io = socket(server)



io.on('connection', (socket) => {
    console.log("Socket connection: " + socket.id)

    
    console.log("Origin address: ", socket.request.connection.remoteAddress)

    socket.on("code", (receivedCode) => {
        var currentTime = new Date();
        
        if(receivedCode == secrets.secret.code) {
            //Turns PIN4 into an ON
            //PIN4.writeSync(1)
            console.log(currentTime.toUTCString(),": Correct code received" );
            console.log("Opening door")

            //setTimeout tells JS to do this after waiting 10 seconds
            setTimeout(() => {  
                console.log("Closing door")
                //Turns PIN4 into an OFF
                //PIN4.writeSync(0);
             }, 10000)
        } else {
            console.log(currentTime.toUTCString(),": Wrong code received" );
        }
    })

})