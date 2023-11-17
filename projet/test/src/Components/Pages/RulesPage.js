import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';

const RulesPage = () => {
  clearPage();
  renderRulesPage();
  renderGoBackHomeButton();
};

function renderRulesPage () {
  const main = document.querySelector('main');
  main.innerHTML = `
  <div class="container-fluid d-flex justify-content-center">
    <h1 class="text-center text-primary pt-1">
      Trivial Vinci
    </h1>
  </div>
  <div class="container-fluid d-flex justify-content-center">
  <p class="text-center">
    Être le premier joueur à remplir son camembert avec les 6 triangles marqueurs de couleur
    différente en répondant correctement aux questions.<br />
    Puis retourner au centre du plateau et répondre correctement à la question finale pour
    remporter la partie !
  </p>
  </div>
  <div class="container-fluid d-flex justify-content-center">
  <input type="submit" class="btn btn-secondary" href="" id="buttomBack" value="Retourner à l'accueil">
  </div>
  `;
};

function renderGoBackHomeButton() {
  const buttomBack = document.querySelector('#buttomBack');
   
  buttomBack.addEventListener('click', () => {
    Navigate('/');
  });
};

export default RulesPage;
