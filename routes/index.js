var express = require('express');
var router = express.Router();

// Root Route - renders the single-page layout with all sections
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
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

  // Render a confirmation page or send a response
  res.send('Thank you for reaching out! We have received your message.');
});

module.exports = router;
