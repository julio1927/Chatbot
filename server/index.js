const express = require("express");
const { Server } = require('socket.io');
const { createServer } = require('http');

//Server Port
const PORT = process.env.PORT || 5000

const router = require('./router');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("We have a new connection!");
  
  socket.on('disconnect', () => {
    console.log("User has disconnected");
  })
});

app.use(router);

httpServer.listen(PORT, () => console.log(`Server has started on port ${PORT}`));