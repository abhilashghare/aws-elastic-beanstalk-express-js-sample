const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello ABhilash 1st AWS demo changes done!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
