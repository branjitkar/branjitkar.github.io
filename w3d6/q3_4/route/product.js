const express = require("express");
const router = express.Router();
const products = [
  { name: "Apple", price: 20, desc: "Fresh appples", id: 1 },
  { name: "Orange", price: 15, desc: "Fresh oranges", id: 2 },
  { name: "Banana", price: 40, desc: "Raw bananas", id: 3 },
  { name: "Pear", price: 50, desc: "Just Pears", id: 4 },
];
const cart = [
  { name: "Apple", price: 20, desc: "Fresh appples", id: 1, quantity: 1 },
  { name: "Orange", price: 15, desc: "Fresh oranges", id: 2, quantity: 1 },
];
router.get("/", (req, res) => {
  res.render("../view/product.ejs", products[0]);
});
router.get("/cart", (req, res) => {
  res.render("../view/shoppingcart.ejs", { cart });
});
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const productById = products.filter((x) => x.id === id)[0];
  res.render("../view/product.ejs", productById);
});
module.exports = router;
