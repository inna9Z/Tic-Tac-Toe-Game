/**
 * Resets the game board by clearing all cell elements and resetting game data.
 * Also updates the turn information to indicate that it's 'X's turn.
 *
 * @function
 * @example
 * resetHandler(); // Resets the game board and game data
 */

import dom from '../dom.js';
import data from '../data.js';

const resetHandler = () => {
   // Clear all cells by iterating through cell elements
    const cellElements = document.querySelectorAll('.cell');
    cellElements.forEach((cellEl) => {
        cellEl.innerHTML = ''; // Clear the cell's content
        cellEl.classList = 'cell'; // Reset the cell's class
    });

    // Reset game data
    data.gameBoard = ['', '', '', '', '', '', '', '', '']; // Clear the game board
    data.turn = 'X'; // Reset the current player's turn to 'X'
    dom.info.innerHTML = "X's turn";     // Update the turn information to indicate 'X's turn
};

export default resetHandler;