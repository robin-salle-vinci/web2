const AddMoviePage = () => {
    const main = document.querySelector('main');
    main.innerHTML = `<div class="text-center">
    <h3>page d'ajout film</h3>
    </div>
    <div style="height: 50px;"></div>
    <div class="container w-25 text-center">
    <form>
    <div class="mb-3">
      <label for="titleMovie" class="form-label">Titre :</label>
      <input type="text" class="form-control" id="titleMovie" maxlength="20" required>
    <div class="mb-3">
      <label for="durationMovie" class="form-label">Durée :</label>
      <input type="number" class="form-control" id="durationMovie" min="10" max="400" required>
    </div>
    <div class="mb-3">
      <label class="form-label" for="budgetMovie">Budget :</label>
      <input type="number" class="form-control" id="budgetMovie" min="1" required>
    </div>
    <div class="mb-3">
        <label class="form-label" for="descriptionMovie">Description :</label>
        <input type="link" class="form-control" id="descriptionMovie" required>
      </div>
    <button type="submit" class="btn btn-primary">Soumettre</button>
    </form>
    </div>
    `;

    const form
    
}

export default AddMoviePage;