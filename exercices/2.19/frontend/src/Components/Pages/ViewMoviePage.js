import { clearPage } from '../../utils/render';
import {getAllMovies} from '../../models/movie';

const ViewMoviePage = () => {
    clearPage();
    renderViewMoviePage();
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
    <th scope="col">Duration (min)</th>
    <th scope="col">Budget (million)</th>    
  </tr>
</thead>
<tbody>
    `;
    movies.forEach((element) => {
        movieTable += `<tr>
        <td><a href="${element.link}">${element.title}</a></td>
        <td>${element.duration}</td>
        <td>${element.budget}</td>
        </tr>
        `;
    });
    movieTable += `</tbody>
    </table>`;
    return movieTable;
}

export default ViewMoviePage;