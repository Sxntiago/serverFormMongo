const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const initDB = require("./config/db");
const userRoutes = require("./routes/user.router");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log("online");
});

initDB();
