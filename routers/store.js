const express = require("express");
const router = express.Router();
let { stores } = require("../data/stores");

// Lấy tất cả store
router.get("/", (req, res) => {
  res.json(stores);
});

// Thêm store
router.post("/", (req, res) => {
  const newStore = { id: stores.length + 1, ...req.body };
  stores.push(newStore);
  res.status(201).json(newStore);
});

module.exports = router;
