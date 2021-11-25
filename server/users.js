//The purpose of this file is to manage users (joining, signing out, removing etc)

const users = [];

// add user
const addUser = ({ id, name, room }) => {
  // E.g Julio Rivas = juliorivas
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );

  if (existingUser) {
    return { error: "Username is taken" };
  }

  const user = { id, name, room };

  users.push(user);

  return { user };
};

//remove user
const removeUser = (id) => {
  const userIndex = users.findIndex(user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0]; // removes user from user array if index was found
  }
};

// get user
const getUser = (id) => users.find((user) => user.id === id);

// get users in specific room
const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
