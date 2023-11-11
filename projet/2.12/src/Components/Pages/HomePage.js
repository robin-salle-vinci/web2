import backGroundImg from '../../img/Trivial-Pursuit-plateau-couleurs.png';

const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `<div class="mt-2 pb-5" style="background-image: url('${backGroundImg}'); height: 85vh; background-repeat: no-repeat; background-position: center center; background-size: contain;">
  <div class="align-middle text-black text-center" style="padding-top: 6%;">
    <div class="d-flex justify-content-center">
      <a class="link-opacity-100" href="">Set up the game</a>
    </div>
  </div>
</div>
  `;
};


export default HomePage;
