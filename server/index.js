// Nasz kod serwisu w node.js
const express = require('express');
const randomColor = require('./randomColor');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ color: randomColor() }));
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));