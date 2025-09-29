let products = require("../data/products");

function getAll() {
  return products;
}

function getById(id) {
  return products.find((product) => product.id === id);
}

function add(product) {
  if (products.length > 0) {
    product.id = products[products.length - 1].id + 1;
  }
  product.id = 1;

  products.push(product);
  return product;
}

function update(id, newData) {
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return null;
  }

  const oldProduct = products[index];

  const updatedProduct = {
    id: oldProduct.id,
    name: newData.name ? newData.name : oldProduct.name,
    price: newData.price ? newData.price : oldProduct.price,
  };

  products[index] = updatedProduct;

  return updatedProduct;
}

function remove(id) {
  const newProducts = products.filter((p) => p.id !== id);
  if (products.length === newProducts.length) return false;
  products = newProducts; // ghi đè lại mảng
  return true;
}

module.exports = { getAll, getById, add, update };
