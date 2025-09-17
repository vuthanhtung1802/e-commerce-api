// FAKE DATA
let users = [
  { id: 1, username: "admin", role: "Admin" },
  { id: 2, username: "shop1", role: "ShopOwner" },
  { id: 3, username: "customer1", role: "Customer" },
];

let stores = [
  { id: 1, name: "Shop ABC", ownerId: 2, description: "Cửa hàng thời trang" },
];

let products = [
  { id: 1, name: "Áo thun", price: 100000, storeId: 1 },
  { id: 2, name: "Quần jean", price: 200000, storeId: 1 },
];
module.exports = { users, stores, products };