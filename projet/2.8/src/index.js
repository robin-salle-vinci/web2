import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import backGround from './img/Trivial-Pursuit-plateau-couleurs.png';

const divHTML = document.querySelector('#divGenericHTML');

renderHomePageDefault();

const buttomRules = document.querySelector('#buttomRules');
buttomRules.addEventListener('click',renderHomePageWithRules);

function renderHomePageDefault() {
    divHTML.innerHTML = `<body>
    <nav class="navbar navbar-expand-sm navbar-light" style="background-color: blueviolet;">
      <div class="container-fluid d-flex justify-content-start">
        <a class="navbar-brand " href="#">Accueil</a>
        <a class="navbar-brand " href="#">#######</a>
        <a class="navbar-brand " href="#">#######</a>
      </div>

      <div class="container-fluid d-flex justify-content-center">
        <h1 class="text-center navbar-item">
          Trivial Vinci
        </h1>
      </div>

      <div class=" container-fluid d-flex navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav ">
          <li class="nav-item">
            <a class="nav-link" href="#">Se connecter</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">S'inscrire</a>
          </li>
        </ul>
      </div>
    </nav>

    <main>
    <div class="mt-2 pb-5" style="background-image: url('${backGround}'); height: 85vh; background-repeat: no-repeat; background-position: center center; background-size: contain;">
      <div class="align-middle text-black text-center" style="padding-top: 80px;">
        <div class="d-flex justify-content-center">
          <a class="link-opacity-100" href="#" id="buttomRules">Règles du jeu</a>
        </div>
        <div class="d-flex justify-content-center">
          <a class="link-opacity-100" href="#">Set up the game</a>
        </div>
      </div>
    </div>
    </main>

    <footer class="fixed-bottom" style="background-color: blueviolet;">
      <div class="text-center">Robin, Mario, Jason, Joachim</div>
    </footer>
  </body>`
};

function renderHomePageWithRules () {
  const main = document.querySelector('main');
  main.innerHTML = ` <div class=" container-fluid d-flex justify-content-center pt-5 pb-3">
  <p>
    Être le premier joueur à remplir son camembert avec les 6 triangles marqueurs de couleur
    différente en répondant correctement aux questions.<br />
    Puis retourner au centre du plateau et répondre correctement à la question finale pour
    remporter la partie !
  </p>
  `;
};

 

     

     


