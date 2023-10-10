let counter = 0;
let counterElem = document.querySelector("#counter");
let msg = document.querySelector("#message");

window.addEventListener("click", onClickHandlerForCounter);

function onClickHandlerForCounter() {
  counter++;

  counterElem.innerHTML = "Compteur de click : " + counter;

  if (counter > 5 && counter < 9) {
    msg.innerText = "Bravo, bel échauffement !";
  }

  if (counter >= 10) {
    msg.innerText = "Vous êtes passé maître en l'art du clic !";
  }
  console.log("onClickHandlerForCounter::click");
}
