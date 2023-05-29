const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

// Define routes
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Add the router middleware
app.use('/', router);

// Start the server
const port = process.env.PORT || 8080;
const server = app.listen(port, function () {
  console.log('Running at Port ' + port);
});

// Gracefully shut down the server
process.on('SIGINT', function () {
  console.log('Shutting down server...');
  server.close(function () {
    console.log('Server stopped.');
    process.exit(0);
  });
});

module.exports = app;
