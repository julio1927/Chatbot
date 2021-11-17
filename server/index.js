const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");

const router = require("./router");

//Server Port
const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
});

app.use(cors());
app.use(router);

// user connnecting
io.on("connection", (socket) => {
  console.log("We have a new connection!");

  // user diconnecting
  socket.on("disconnect", () => {
    console.log("User has disconnected");
  });
});

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
