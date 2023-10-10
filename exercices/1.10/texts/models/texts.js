const path = require('node:path');
const { parse} = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/texts.json');

// eslint-disable-next-line import/no-extraneous-dependencies, import/order
const { v4: uuidv4 } = require('uuid');

const TEXTS = [
  {
    id: uuidv4(),
    content: "C'est le contenu textuel",
    level: 'medium',
  },
  {
    id: uuidv4(),
    content: "C'est le contenu textuel version 2",
    level: 'hard',
  },
  {
    id: uuidv4(),
    content: "C'est le contenu textuel version 3",
    level: 'easy',
  },
];

function readAllTexts(filter) {
    const texts = parse(jsonDbPath, TEXTS);

    if(filter) {
        const filteredTexts = texts.filter((t) => t.level === filter)
        return filteredTexts;
    }

    return texts;
}

function readOneText(id) {
    const texts = parse(jsonDbPath, TEXTS);
    const indexOfTextFound = texts.find(t => t.id === id);

    if(indexOfTextFound < 0) {
        return undefined;
    }

    return texts[indexOfTextFound];
}

module.exports = {
     readAllTexts,
     readOneText
  };