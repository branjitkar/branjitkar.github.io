const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const date = new Date();
  const hour = date.getHours();
  const theme =
    hour >= 6 && hour < 18 ? "/public/css/day.css" : "/public/css/night.css";
  res.render("index", {
    time: date.toTimeString(),
    theme: theme,
  });
});
app.listen(3000);
