// Import necessary modules and dependencies
const express = require('express');
const app = express();

// Define routes and middleware
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
