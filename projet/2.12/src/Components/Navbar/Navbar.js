// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  const navbar = `
  <nav class="navbar navbar-expand-sm navbar-light" style="background-color: blueviolet;">
  <div class="container-fluid d-flex justify-content-start">
    <a class="navbar-brand nav-link" href="#" data-uri="/">Accueil</a>
    <a class="navbar-brand nav-link" href="#" data-uri="/rules">Règles du jeu</a>
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
  `;
  navbarWrapper.innerHTML = navbar;
};

export default Navbar;
