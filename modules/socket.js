module.exports = function(io) {

  io.on('connection', function(socket) {
    socket.on('connected', function() {
      console.log('a user connected');
    });

    socket.on('send_message', function(message) {
        socket.emit('send_message', message);
    });

    socket.on('send_broadcast_message', function(message) {
        socket.broadcast.emit('send_broadcast_message', message);
    });

    socket.on('disconnect', function() {
      console.log('disconnected');
    });
  });
};
