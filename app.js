var express = require('express');
var bodyParser = require('body-parser');

var routes = require('./routes');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

module.exports = app;

