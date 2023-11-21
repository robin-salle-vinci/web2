const path = require('node:path');
const { parse} = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/scores.json');

const SCORES = [];
  
function readAllScores() {
    const scores = parse(jsonDbPath, SCORES);
    return scores;
}

function readOneScore(id) {
    const scores = parse(jsonDbPath, SCORES);
    const idInRequest = parseInt(id, 10);

    const indexOfScoreFound = scores.findIndex(t => t.id === idInRequest);

    if(indexOfScoreFound < 0) {
        return undefined;
    }

    return scores[indexOfScoreFound];
}

module.exports = {
     readAllScores,
     readOneScore
  };