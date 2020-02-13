var express = require('express');
var bcrypt = require('bcryptjs');
var session = require('express-session');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var mongoose = require('mongoose');
var db ='mongodb://localhost:27017/users';
mongoose.connect(db);


var userRoutes = require('./routes/userroutes');
var userController = require('./controllers/usercontroller');


var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(helmet());
app.use(express.static('public'))
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.set('view engine','ejs');

app.use('/user', userRoutes);
app.get('/', function(req, res){
	res.render('index');
});


app.listen(3000);
