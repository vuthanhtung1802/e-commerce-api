let stores = require("../data/stores");

function getAll() {
  return stores;
}

function getById(id) {
  return stores.find((s) => s.id === id);
}

function add(store) {
  if (stores.length > 0) {
    store.id = stores[stores.length - 1].id + 1;
  } else {
    store.id = 1;
  }
  stores.push(store);
  return store;
}

function update(id, newData) {
  const index = stores.findIndex((s) => s.id === id);
  if (index === -1) return null;

  const oldStore = stores[index];
  const updatedStore = {
    id: oldStore.id,
    name: newData.name ? newData.name : oldStore.name,
    ownerId: newData.ownerId ? newData.ownerId : oldStore.ownerId,
  };

  stores[index] = updatedStore;
  return updatedStore;
}

function remove(id) {
  const newStores = stores.filter((s) => s.id !== id);
  if (newStores.length === stores.length) return false;
  stores = newStores;
  return true;
}

module.exports = { getAll, getById, add, update, remove };
