const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/users');
const pizzaRouter = require('./routes/pizzas');
const filmsRouter = require('./routes/films');

const app = express();

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
    // eslint-disable-next-line no-console
    console.log(statsMessage);
    next();
  });

app.use('/users', usersRouter);
app.use('/pizzas', pizzaRouter);
app.use('/films', filmsRouter);

module.exports = app;
