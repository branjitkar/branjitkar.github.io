const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/result", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  if (!name) {
    name = "person";
  }
  if (!age) {
    age = -1;
  }
  res.send(`Welcome ${name}. You are ${age} years old.`);
});

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "view", "index.ejs"));
});

app.listen(3000);
