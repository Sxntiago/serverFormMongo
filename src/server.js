const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const initDB = require("./config/db");
const userRoutes = require("./routes/user.router");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log("online");
});

initDB();
