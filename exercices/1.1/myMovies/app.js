var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var filmsRouter = require('./routes/films');
 


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const stats = {};

app.use((req, res, next) => {
    const currentOperation = `${req.method} ${req.path}`; // on prend toutes les requetes de cette opération en string
    const currentOperationCounter = stats[currentOperation];// verifie si currentOperation existe dans l'objet stats(si oui mets sa valeur dans counter sinon undefined)
    if (currentOperationCounter === undefined) stats[currentOperation] = 0;
    stats[currentOperation] += 1;
    const statsMessage = `Request counter : \n${Object.keys(stats)
      .map((operation) => `- ${operation} : ${stats[operation]}`)
      .join('\n')}
        `;
    console.log(statsMessage);
    next();
  });
  

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/films', filmsRouter);





module.exports = app;
