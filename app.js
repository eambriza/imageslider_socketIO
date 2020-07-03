const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const port = process.env.PORT || 4002;
const index = require('./routes/index');
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server);

let interval;

io.on('connection', (socket) => {
  console.log('New client connected');
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on('disconnect', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});

const getApiAndEmit = (socket) => {
  const data = require('./data');

  socket.emit('FromAPI', data);
};

server.listen(port, () => console.log(`Listening on port ${port}`));
