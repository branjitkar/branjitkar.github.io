const express = require("express");
const path = require("path");
const app = express();
const productRouter = require("./route/product");

const products = [
  { name: "Apple", price: 20, desc: "Fresh appples", id: 1 },
  { name: "Orange", price: 15, desc: "Fresh oranges", id: 2 },
  { name: "Banana", price: 40, desc: "Raw bananas", id: 3 },
  { name: "Pear", price: 50, desc: "Just Pears", id: 4 },
];
const cart = [
  {
    id: 1,
    name: "Apple",
    price: 20,
    desc: "Fresh appples",
    prodId: 1,
    quantity: 1,
  },
  {
    id: 2,
    name: "Orange",
    price: 15,
    desc: "Fresh oranges",
    prodId: 2,
    quantity: 1,
  },
];

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/style", express.static(path.join(__dirname, "style")));

app.use("/product", productRouter);

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "view", "main.ejs"), { products, cart });
});

app.listen(3000, () => {
  console.log("Running at port 3000...");
});
