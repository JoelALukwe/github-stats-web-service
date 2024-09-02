const express = require('express');
const cors = require('cors');
const githubRoutes = require('./routes/githubRoutes'); // Import the routes
require('dotenv').config();

const app = express(); // Initialize the Express application
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Use the GitHub routes with middleware applied
app.use('/api/github', githubRoutes);

app.get('/', (req, res) => {
    res.send('GitHub Stats Web Service is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

