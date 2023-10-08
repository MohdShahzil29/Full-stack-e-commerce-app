const express = require("express");
const {
  productListController,
  productPhotoController,
  getSingleProductController,
  productCountController,
  createProductController,
  getAllProductsController,
} = require("../controller/productController");
const { isAdmin } = require("../middlewares/authMiddlewares");
const formidable = require("express-formidable");

// formidable(),

const route = express.Router();
route.post("/create-products", formidable(),  createProductController);
route.get('/get-all-products', getAllProductsController)
route.get("/product-list", productListController);
route.get("/get-photo/:pid", productPhotoController);
route.get("/single-product/:slug", getSingleProductController);
route.get("/product-count", productCountController);
module.exports = route;
