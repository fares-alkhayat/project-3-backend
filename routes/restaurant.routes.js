const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken");
const authController = require('../controllers/auth.controller')
const reviewController = require('../controllers/review.controller')
const restaurantController = require('../controllers/restaurant.controller')

const { isAdmin, isRestaurant } = require("../middleware/userRoles");

router.get('/:restaurantID/review/', reviewController.getAllReviews)

router.get('/:restaurantID/review/:reviewID', reviewController.getOneReview)

router.post('/:restaurantID/review/', verifyToken, reviewController.createReview)

router.put('/:restaurantID/review/:reviewID', verifyToken, reviewController.editReview)

router.delete('/:restaurantID/review/:reviewID', verifyToken, reviewController.deleteReview)

router.post('/', verifyToken, restaurantController.createRestaurant)

router.put('/:restaurantID', verifyToken, restaurantController.editResturant)

router.get('/', restaurantController.getAllRestaurants)

router.get('/:restaurantID', verifyToken, restaurantController.getOneRestaurant)

router.delete('/:restaurantID', verifyToken, restaurantController.deleteRestaurant)


module.exports = router;