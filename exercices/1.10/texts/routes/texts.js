const express = require('express');

const {
    readAllTexts,
    readOneText
  } = require('../models/texts');

const router = express.Router();


router.get('/', (req, res) => {
    const filter = req?.query?.level ? req.query.level : undefined;

    if(filter !== undefined && filter !== 'medium' && filter !== 'hard' && filter !== 'easy') {
        return res.sendStatus(400);
    }

    const texts = readAllTexts(filter);

    return res.json(texts);
});

router.get('/:id', (req, res) => {
    const text = readOneText(req.params.id);

    if(!text) {
        return res.sendStatus(404);
    }

    return res.json(text);
});


module.exports = router;
