const express = require('express');
const socket = require('socket.io')
const fs = require('fs');
const app = express();
var PORT = process.env.PORT || 3000
const server = app.listen(PORT)


app.use(express.static('public'));
console.log("Server is running")
const io = socket(server)


io.on('connection', (socket) => {
    console.log("Socket connection: " + socket.id)

    //Følgende linje burde hente IP-addresse, men aner ikke om den gjør noe som helst
    console.log("Origin address: ", socket.request.connection.remoteAddress)
    
})