module.exports = () => {
  const mongoose = require("mongoose");
  const mongoURI = "mongodb://localhost:27017/RPF";

  mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));
};
