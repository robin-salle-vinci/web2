import { clearPage } from '../../utils/render';

const GamePage = () => {
  clearPage();
  renderGamePage();
  
    fetch('/api/scores')
      .then((response) => {
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
        return response.json();
      })
      .then((scores) => {
        displayScores(scores);
      })
      .catch((err) => {
        console.error('HomePage::error: ', err);
      });
  };

function renderGamePage() {
  const main = document.querySelector('main');
  main.innerHTML = `<table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">score</th>
      <th scope="col">Joueur</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>`;
};


function displayScores(scores) {
    let bodyTable = ``;
    scores.forEach(score => {
        bodyTable += `
        <tr>
        <td> ${score.title}</td>
        <td>${score.content}</td>
        <td>${score.user}</td>
        </tr>
        `;
    });

    const body = document.querySelector('tbody')
    body.innerHTML = bodyTable;

}
export default GamePage;
