const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    menuItem: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "menuItem",
        required: true,
      },
    ],
    total: {
      type: Number,
    },
  },
  { timestamps: true },
);

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
