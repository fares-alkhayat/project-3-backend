const mongoose = require("mongoose");

const menuItemsSchema = new mongoose.Schema(
    {
        dishName: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            maxLength: 25,
            minLength: 4,
        },
        pictureUrl: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0.1,
            max: 50,
        },
        restaurant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Restaurant'
        }
    },
    { timestamps: true },
);



const MenuItems = mongoose.model("MenuItems", menuItemsSchema);

module.exports = MenuItems;
