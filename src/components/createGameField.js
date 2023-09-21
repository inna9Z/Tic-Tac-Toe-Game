/**
 * Creates a container for the Tic Tac Toe game field and its cells.
 * Each cell can be clicked to make a move in the game.
 *
 * @returns {HTMLElement} A container div element containing the game field cells.
 */



import userTurn from "../handlers/userTurn.js";

const createGameField = () => {
     // Create a container div element for the game field
    const cellContainer = document.createElement('div');
    cellContainer.className = 'cellContainer';

    let num = 0;

     // Create and append cells to the container
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList = 'cell';
        cell.id = num;
        cellContainer.append(cell);

        // Add a click event listener to each cell, which calls the userTurn function
        cell.addEventListener('click', (e) => {
            userTurn(e);
        });
        num += 1;
    }
    // Return the container element containing the game field
    return cellContainer;
};

export default createGameField;
