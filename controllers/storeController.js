const Store = require("../models/storeModel");

function getStores(req, res) {
  res.json(Store.getAll());
}

function getStore(req, res) {
  const store = Store.getById(Number(req.params.id));
  if (!store) return res.status(404).json({ message: "Not found" });
  res.json(store);
}

function addStore(req, res) {
  const newStore = Store.add(req.body);
  res.status(201).json(newStore);
}

function updateStore(req, res) {
  const updated = Store.update(Number(req.params.id), req.body);
  if (!updated) return res.status(404).json({ message: "Not found" });
  res.json(updated);
}

function deleteStore(req, res) {
  const success = Store.remove(Number(req.params.id));
  if (!success) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted successfully" });
}

module.exports = {
  getStores,
  getStore,
  addStore,
  updateStore,
  deleteStore,
};
