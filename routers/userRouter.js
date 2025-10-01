const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// tên hàm phải trùng với export trong controller
router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.post("/", userController.addUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
