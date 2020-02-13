var userController = require('../controllers/usercontroller');
var express = require('express')
var session = require('express-session');
var router = express.Router();


router.get('/', userController.loginForm);
router.post('/login',  userController.validate('login'), userController.login);
router.get('/register', userController.registerForm);
router.post('/register', userController.validate('register'), userController.registerUser);
router.get('/restrict', userController.isLogged, userController.restrict);
router.get('/logout', userController.logout);


module.exports = router;
