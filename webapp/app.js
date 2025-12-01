const express = require('express');
const redisClient = require('./utils/redisClient');
const path = require('path');

const app = express();


app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send('<h1>Bienvenue</h1><p><a href="/cv">Voir le CV</a></p>');
});


app.get('/cv', async (req, res) => {
    if (redisClient) {
        await redisClient.incr('cv_views');
    }

    const cvPath = path.join(__dirname, 'public', 'AngelCV.pdf');
    res.sendFile(cvPath);
});


app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

module.exports = app;
