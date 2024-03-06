const User = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const userNameCheck = await User.findOne({ username });
    if (userNameCheck)
      return res.json({ msg: "username already taked", status: false });
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "email already taken", status: false });
  } catch (err) {
    next(err);
  }
};
