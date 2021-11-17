import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    //return data users passed
    //const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT,{  cors: { origin: "http://localhost:5000", methods: ["GET", "POST"] } });

    //setName(name);
   // setRoom(room);
    console.log(location);
    console.log(socket);
  });
  
  return (
    <div>
      <h1>Chat</h1>
    </div>
  );
};

export default Chat;
