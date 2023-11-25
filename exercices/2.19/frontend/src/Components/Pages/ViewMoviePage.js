import { clearPage } from '../../utils/render';
import {getAllMovies, deleteOneMovie, UpdateOneMovie} from '../../models/movie';




const ViewMoviePage = async () => {
    clearPage();
    await renderViewMoviePage();
    clickOnButtonDelete();
    clickOnButtonSave();
}

async function renderViewMoviePage() {
    const main = document.querySelector('main');
    main.innerHTML = `<div class="text-center">
    <h3>page de vue film</h3>
    </div>
    <div id="movieWrapper">
    </div>
    `;
    const moviesTable = await getMoviesTable();
    const movieWrapper = document.querySelector('#movieWrapper');
    movieWrapper.innerHTML = moviesTable;
};

async function getMoviesTable() {
    const movies = await getAllMovies();
    if(movies?.length === undefined || movies.length === 0) {
        return '<p>No Movie yet</p>'
    }
    let movieTable = `<table class="table table-dark table-hover">
    <thead>
  <tr>
    <th scope="col">Title</th>
    <th scope="col">Link</th>
    <th scope="col">Duration (min)</th>
    <th scope="col">Budget (million)</th>
    <th scope="col">Operations</th>  
  </tr>
</thead>
<tbody>
    `;
    movies.forEach((element) => {
        movieTable += `<tr>
        <td contenteditable="true">${element.title}</td>
        <td contenteditable="true">${element.link}</td>
        <td contenteditable="true">${element.duration}</td>
        <td contenteditable="true">${element.budget}</td>
        <td><button class="btn btn-primary delete" data-id="${element.id}">Delete</button>
        <button class="btn btn-primary update" data-id="${element.id}">Save</button>
        </td>
        </tr>
        `;
    });
    movieTable += `</tbody>
    </table>`;
    return movieTable;
}

function clickOnButtonDelete() {
    const buttonsDeleted = document.querySelectorAll('.delete');
    buttonsDeleted.forEach(button => {
        button.addEventListener('click', async () => {
            await deleteOneMovie(button.getAttribute('data-id'));
            ViewMoviePage();
        });
    });
};

function clickOnButtonSave() {
    const buttonsSaved = document.querySelectorAll('.update');
    buttonsSaved.forEach(button => {
        button.addEventListener('click', async (e) => {
            const id = button.getAttribute('data-id');
            const title = e.target.parentElement.parentElement.children[0].innerText;
            const link = e.target.parentElement.parentElement.children[1].innerText;
            const duration = parseInt(e.target.parentElement.parentElement.children[2].innerText, 10);
            const budget = parseInt(e.target.parentElement.parentElement.children[3].innerText, 10);

            const options = {
                method: 'PATCH',
                body:JSON.stringify({
                  title,
                  link,
                  duration,
                  budget,
                }),
                headers: {
                  'Content-Type': 'application/json',
                },
              }

            await UpdateOneMovie(options, id);
            ViewMoviePage();
        });
    });
}

export default ViewMoviePage;