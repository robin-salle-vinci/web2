import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';

const HomePage = () => {
  clearPage();
  renderHomePage();
  renderRulesLink();
};

function renderHomePage() {
  const main = document.querySelector('main');
  main.innerHTML = `<div class="mt-2 pb-5">
  <div class="container-fluid d-flex justify-content-center">
    <h1 class="text-center navbar-item text-primary pt-1">
      Trivial Vinci
    </h1>
  </div>
  <div class="align-middle text-center" style="padding-top: 6%;">
    <div class="d-flex justify-content-center" style="padding-top: 7%">
    <button type="button" class="btn btn-primary btn-lg">Play !</button>
    </div>
    <div class="d-flex justify-content-center pt-3">
    <i class="bi bi-book"> Règles du jeu</i>
    </div>
  </div>
</div>
  `;
};

function renderRulesLink() {
  const linkRulesPage = document.querySelector('i');

  linkRulesPage.addEventListener('click', () => {
    Navigate('/rules');
  });
};

export default HomePage;
