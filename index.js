const express = require('express');
const app = express();
var cors = require('cors')
const http = require('http').createServer(app);

// config
const config = {
    port: 3000
};

app.use(cors());

// start express server on port
http.listen(config.port, () => {
    console.log(`http://localhost:${config.port}/`);
});

app.post('/nfc/:id', (req, res) => {
    console.log(`received id: ${req.params.id}`);
    res.send(`received id: ${req.params.id}`);
});

app.get('/', (req, res) => {
    res.contentType('application/json');
    res.send('API Server is running');
});