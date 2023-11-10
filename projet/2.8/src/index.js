import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import backGround from './img/backGroundImage.jpg';

const main = document.querySelector('main');

renderHomePageDefault();

const buttomRules = document.querySelector('#buttomRules');

buttomRules.addEventListener('click', renderRulesPage);

function renderHomePageDefault() {
    main.innerHTML = `<body class="bg-info" background-image : ${backGround};>
    <nav class="navbar navbar-expand-sm navbar-light bg-info">
      <div class="container-fluid ">
        <a class="navbar-brand " href="#">Accueil</a>
        <a class="navbar-brand " href="#">#######</a>
        <a class="navbar-brand " href="#">#######</a>
        
        
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <a class="nav-link active" href="#">Se connecter</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">S'inscrire</a>
            </li>			
          </ul>		  
        </div>
      </div>
    </nav>
    <div>
      <div class="align-item-center">
        <h1 class="display-1 text-center">
          <p class="fw-bold">Trivial Vinci</p>
        </h1>
      </div>
      <div class="align-middle text-white text-center" id="divBody">
        <div class="d-flex justify-content-center">
          <a class="link-opacity-100" id="buttomRules" href="#">Règles du jeu</a>
        </div>
        <div class="d-flex justify-content-center">
          <a class="link-opacity-100" href="#">Set up the game</a>
        </div>
      </div>
    </div> 
    </body>
    `;
};

function renderRulesPage() {

    const divBody = document.querySelector('#divBody');

    divBody.innerHTML = `<p> Être le premier joueur à remplir son camembert
    avec les 6 triangles marqueurs de couleur différente
    en répondant correctement aux questions.<br>
    Puis retourner au centre du plateau et répondre
    correctement à la question finale pour remporter
    la partie !</p>
    `;
}


