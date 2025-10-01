const express = require("express");
const router = express.Router();
const storeController = require("../controllers/storeController");

router.get("/", storeController.getStores);

router.get("/:id", storeController.getStore);

router.post("/", storeController.addStore);

router.put("/:id", storeController.updateStore);

router.delete("/:id", storeController.deleteStore);

module.exports = router;
