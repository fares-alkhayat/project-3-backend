const mongoose = require("mongoose");

const resturantSchema = new mongoose.Schema(
    {
        resturantName: {
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
        }
    },
    { timestamps: true },
);



const Resturant = mongoose.model("Resturant", resturantSchema);

module.exports = Resturant;
