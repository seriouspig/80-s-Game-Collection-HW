document.addEventListener('DOMContentLoaded', () => {
    const newGameForm = document.querySelector('#new-game-form');
    newGameForm.addEventListener('submit', handleNewGameFormSubmit);
    console.log('This has loaded')

    const checkboxes = document.querySelectorAll('input[name="platform]:checked')

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

// Checkboxes
const getSelectedCheckboxValues = function(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

const handleNewGameFormSubmit = function (event) {
    event.preventDefault();

    const gameListItem = createGameListItem(event.target);
    const gameList = document.querySelector('#game-list');
    gameList.appendChild(gameListItem);
    console.log('Form has been submitted')
    event.target.reset();   
}

const createGameListItem = function (form) {

    const gameListItem = document.createElement('li');
    gameListItem.classList.add('game-list-item');

    const title = document.createElement('p')
    title.textContent = `Title: ${form.title.value}`;
    title.classList.add('added-title');
    gameListItem.appendChild(title);

    const year = document.createElement('p');
    year.textContent = `Released: ${form.year.value}`;
    year.classList.add('added-year');
    gameListItem.appendChild(year);

    const developer = document.createElement('p');
    developer.textContent = `Developed by: ${form.developer.value}`;
    developer.classList.add('added-developer');
    gameListItem.appendChild(developer);

    const platform = document.createElement('p');
    platform.textContent = `Released on: ${getSelectedCheckboxValues('platform')}`;
    platform.classList.add('added-platform'); 
    gameListItem.appendChild(platform);
    

    const genre = document.createElement('p');
    genre.textContent = `Genre: ${form.genre.value}`;
    genre.classList.add('added-genre');
    gameListItem.appendChild(genre);

    return gameListItem;
}

const handleDeleteAllClick = function (event) {
    const gameList = document.querySelector('#game-list');
    gameList.innerHTML = '';
}