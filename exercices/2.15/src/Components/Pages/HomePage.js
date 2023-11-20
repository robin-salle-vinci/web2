const HomePage = () => {
  
  renderHomePage();

  fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    .then((response) => {
      if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
      return response.json();
    })
    .then((joke) => {
      renderJoke(joke);
    })
    .catch((err) => {
      console.error('HomePage::error: ', err);
    });
};


function renderHomePage() {
  const main = document.querySelector('main');
  main.innerHTML = `<h1>Blagues: </h1>
  <p id="categorieJoke"></p>
  <p id="texteJoke"></p>`;
}

function renderJoke(joke) {
  const categorie = document.querySelector('#categorieJoke');
  const text = document.querySelector('#texteJoke');

  categorie.innerHTML = `catégorie: ${joke.category}`;
  text.innerHTML = `texte: ${joke.joke}`;
}

export default HomePage;
