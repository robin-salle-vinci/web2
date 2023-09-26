var express = require('express');
var router = express.Router();

const MOVIES = [
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


router.get('/', function(req, res) {
    const filter = req?.query['minimum-duration'] > 0 ? req.query['minimum-duration'] : undefined;

    console.log(filter);
    
    if(filter === undefined) {
       res.json(MOVIES);
    };

    let filteredMovies = MOVIES.filter((movie) => movie.duration >= filter);
    res.json(filteredMovies);
});

router.get('/:id', function(req, res) {
    const indexOfMovieFound = MOVIES.findIndex((movie) => movie.id == req.params.id);

    if(indexOfMovieFound < 0) {
        return res.sendStatus(404);
    }

    res.json(MOVIES[indexOfMovieFound]);

});

router.post('/', function(req, res) {
     const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
     const duration = req?.body?.duration > 0 ? req.body.duration : undefined;
     const budget = req?.body?.budget > 0 ? req.body.budget : undefined;
     const link = req?.body?.link?.length !== 0 ? req.body.link : undefined;

     if(!title || !duration || !budget || !link) {
        return res.sendStatus(404);
     }

     const lastIndex = MOVIES.length;

     const newMovie = {
        id: lastIndex + 1,
        title: title,
        duration: duration,
        budget: budget,
        link: link
     };

     MOVIES.push(newMovie);

     res.json(newMovie);
});


module.exports = router;