var express = require('express');
var router = express.Router();

const films = [
    {
        id: 1, title: 'La revanche des Sith', duration: 125, budget: 35459789, link: 'https://www.imdb.com/title/tt0121766/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_star%2520wars%2520reva'
    },

    {
        id: 2, title: 'Dikkenek', duration: 105, budget: 1400756, link: 'https://www.imdb.com/title/tt0456123/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_dikkenek'
    },

    {
        id: 3, title: 'Blanche neige et les 7 nains', duration: 90, budget: 10450321, link: 'https://www.imdb.com/title/tt0029583/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_blanche%2520neige%2520et%2520les'
    }
]


router.get('/', function (req, res) {
    const filter = req?.query ? Number(req.query['minimum-duration']) : undefined;

    console.log(filter);

    if (typeof filter !== 'number' || filter <= 0) {
        return res.sendStatus(400);
    };

    if (!filter) {
        return res.json(films);
    }

    const filteredFilms = films.filter(
        (film) => film.duration >= filter
    );

    return res.json(filteredFilms);
});

router.get('/:id', function (req, res) {
    const indexOfFilmFound = films.findIndex((film) => film.id == req.params.id);

    if (indexOfFilmFound < 0) {
        return res.sendStatus(404);
    }

    res.json(films[indexOfFilmFound]);

});

router.post('/', function (req, res) {
    const title =
    req?.body?.title?.trim()?.length !== 0 ? req.body.title : undefined; // trim() => retire les blancs
  const link =
    req?.body?.content?.trim().length !== 0 ? req.body.link : undefined;
  const duration =
    typeof req?.body?.duration !== 'number' || req.body.duration < 0
      ? undefined
      : req.body.duration;
  const budget =
    typeof req?.body?.budget !== 'number' || req.body.budget < 0
      ? undefined
      : req.body.budget;

  if (!title || !link || !duration || !budget) return res.sendStatus(400); // bad practise (will be improved in exercise 1.5)

  if(films.find((film) => film.title.toLowerCase() === title.toLowerCase())) {
    return res.sendStatus(409);
  }

  const lastItemIndex = films?.length !== 0 ? films.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? films[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

  const newFilm = { id: nextId, title, link, duration, budget };

  films.push(newFilm);

  return res.json(newFilm);
});


module.exports = router;