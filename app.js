const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Server is running! 👍');
});

app.get('/sum', (req, res) => {
    const a = parseInt(req.query.a || 0);
    const b = parseInt(req.query.b || 0);
    res.json({ result: a + b });
});

module.exports = app;