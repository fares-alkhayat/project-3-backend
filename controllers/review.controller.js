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

async function createReview(req,res)
{ try {
    const createdReview = await Review.create({
        text: req.body.text,
        rating: req.body,rating,
        restaurant: req.restaurant._id,
        user: req.user._id}
    )
    console.log(req.user._id)
    res.status(204).json(createdReview)
} catch {
    res.status(400).json({message: "Review cannot be created."})
}
}

async function deleteReview(req,res)
{ try {
    const foundReview = await Review.find(req.params._id)
    if(foundReview.user._id == req.user._id){
    const deletedReview = await Review.findByIdAndDelete(req.params.reviewId)
    console.log(req.user._id)
    res.sendStatus(204)}}
    catch (err){
    console.log(err)
    res.status(403).json({message: "You cannot perform this action."})}}

module.exports = {
    getAllReviews,
    getOneReview,
    createReview,
    deleteReview}