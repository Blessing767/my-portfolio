var express = require('express');
var router = express.Router();

// Home Page Route
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// About Me Page Route
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

// Projects Page Route
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

// Contact Me Page Route
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

// Contact Form Submission Route
router.post('/contact/submit', function(req, res, next) {
  // Extract form data from the request body
  const { name, email, phone, comments } = req.body;

  // Log the data to the console (for now, to confirm submission handling)
  console.log('Form Submission Received:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone}`);
  console.log(`Comments: ${comments}`);

  // Render a confirmation page or redirect to a thank-you page
  res.send('Thank you for reaching out! We have received your message.');
});

module.exports = router;
