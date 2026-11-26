const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
    {
        restaurantName: {
            type: String,
            required: true,
            unique: true,
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
        location: {
            type: String,
            required: true,
            trim: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        isApproved: {
            type: Boolean,
            default: false
    }
    },
    { timestamps: true },
);



const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
