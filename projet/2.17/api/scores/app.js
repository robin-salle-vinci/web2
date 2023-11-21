const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const scoresRouter = require('./routes/scores');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

 app.use('/scores', scoresRouter);


module.exports = app;
