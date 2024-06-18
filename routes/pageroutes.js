const express = require('express');
const router = express.Router();
// this file is where the server serves the pages to the client
// Home route
router.get('/', (req, res) => {
    res.render('index');
});

// About route
router.get('/about', (req, res) => {
    res.render('about');
});

// student route
router.get('/student', (req, res) => {
    res.render('student');
});

// admin route
router.get('/admin', (req, res) => {
    res.render('admin');
});
// admin route
router.get('/lecturer', (req, res) => {
    res.render('lecturer');
});
// login route
router.get('/login', (req, res) => {
    res.render('login');
});



module.exports = router