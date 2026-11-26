const mongoose = require("mongoose");
function isAdmin(req, res, next) {
  if (req.user.role === "admin") {
    next();
  } else {
    return res.status(404).json({ message: "Access not granted." });
  }
}
function isRestaurant(req, res, next) {
  if (req.user.role === "restaurant") {
    next();
  } else {
    return res.status(404).json({ message: "Access not granted." });
  }
}
function isDriver(req, res, next) {
  if (req.user.role === "driver") {
    next();
  } else {
    return res.status(404).json({ message: "Access not granted." });
  }
}
function isUser(req, res, next) {
  if (req.user.role === "user") {
    next();
  } else {
    return res.status(404).json({ message: "Access not granted." });
  }
}
module.exports = { isAdmin, isRestaurant, isDriver, isUser };
