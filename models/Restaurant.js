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
            validate: {
                validator: (value) => {
                    try {
                        const url = new URL(value);
                        if (url.protocol !== 'http:' && url.protocol !== 'https:')
                            return false;

                        const hostname = url.hostname;
                        if (hostname.startsWith('[') && hostname.endsWith(']'))
                            return true;

                        return Boolean(hostname)
                            && !hostname.includes('..')
                            && hostname.split('.').every((label) =>
                                /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(label)
                            );
                    } catch {
                        return false;
                    }
                },
                message: 'Please enter a valid URL'
            }
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
