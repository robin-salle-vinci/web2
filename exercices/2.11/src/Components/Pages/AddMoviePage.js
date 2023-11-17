import { clearPage } from "../../utils/render";

const MOVIES = [];

const AddMoviePage = () => {
  clearPage();
  renderAddMoviePage();
  renderInputForm();
}

function renderAddMoviePage () {
  const main = document.querySelector('main');
    main.innerHTML = `<div class="text-center">
    <h3>page d'ajout film</h3>
    </div>
    <div style="height: 50px;"></div>
    <div class="container w-25 text-center">
    <form>
    <div class="mb-3">
      <label for="titleMovie" class="form-label">Titre :</label>
      <input type="text" class="form-control" id="titleMovie" maxlength="20" required>
    <div class="mb-3">
      <label for="durationMovie" class="form-label">Durée :</label>
      <input type="number" class="form-control" id="durationMovie" min="10" max="400" required>
    </div>
    <div class="mb-3">
      <label class="form-label" for="budgetMovie">Budget :</label>
      <input type="number" class="form-control" id="budgetMovie" min="1" required>
    </div>
    <div class="mb-3">
        <label class="form-label" for="descriptionMovie">Description :</label>
        <input type="link" class="form-control" id="descriptionMovie" required>
      </div>
    <input type="submit" class="btn btn-primary" value="Soumettre"></input>
    </form>
    </div>
    `;
}

function renderInputForm () {
  const form = document.querySelector('form');
  form.addEventListener('submit',addMovie);
}

function addMovie (e) {
  e.preventDefault(); // pour empêcher que la page se reload
  const title = document.getElementById('titleMovie').value;
  const duration = document.getElementById('durationMovie').value;
  const budget = document.getElementById('budgetMovie').value;
  const description = document.getElementById('descriptionMovie').value;

const movie = {
  title,
  duration,
  budget,
  description
}
MOVIES.push(movie);
// eslint-disable-next-line no-console
console.log(movie);
}

export default AddMoviePage;