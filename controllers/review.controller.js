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
    const foundReview = await Review.findById(req.params.reviewID)
    if(!foundReview){
    return res.status(404).json({message: "The review you are trying to locate cannot be found."})}
    res.status(200).json(foundReview)
}
    catch (err) {
    console.log(err)
    }
}

async function createReview(req,res)
{ try {

    const createdReview = await Review.create({
        text: req.body.text,
        rating: req.body.rating,
        restaurant: req.params.restaurantID,
        user: req.user._id}
    )
    console.log(req.user._id)
    res.status(200).json(createdReview)
} catch(err) {
    console.log(err)
    res.status(400).json({message: "Review cannot be created."})
}
}

async function editReview(req,res){
    try {
        const foundReview = await Review.findById(req.params.reviewID)
        console.log(foundReview.user)
        console.log(req.user._id)
        if (!foundReview.user.equals(req.user._id)){
            return res.status(403).json({message: "You are not able to change this review."})
        }

        const updatedReview = await Review.findByIdAndUpdate(req.params.reviewID,
        { text: req.body.text,
        rating: req.body.rating,
        restaurant: req.params.restaurantID,
        user: req.user._id
        },{new:true})
        console.log(req.user._id)
        res.status(200).json(updatedReview)
        } catch (err) {
        console.log(err)
}}

async function deleteReview(req,res)
{ try {
    const foundReview = await Review.find(req.params.reviewID)
    if(foundReview.user._id == req.user._id){
    const deletedReview = await Review.findByIdAndDelete(req.params.reviewID)
    console.log(req.user._id)
    res.sendStatus(204).json(deletedReview)}}

    catch (err){
    console.log(err)
    res.status(403).json({message: "Review cannot be deleted."})}}

module.exports = {
    getAllReviews,
    getOneReview,
    createReview,
    editReview,
    deleteReview}