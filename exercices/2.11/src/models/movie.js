const MOVIES = [];

function readAllMovies () {
    return MOVIES;
}

function addOneMovie (movie) {
    MOVIES.push(movie);
}

export { addOneMovie, readAllMovies };