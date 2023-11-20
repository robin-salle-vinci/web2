// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'underscore';

const HomePage = () => {
  
  renderHomePage();

  fetch('http://localhost:3000/questions')
    .then((response) => {
      if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
      return response.json();
    })
    .then((questions) => {
      const randomQuestions = getRandomQuestions(questions);
      let qAndR = '';
      let questionIndex = 0;
      randomQuestions.forEach((question) => {
        qAndR += `<h4>${question.question}</h4>`;

        let answerIndex = 0;

        question.answers.forEach((answer) => {
          qAndR += `<p>${answer.text} <input type="radio" name="${questionIndex}" value="${answerIndex}"></p>`;
          answerIndex += 1;
        });

        questionIndex += 1;
      });

      qAndR += `<button id="calculateBtn">Calculate my score</button>`;

      const main = document.querySelector('main');

      main.innerHTML = qAndR;
      main.className = 'p-5';
    })
    .catch((err) => {
      console.error('HomePage::error: ', err);
    });
};


function renderHomePage() {
  const main = document.querySelector('main');
  main.innerHTML = `
  <div class="container-fluid d-flex justify-content-center">
    <button class="btn btn-primary">Calculer le score</button>
  </div>`;
};

 function getRandomQuestions(questions) {
  return _.sample(questions, 3); // fonction qui choisit 3 questions aléatoirement
 };

export default HomePage;
