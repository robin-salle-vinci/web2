async function getAllMovies() {
  try {
    const response = await fetch('/api/films');
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    const films = await response.json();
    return films;
  } catch (err) {
    console.error('getAllPizzas::error: ', err);
    throw err;
  }
};

async function addOneMovie(options) {
    const response = await fetch('/api/films', options); // fetch return a promise => we wait for the response
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
};

export { getAllMovies, addOneMovie };
