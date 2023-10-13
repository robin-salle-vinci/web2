let mesageDiv = document.querySelector("#message");
let form = document.querySelector("form")
let text = document.querySelector("#text");

form.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();

    form.style.display = "none";

    mesageDiv.innerText = text.value;

}

