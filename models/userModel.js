let users = require("../data/users");

function getAll() {
  return users;
}

function getById(id) {
  return users.find((u) => u.id === id);
}

function add(user) {
  if (users.length > 0) {
    user.id = users[users.length - 1].id + 1;
  } else {
    user.id = 1;
  }
  users.push(user);
  return user;
}

function update(id, newData) {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return null;

  const oldUser = users[index];
  const updatedUser = {
    id: oldUser.id,
    username: newData.username ? newData.username : oldUser.username,
    role: newData.role ? newData.role : oldUser.role,
  };

  users[index] = updatedUser;
  return updatedUser;
}

function remove(id) {
  const newUsers = users.filter((u) => u.id !== id);
  if (newUsers.length === users.length) return false;
  users = newUsers;
  return true;
}

module.exports = { getAll, getById, add, update, remove };
