import { clearPage } from '../../utils/render';

const HomePage = () => {
  clearPage();
  renderHomePage();
};

function renderHomePage() {
  const main = document.querySelector('main');
  main.innerHTML = `<div class="mt-2 pb-5">
  <div class="container-fluid d-flex justify-content-center" style="padding-top: 5%;">
    <h1 class="text-center text-primary display-1">
      Trivial Vinci
    </h1>
  </div>

  <div class="align-middle text-center" style="padding-top: 5%;" >
    <div class="d-flex justify-content-center">
      <button type="button" class="btn btn-primary btn-lg">PLAY</button>
    </div>
    <div class="d-flex justify-content-center pt-5">
      <i class="bi bi-book"><a href="#Rulesdiv"> Règles du jeu </a></i>
    </div>
  </div>

  <div style="padding-top: 80%"></div>

  <div class="container-fluid d-flex justify-content-center" id="Rulesdiv">
  <p class="text-center">
    Être le premier joueur à remplir son camembert avec les 6 triangles marqueurs de couleur
    différente en répondant correctement aux questions.<br />
    Puis retourner au centre du plateau et répondre correctement à la question finale pour
    remporter la partie !
  </p>
  </div>
  <div class="container-fluid d-flex justify-content-center">
  <button type="button" class="btn btn-secondary"><a href="#UpPage" class="text-white"> Retourner à la page du haut </a> </button>
  </div>
</div>
  `;
};

export default HomePage;
