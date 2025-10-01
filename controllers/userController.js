const User = require("../models/userModel");

function getUsers(req, res) {
  res.json(User.getAll());
}

function getUser(req, res) {
  const user = User.getById(Number(req.params.id));
  if (!user) return res.status(404).json({ message: "Not found" });
  res.json(user);
}

function addUser(req, res) {
  const newUser = User.add(req.body);
  res.status(201).json(newUser);
}

function updateUser(req, res) {
  const updated = User.update(Number(req.params.id), req.body);
  if (!updated) return res.status(404).json({ message: "Not found" });
  res.json(updated);
}

function deleteUser(req, res) {
  const success = User.remove(Number(req.params.id));
  if (!success) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted successfully" });
}

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
