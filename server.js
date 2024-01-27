const express = require('express');
const request = require('request'); 


const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
const io = require("socket.io")(3000);

console.log("first")

io.on("connection", socket => {
    socket.emit("chat-message", "hello chatter")
}) 