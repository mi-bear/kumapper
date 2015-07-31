var socket = io();

$('#pepper').css('display', 'disable');

socket.on('connected', function() {});
socket.on('disconnect', function() {});
socket.on('send_broadcast_message', function(message) {
    $('#message').text(message);
});
socket.emit('connected');
