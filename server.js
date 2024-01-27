const io = require("socket.io")(3000);
// const express = require('express');
// const request = require('request');  


// const app = express();

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

const users = {}
 
io.on("connection", socket => {
    socket.on("new-user", name => {
        users[socket.id] = name
        socket.broadcast.emit("user-connected", name)
    })
    socket.on('send-chat-message', message => {
        //console.log("message", message) 
        socket.broadcast.emit('chat-message', {message: message, name:users[socket.id]})
    })

    socket.on('disconnect', () => {
        //console.log("message", message) 
        socket.broadcast.emit('user-disconnected', users[socket.id])
        delete users[socket.id]
    })
}) 

