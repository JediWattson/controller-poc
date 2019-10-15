var express = require('express');
var cors = require("cors");
var logger = require('morgan');

var indexRouter = require('./routes/index');
var notifyRouter = require('./routes/notify');

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', indexRouter);
app.use('/notify', notifyRouter);

module.exports = app;
