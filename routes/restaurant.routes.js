const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken");
const authController = require('../controllers/auth.controller')
const reviewController = require('../controllers/review.controller')

router.get('/restaurant/:restaurantID/review/', reviewController.getAllReviews)

router.get('/restaurant/:restaurantID/review/:reviewID', reviewController.getOneReview)

router.post('/restaurant/:restaurantID/review/:reviewID', verifyToken, reviewController.createReview)

router.delete('/restaurant/:restaurantID/review/:reviewID', verifyToken, reviewController.deleteReview)

module.exports = router;