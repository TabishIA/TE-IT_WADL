const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// POST endpoint
app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;
    console.log('Received registration data (POST):', { name, email, password });
    res.send('User registered successfully (POST)');
});

// GET endpoint
app.get('/api/register', (req, res) => {
    const { name, email, password } = req.query;
    console.log('Received registration data (GET):', { name, email, password });
    res.send('User registered successfully (GET)');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});