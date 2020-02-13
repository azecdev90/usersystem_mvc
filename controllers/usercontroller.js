var User = require('../models/usermodel');
const { check, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');

exports.isLogged = ( req, res, next) => {
  if (req.session.loggedin)
  return next();

  res.redirect('/user');
}

exports.loginForm = (req, res) => {
  res.render('login');
}


exports.login = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    var err = errors.array();
    res.render('login', { errors: err});
 return;
  } else {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({ name: username }, function (err, user) {
        if(!user){

          var message = [{ msg:'User doesnt exist !'}];
          res.render('login', {errors: message});
        } else {
          var dbpass = user.password;
          bcrypt.compare(password, dbpass, function(error, ismatch){
              if(ismatch){
                req.session.loggedin = true;
                res.redirect('/user/restrict');

              }else {
                var errorlogin = [{ msg: 'Username and password combination not correct!'}];
                res.render('login', {errors: errorlogin});
              }
          });
        }
    });
}
}

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/user');
}

exports.registerForm = (req, res) => {
  res.render('register');
}

exports.restrict = (req, res) => {
  res.render('restrictedarea');
}


exports.registerUser = (req, res) => {
       const errors = validationResult(req);
       if (!errors.isEmpty()) {

           res.render('register', { errors: errors.array()});
           return;
       }

       var name = req.body.username;
       var password = req.body.password;
       var email = req.body.email;

       bcrypt.hash(password, 8, function(err, hash){
         User.create({ name: name, password: hash, email:email }, function (err, user) {
                 if (err) {
                    var error = [{msg: 'Cant create account!'}];
                    res.render('register', {errors: error});
                 } else {
        res.redirect('/user')
       }
      });
   });
};

exports.validate = (method) => {
  switch (method) {
    case 'register': {
     return [
       check('username').not().isEmpty().withMessage('Username field is required'),
       check('email').not().isEmpty().withMessage('Email field is required !').isEmail().withMessage('You must specifed email in real format !'),
       check('password').not().isEmpty().withMessage('Password field is required').isLength({min: 6}).withMessage('You must specified password with minimum 6 characters !')
       ]
    }
    case 'login': {
      return [
        check('username').not().isEmpty().withMessage('Username field is required'),
        check('password').not().isEmpty().withMessage('Password filed is required')
      ]
    }
  }
}
