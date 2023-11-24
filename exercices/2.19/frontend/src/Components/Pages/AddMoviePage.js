import Navigate from '../Router/Navigate';
import {addOneMovie} from '../../models/movie';

const AddMoviePage = () => {
  renderAddMoviePage();
  renderInputForm();
};

function renderAddMoviePage() {
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

function renderInputForm() {
  const form = document.querySelector('form');
  form.addEventListener('submit', addMovie);
}

function addMovie(e) {
  e.preventDefault(); // pour empêcher que la page se reload
  const title = document.getElementById('titleMovie').value;
  const duration = parseInt(document.getElementById('durationMovie').value, 10);
  const budget = parseInt(document.getElementById('budgetMovie').value, 10);
  const link = document.getElementById('descriptionMovie').value;

  const options = {
    method: 'POST',
    body: JSON.stringify({
      title,
      duration,
      budget,
      link,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
  addOneMovie(options);

  Navigate('/view');
}

export default AddMoviePage;
