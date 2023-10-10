const path = require('node:path');
const { parse} = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/texts.json');

// eslint-disable-next-line import/no-extraneous-dependencies
require('uuid');

const TEXTS = [
  {
    id: "94ad866a-5af7-49aa-9b6e-a618cddf9de2",
    content: "C'est le contenu textuel",
    level: 'medium',
  },
  {
    id:  "5967a786-b871-406e-a9af-8b601aa8a4d5",
    content: "C'est le contenu textuel version 2",
    level: 'hard',
  },
  {
    id: "97adac22-8d80-4abc-a339-16ca9771cffb" ,
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
    const indexOfTextFound = texts.findIndex(t => t.id === id);

    if(indexOfTextFound < 0) {
        return undefined;
    }

    return texts[indexOfTextFound];
}

module.exports = {
     readAllTexts,
     readOneText
  };