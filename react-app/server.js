const express = require('express');
const app = express();
var router = express.Router();
var cors = require('cors')
app.use(cors())


app.use(express.static(__dirname + '/build'));
app.get('*', function (req, res) {
  res.sendfile('./build/index.html'); });

port = process.env.PORT || 4000;

app.listen(port);
console.log('todo list RESTful API server started on: ' + port);