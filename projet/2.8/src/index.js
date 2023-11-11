import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import backGround from './img/Trivial-Pursuit-plateau-couleurs.png';

const main = document.querySelector('main');

renderHomePageDefault();

function renderHomePageDefault() {
    main.innerHTML = `
    <div class="mt-2 pb-5" style="background-image: url('${backGround}'); height: 85vh; background-repeat: no-repeat; background-position: center center; background-size: contain">
      <div class="align-middle text-black text-center" style="padding-top: 80px;">
        <div class="d-flex justify-content-center">
          <a class="link-opacity-100" href="#divRules">Règles du jeu</a>
        </div>
        <div class="d-flex justify-content-center">
          <a class="link-opacity-100" href="#">Set up the game</a>
        </div>
      </div>
    </div>
    <div id="divRules" class=" container-fluid d-flex justify-content-center pt-5 pb-3">
    <p>
       Être le premier joueur à remplir son camembert
       avec les 6 triangles marqueurs de couleur différente
       en répondant correctement aux questions.<br>
       Puis retourner au centre du plateau et répondre
       correctement à la question finale pour remporter
       la partie !
    </p>
    </div> 
    `;
};

 

     

    /* divBody.innerHTML = `<p> Être le premier joueur à remplir son camembert
    avec les 6 triangles marqueurs de couleur différente
    en répondant correctement aux questions.<br>
    Puis retourner au centre du plateau et répondre
    correctement à la question finale pour remporter
    la partie !</p>
    `; */
 


