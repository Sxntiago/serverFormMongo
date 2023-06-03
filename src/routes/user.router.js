const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/users", (req, res) => {
  const { name, country } = req.body;

  const newUser = new User({
    name,
    country,
  });

  newUser
    .save()
    .then(() => res.json({ message: "user created successfully " }))
    .catch((err) => res.status(400).json({ error: "error creating new user" }));
});

router.get("/users", (req, res) => {
  User.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json({ error: err }));
});

module.exports = router;
