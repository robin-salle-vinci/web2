var express = require('express');
var router = express.Router();

const MENU = [
    {id: 1, ingredient: 'tomate'},
    {id: 2, ingredient: 'mozza'}
];

router.get('/', (req, res, next) => {
    res.json(MENU);
});


module.exports = router;