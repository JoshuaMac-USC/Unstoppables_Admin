// load the things we need
const express = require('express');
const app = express();


//Middleware and Static
app.use(express.static('public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// rent page
app.get('/rentnow', function(req, res) {
    res.render('pages/rentpage');
});

// login page
app.get('/login', function(req, res) {
    res.render('pages/login');
});

//register page
app.get('/register', function(req, res) {
    res.render('pages/register');
});


app.listen(8080);
console.log('8080 is the magic port');