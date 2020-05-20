const express = require('express')
const app = express()
const path = require('path');
app.use('/build', express.static('build'))

app.get('/', function (req, res) {
    res.sendfile('./index.html');
});
app.get('/payment', function (req, res) {
    res.sendfile('./payment.html');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port port!`))