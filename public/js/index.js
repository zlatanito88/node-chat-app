var socket = io();

socket.on('connect', function () {

    console.log('Connected to the server');

    socket.emit('createMessage', {
       from: 'Vito',
       text: 'Hey. I\'m Vito'
    });

});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log("New message", message);
});