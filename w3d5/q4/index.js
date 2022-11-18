const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const { nextTick } = require("process");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/css", express.static(path.join(__dirname, "css")));

app.post("/result", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  if (!name) {
    name = "person";
  }
  if (!age) {
    age = -1;
  }
  res.redirect(`/output?name=${name}&age=${age}`);
});

app.get("/output", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  res.send(`Welcome ${name}. You are ${age} years old.`);
});

app.get("/", (req, res) => {
  const hour = new Date().getHours();
  const theme = hour >= 6 && hour < 18 ? "day" : "night";
  res.render(path.join(__dirname, "form.ejs"), { theme: theme });
});

app.listen(3000);
