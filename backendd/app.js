var express = require('express');
var port = 3000;
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

require('./models/db');

var indexRouter = require('./routes/index');

var app = express();
({ message: 'Client created' });
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());


app.use('/api', indexRouter);
module.exports = app;
app.listen(port);