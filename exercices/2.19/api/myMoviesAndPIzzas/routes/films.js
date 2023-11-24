const express = require('express');

const {
  readAllFilms,
  readOneFilm,
  createOneFilm,
  deleteOneFilm,
  updateOneFilm,
} = require('../models/films');

const router = express.Router();

router.get('/', (req, res) => {
  const filter = req?.query ? Number(req.query['minimum-duration']) : undefined;

  // eslint-disable-next-line no-console
  console.log(filter);

  if (typeof filter !== 'number' || filter <= 0) {
    return res.sendStatus(400);
  }

  const films = readAllFilms(filter);
  return res.json(films);
});

router.get('/:id', (req, res) => {
  const film = readOneFilm(req.params.id);

  if (!film) {
    return res.sendStatus(404);
  }

  return res.json(film);
});

router.post('/', (req, res) => {
  const title = req?.body?.title?.trim()?.length !== 0 ? req.body.title : undefined; // trim() => retire les blancs
  const link = req?.body?.content?.trim().length !== 0 ? req.body.link : undefined;
  const duration =
    typeof req?.body?.duration !== 'number' || req.body.duration < 0
      ? undefined
      : req.body.duration;
  const budget =
    typeof req?.body?.budget !== 'number' || req.body.budget < 0 ? undefined : req.body.budget;

  if (!title || !link || !duration || !budget) return res.sendStatus(400); // bad practise (will be improved in exercise 1.5)

  const film = createOneFilm(title, link, duration, budget);

  if (!film) {
    return res.sendStatus(409);
  }

  return res.json(film);
});

router.delete('/:id', (req, res) => {
  const deletedFilm = deleteOneFilm(req.params.id);

  if (!deletedFilm) {
    return res.sendStatus(404);
  }

  return res.json(deletedFilm);
});

router.patch('/:id', (req, res) => {
  const title = req?.body?.title;
  const duration = req?.body?.duration;
  const budget = req?.body?.budget;
  const link = req?.body?.link;

  if (
    !req.body ||
    (title !== undefined && !title.trim()) ||
    (link !== undefined && !link.trim()) ||
    (duration !== undefined && (typeof req?.body?.duration !== 'number' || duration < 0)) ||
    (budget !== undefined && (typeof req?.body?.budget !== 'number' || budget < 0))
  ) {
    return res.sendStatus(400);
  }

  const updatedFilm = updateOneFilm(req.params.id, { title, duration, budget, link });

  if (!updatedFilm) {
    return res.sendStatus(404);
  }
  
  return res.json(updatedFilm);
});

router.put('/:id', (req, res) => {
  const title = req?.body?.title;
  const duration = req?.body?.duration;
  const budget = req?.body?.budget;
  const link = req?.body?.link;

  if (
    !req.body ||
    !title ||
    !title.trim() ||
    !link ||
    !link.trim() ||
    duration === undefined ||
    typeof req?.body?.duration !== 'number' ||
    duration < 0 ||
    budget === undefined ||
    typeof req?.body?.budget !== 'number' ||
    budget < 0
  ) {
    return res.sendStatus(400);
  }

  const updatedFilm = updateOneFilm(req.params.id, { title, duration, budget, link });

  if (!updatedFilm) {
    const newFilm = createOneFilm(title, link, duration, budget,req.params.id);
    return res.json(newFilm);
  }

  return res.json(updatedFilm);
});

module.exports = router;
