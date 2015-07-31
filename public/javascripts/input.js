var socket = io();

socket.on('connected', function() {});
socket.on('disconnect', function() {});
socket.on('send_message', function(message) {
    $('#messages').prepend('<li class="list-group-item"><span class="badge">' + message.length + '</span>' + message + '</li>');
});
socket.on('send_broadcast_message', function(message) {
    $('#message').text(message);
});
socket.emit('connected');

$('#form').submit(function() {
    try {
        var inputMessage = $('#input_message').val().replace(/[!@$%<>'"&|]/g, '').replace(/^[\s　]+|[\s　]+$/g, '');
        if (inputMessage.length < 1) throw new Error('length error');

        socket.emit('send_message', inputMessage); //self
        socket.emit('send_broadcast_message', inputMessage); //toall
    } catch(e) {
        //console.log(e);
    } finally {
        $('#input_message').val('');
        $('#text_count').html('0/18');
        return false;
    }
});

$('#input_message').bind('keydown keyup keypress change', function() {
    var valueLength = $(this).val().length;
    $('#text_count').html(valueLength + '/18');
});
