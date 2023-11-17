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
<nav class="navbar navbar-expand-sm navbar-light">

<div class="nav nav-underline container-fluid d-flex justify-content-start ps-5">
    <a class="nav-link" href="#" data-uri="/">Accueil</a>
</div>

<div class="nav nav-underline container-fluid d-flex justify-content-end pe-5">
    <a class="nav-link" href="#">Se connecter</a>
    <a class="nav-link" href="#">S'inscrire</a>
</div>

</nav>
  `;
  navbarWrapper.innerHTML = navbar;
};

export default Navbar;
