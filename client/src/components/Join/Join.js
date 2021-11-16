import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  JoinOuterContainer,
  JoinInnerContainer,
  Heading,
  JoinInput,
  JoinButton,
} from "./JoinElements";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <JoinOuterContainer>
      <JoinInnerContainer>
        <Heading>Join</Heading>
        <div>
          <JoinInput
            placeholder="Name"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <JoinInput
            placeholder="Room"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>

        {/* Passing data via query string (url) */}
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <JoinButton type="submit">Sign In</JoinButton>
        </Link>
      </JoinInnerContainer>
    </JoinOuterContainer>
  );
};

export default Join;
