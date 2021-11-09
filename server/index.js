const express = require("express");
const { Server } = require('socket.io');
const { createServer } = require('http');

//Server Port
const PORT = process.env.PORT || 3000

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {

});

httpServer.listen(PORT, () => console.log(`Server has started on port ${PORT}`));