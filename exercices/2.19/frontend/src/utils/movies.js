const films = [];

function addOneMovie(film) {
    films.push(
        {
            title: film.titleMovie,
            duration: film.durationMovie,
            budget: film.budgetMovie,
            description: film.descriptionMovie,
        }
    );
};

function readAllMovies() {

}

export { addOneMovie, readAllMovies };
