import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';

const RulesPage = () => {
  clearPage();
  renderGoBackHomeButton();
};

function renderGoBackHomeButton() {
  const main = document.querySelector('main');
  main.innerHTML = `<div class=" container-fluid d-flex justify-content-center pt-5 pb-3">
  <p>
    Être le premier joueur à remplir son camembert avec les 6 triangles marqueurs de couleur
    différente en répondant correctement aux questions.<br />
    Puis retourner au centre du plateau et répondre correctement à la question finale pour
    remporter la partie !
  </p>
  </div>
  <div class=" container-fluid d-flex justify-content-center pt-5 pb-3">
  <input type="submit" class="btn btn-secondary" href="" id="buttomBack" value="Retourner à l'accueil">
  </div>
  `;

  const buttomBack = document.querySelector('#buttomBack');
   
  buttomBack.addEventListener('click', () => {
    Navigate('/');
  });

   
};

export default RulesPage;
