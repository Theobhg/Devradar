import socketio from 'socket.io-client';

// Aqui botamos nosso localhost

const socket = socketio('http://192.140.1.5:5555', { 
  autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction){
  socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs,
  };

  socket.connect();


}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export {
  connect,
  disconnect,
  subscribeToNewDevs
};