const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/films.json');

const MOVIES = [
  {
    id: 1,
    title: 'La revanche des Sith',
    duration: 125,
    budget: 35459789,
    link:
      'https://www.imdb.com/title/tt0121766/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_star%2520wars%2520reva',
  },

  {
    id: 2,
    title: 'Dikkenek',
    duration: 105,
    budget: 1400756,
    link: 'https://www.imdb.com/title/tt0456123/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_dikkenek',
  },

  {
    id: 3,
    title: 'Blanche neige et les 7 nains',
    duration: 90,
    budget: 10450321,
    link:
      'https://www.imdb.com/title/tt0029583/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_blanche%2520neige%2520et%2520les',
  },
];

function readAllFilms(sortBy) {
  const films = parse(jsonDbPath, MOVIES);
  if (sortBy) {
    const filteredFilms = films.filter((film) => film.duration >= sortBy);
    return filteredFilms;
  }
  return films;
}

function readOneFilm(id) {
  const films = parse(jsonDbPath, MOVIES);
  const idInRequest = parseInt(id, 10);
  const indexOfFilmFound = films.findIndex((film) => film.id === idInRequest);
  if (indexOfFilmFound < 0) return undefined;
  return films[indexOfFilmFound];
}

function createOneFilm(title, link, duration, budget, id) {
  const films = parse(jsonDbPath, MOVIES);
  if (films.find((film) => film.title.toLowerCase() === title.toLowerCase())) {
    return undefined;
  }
  if(!id) {
    // eslint-disable-next-line no-param-reassign
    id = getNextId();
  }
  const newFilm = { id: parseInt(id,10), title, link, duration, budget };
  films.push(newFilm);
  serialize(jsonDbPath, films);
  return newFilm;
}

function getNextId() {
  const films = parse(jsonDbPath, MOVIES);
  const lastItemIndex = films?.length !== 0 ? films.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = films[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}

function deleteOneFilm(id) {
  const films = parse(jsonDbPath, MOVIES);
  const idInRequest = parseInt(id, 10);
  const indexOfFilmFound = films.findIndex((film) => film.id === idInRequest);
  if (indexOfFilmFound < 0) return undefined;
  const deletedFilmFromMenu = films.splice(indexOfFilmFound, 1);
  const deletedFilm = deletedFilmFromMenu[0]; // car il envoie un tableaa (splice)
  serialize(jsonDbPath, films);
  return deletedFilm;
}

function updateOneFilm(id, propertiesToUpdate) {
  const films = parse(jsonDbPath, MOVIES);
  const idInRequest = parseInt(id, 10);
  const indexOfFilmFound = films.findIndex((film) => film.id === idInRequest);
  if (indexOfFilmFound < 0) return undefined;
  const updatedFilm = { ...films[indexOfFilmFound], ...propertiesToUpdate };
  films[indexOfFilmFound] = updatedFilm;
  serialize(jsonDbPath, films);
  return updatedFilm;
}

module.exports = {
  readAllFilms,
  readOneFilm,
  createOneFilm,
  deleteOneFilm,
  updateOneFilm,
};
