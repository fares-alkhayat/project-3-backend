const User = require('../models/User')
const Resturant = require('../models/Resturant')
const Review = require('../models/Review')


async function creatResturant(req, res) {
    try {
        const { resturantName, pictureUrl, location } = req.body
        if (!resturantName || !pictureUrl || !location) return res.status(400).json({ message: "Username , location and pictire URL are required.", });
        if (resturantName.length < 4 || resturantName.length > 25) return res.status(400).json({ message: "The resturant name must be between 5 and 25 characters", });
        const newResturant = await Resturant.create({
            resturantName,
            pictureUrl,
            location,
            owner: req.user._id
        });
        res.status(201).json(newResturant)

    } catch (err) {
        console.log(err)
    }
}

async function getAllResturants(req, res) {
    try {
        const allResturants = await Resturant.find({ isApproved: true })
        res.status(200).json(allResturants)
    } catch (err) {
        console.log(err)
    }
}

async function getOneResturant(req, res) {
    try {

        const oneResturant = await Resturant.findById(req.params.resturantId)
        if (!oneResturant) {
            return res.status(404).json({ message: "resturant not found" })
        }
        const reviews = await Review.find({ restaurant: req.params.resturantId }).populate("user")
        res.status(200).json({ resturant: oneResturant, review: reviews })
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    creatResturant,
    getAllResturants,
    getOneResturant
}