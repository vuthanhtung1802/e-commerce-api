const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require("./routers/userRouter");
const storeRoutes = require("./routers/storeRouter");
const productRoutes = require("./routers/productRouter");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Fake E-commerce API đang chạy...");
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/stores", storeRoutes);
app.use("/api/products", productRoutes);

// Run server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server chạy ở http://localhost:${PORT}`));
