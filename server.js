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

// car list page
app.get('/carlist', function(req, res) {
    res.render('pages/carlist');
});

// bookings page
app.get('/booking', function(req, res) {
    res.render('pages/booking');
});

// new car form
app.get('/carform', function(req, res) {
    res.render('pages/carform');
});

// profile page
app.get('/profile', function(req, res) {
    res.render('pages/profile');
});

// profile page
app.get('/editprofile', function(req, res) {
    res.render('pages/editprofile');
});

app.listen(8080);
console.log('8080 is the magic port');