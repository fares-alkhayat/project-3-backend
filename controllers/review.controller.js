const User = require('../models/User')
const Restaurant = require('../models/Restaurant')
const Review = require('../models/Review')


async function getAllReviews(req,res)
{ try {
    const foundReviews = await Review.find()
    res.status(200).json(foundReviews)
}
    catch (err) {
    res.status(404).json({message: "No reviews found."})
    }
}

async function getOneReview(req,res)
{ try {
    const foundReview = await Review.findById()
    res.status(200).json(foundReview)
}
    catch (err) {
    res.status(404).json({message: "The review you are trying to locate cannot be found."})
    }
}

module.exports = {}