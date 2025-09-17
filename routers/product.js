const express = require("express");
const router = express.Router();
let { products } = require("../data/fakeData");

router.get("/", (req, res) => {
  res.json(products);
});

router.post("/", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
    storeId: req.body.storeId,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;
