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

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
