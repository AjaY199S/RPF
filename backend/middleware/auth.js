const User = require("../models/user");
const jwt = require("jsonwebtoken");
const Respo = require("../respo/respo");

let auth = (req, res, next) => {
  let token = req.headers.token;
  jwt.verify(token, "secret", (err, decode) => {
    if (err) {
      res.json({ sucess: false, message: err.message });
      next();
    } else if (decode) {
      res.json({ sucess: true, message: Respo.TOKEN_VALID, data: decode });
      next();
    }
  });
};

module.exports = auth;
