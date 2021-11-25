const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const router = require("./router");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");
const { SocketAddress } = require("net");

//Server Port
const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
});

app.use(router);

// user connnecting
io.on("connect", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) {
      return callback(error);
    }

    // notifies user joined chat room 
    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to the room ${user.room}`,
    });

    // notifies other users, a user joined the chat room
    socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has joined`});

    // joins user to the room via the specific socket
    socket.join(user.room);

    callback();
  });

  // user diconnecting
  socket.on("disconnect", () => {
    console.log("User has disconnected");
    console.log(socket.connected);
  });
});

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
