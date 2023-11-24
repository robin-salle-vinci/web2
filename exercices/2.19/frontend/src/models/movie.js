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
}

export default getAllMovies;
