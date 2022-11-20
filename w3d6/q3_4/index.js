const express = require("express");
const path = require("path");
const app = express();
const productRouter = require("./route/product");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/style", express.static(path.join(__dirname, "style")));

app.use("/product", productRouter);

app.get("/", (req, res) => {
  res.redirect("/product");
});

app.listen(3000, () => {
  console.log("Running at port 3000...");
});
