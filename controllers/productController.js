const Product = require("../models/productModel");

function getProducts(req, res) {
  const products = Product.getAll();
  res.json(products);
}

function getProduct(req, res) {
  const product = Product.getById(Number(req.params.id));
  if (!product) return res.status(404).json({ message: "Not found" });
  res.json(product);
}

function addProduct(req, res) {
  const newProduct = Product.add(req.body);
  res.status(201).json(newProduct);
}

function updateProduct(req, res) {
  const updated = Product.update(Number(req.params.id), req.body);
  if (!updated) return res.status(404).json({ message: "Not found" });
  res.json(updated);
}

function deleteProduct(req, res) {
  const success = Product.remove(Number(req.params.id));
  if (!success) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted successfully" });
}

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
