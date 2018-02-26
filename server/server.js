const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {

    console.log('New user connected');

    // welcome message to the connected user
    socket.emit("newMessage", generateMessage('Admin', 'Welcome to the chat app'));

    // notify the new user to other users
    socket.broadcast.emit("newMessage", generateMessage('Admin', 'New user joined'));

    socket.on('createMessage', (message) => {

        console.log('Create message', message);

        // notify to all
        io.emit("newMessage", generateMessage(message.from, message.text));
        
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    })

});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});