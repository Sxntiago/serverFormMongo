const mongoose = require("mongoose");

const password = "bVaFk8hoEjkHUCwf";
const DB_URI = `mongodb+srv://santiagolopera96:${password}@cluster0.cee5krm.mongodb.net/?retryWrites=true&w=majority`;

module.exports = () => {
  const connect = () => {
    mongoose
      .connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  connect();
};
