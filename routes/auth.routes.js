const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken");
const authController = require("../controllers/auth.controller");

const { isAdmin, isRestaurant } = require("../middleware/userRoles");

router.post("/sign-up", authController.signUp);

router.post("/sign-in", authController.signIn);

// router.get("/admin-panel", isAdmin, authController.adminPage);

router.get("/me", verifyToken, authController.verifyUser);

module.exports = router;
