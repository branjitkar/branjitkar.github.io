const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();
const productRouter = require("./route/product");

const products = [
  { name: "Apple", price: 20, desc: "Fresh appples", id: 1 },
  { name: "Orange", price: 15, desc: "Fresh oranges", id: 2 },
  { name: "Banana", price: 40, desc: "Raw bananas", id: 3 },
  { name: "Pear", price: 50, desc: "Just Pears", id: 4 },
];
// let cart = [
//   {
//     cartId: 1,
//     name: "Apple",
//     price: 20,
//     desc: "Fresh appples",
//     id: 1,
//     quantity: 1,
//   },
//   {
//     cartId: 2,
//     name: "Orange",
//     price: 15,
//     desc: "Fresh oranges",
//     id: 2,
//     quantity: 1,
//   },
// ];

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: "this is a scret key" }));
app.use("/style", express.static(path.join(__dirname, "style")));
app.use("/product", productRouter);

app.get("/", (req, res) => {
  let cart = req.session.cart ? req.session.cart : [];
  res.render(path.join(__dirname, "view", "main.ejs"), { products, cart });
});

app.post("/addtocart", (req, res) => {
  let id = parseInt(req.body.id);
  let product = products.filter((p) => p.id == id);
  if (product) {
    let cart = req.session.cart ? req.session.cart : [];
    let cartId = cart.length > 0 ? cart[cart.length - 1].cartId + 1 : 1;
    cart.push({ cartId, ...product[0] });
    req.session.cart = cart;
  }
  res.redirect("/");
});

app.post("/removefromcart", (req, res) => {
  let cartId = parseInt(req.body.cartId);
  let cart = req.session.cart;
  req.session.cart = req.session.cart.filter((c) => c.cartId != cartId);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Running at port 3000...");
});
