const User = require('../models/User')
const Restaurant = require('../models/Restaurant')
const Review = require('../models/Review')


async function createRestaurant(req, res) {
    try {
        const { restaurantName, pictureUrl, location } = req.body
        if (!restaurantName || !pictureUrl || !location) return res.status(400).json({ message: "Username , location and pictire URL are required.", });
        if (restaurantName.length < 4 || restaurantName.length > 25) return res.status(400).json({ message: "The restaurant name must be between 5 and 25 characters", });
        const newRestaurant = await Restaurant.create({
            restaurantName,
            pictureUrl,
            location,
            owner: req.user._id
        });
        res.status(201).json(newRestaurant)

    } catch (err) {
        console.log(err)
    }
}

async function getAllRestaurants(req, res) {
    try {
        const allRestaurants = await Restaurant.find({ isApproved: true })
        res.status(200).json(allRestaurants)
    } catch (err) {
        console.log(err)
    }
}

async function getOneRestaurant(req, res) {
    try {

        const oneRestaurant = await Restaurant.findById(req.params.restaurantId)
        if (!oneRestaurant) {
            return res.status(404).json({ message: "restaurant not found" })
        }
        const reviews = await Review.find({ restaurant: req.params.restaurantId }).populate("user")
        res.status(200).json({ restaurant: oneRestaurant, review: reviews })
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    createRestaurant,
    getAllRestaurants,
    getOneRestaurant
}