const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')


router.route('/signup')
    .get(authController.getSignup)
    .post(authController.addUser)

router.route('/login')
    .get(authController.getLogin)
    .post(authController.loginUser)

module.exports = router;