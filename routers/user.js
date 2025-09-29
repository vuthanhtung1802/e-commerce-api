const express = require("express");
const router = express.Router();
let { users } = require("../data/users");

// Lấy tất cả user
router.get("/", (req, res) => {
  res.json(users);
});

// Thêm user mới
router.post("/", (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Fake login
router.post("/login", (req, res) => {
  const { username } = req.body;
  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }

  const fakeToken = `token-${user.role}`;
  res.json({ token: fakeToken, user });
});

module.exports = router;
