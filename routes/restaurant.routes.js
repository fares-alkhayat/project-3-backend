const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken");
const authController = require('../controllers/auth.controller')
const reviewController = require('../controllers/review.controller')

const { isAdmin, isRestaurant } = require("../middleware/userRoles");

router.get('/:restaurantID/review/', reviewController.getAllReviews)

router.get('/:restaurantID/review/:reviewID', reviewController.getOneReview)

router.post('/:restaurantID/review/', isRestaurant, verifyToken, reviewController.createReview)

router.delete('/:restaurantID/review/:reviewID', isRestaurant, verifyToken, reviewController.deleteReview)

module.exports = router;