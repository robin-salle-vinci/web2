import groot from '../../img/groot.jpg';
import stormtrooper from '../../img/stormtrooper.jpg';

const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `<div class="text-center">
  <h3>Welcome to myMovies !</h3>

  <p>Here you can find a selection of our favorite movies ; )</p>
  <div class="pb-3">
    <img style="width:50%" src="${groot}" alt="Groot" />
  </div>

  <div>
    <img style="width:50%" src="${stormtrooper}" alt="Stormtrooper" />
  </div>
</div>`;
};

export default HomePage;
