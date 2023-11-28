const express = require('express');

const {
    readAllScores,
    readOneScore
  } = require('../models/scores');

const router = express.Router();


router.get('/', (req, res) => {

    const scores = readAllScores();

    return res.json(scores);
});

router.get('/:id', (req, res) => {
    const score = readOneScore(req.params.id);

    if(!score) {
        return res.sendStatus(404);
    }

    return res.json(score);
});


module.exports = router;
