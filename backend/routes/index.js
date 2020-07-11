const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Respo = require("../respo/respo");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  User.findOne({ mobileNo: req.body.mobileNo }, (err, user) => {
    if (!user)
      return res.json({
        success: false,
        message: Respo.INVALID_MOBILE_NO,
      });
    bcrypt.compare(req.body.password, user.password).then(function (isMatch) {
      if (!isMatch)
        return res.json({ success: false, message: Respo.INVALID_PASSWORD });
    });
    var token = jwt.sign(
      {
        user_id: user._id,
      },
      "secret",
      { expiresIn: "1h" }
    );
    res.json({
      success: true,
      message: Respo.LOGIN_SUCCESFULL,
      data: token,
    });
  });
});

router.post("/register", (req, res) => {
  const user = new User(req.body);
  bcrypt.hash(user.password, saltRounds).then(function (hash) {
    user.password = hash;
    user.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({
        success: true,
        message: Respo.REGISTER_SUCCESFULLY,
      });
    });
  });
});

module.exports = router;
