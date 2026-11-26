const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    category: {
      type: String,
    },
    resturant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resturant",
    },
  },
  { timestamps: true },
);

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
