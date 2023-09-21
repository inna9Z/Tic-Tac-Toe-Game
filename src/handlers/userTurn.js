/**
 * Handles a user's turn in the game.
 *
 * @function
 * @param {Event} e - The click event triggered by the user.
 * @example
 * cell.addEventListener('click', (e) => {
 *    userTurn(e);
 * });
 */
import dom from '../dom.js';
import data from '../data.js';
import checkWinner from '../utils/checkWinner.js';

const userTurn = (e) => {
    const cellEl = e.target;
    const id = cellEl.id;

    // Check if the cell is already marked or if the game has ended
    if (cellEl.innerText || dom.info.innerHTML === `${data.turn} won!`) {
        return;
    }

    // Add the current player's symbol to the clicked cell
    cellEl.classList.add(data.turn);
    cellEl.innerHTML = data.turn;

    // Update the game board with the player's move
    data.gameBoard[id] = data.turn;

    // Check for a winner using the checkWinner utility function
    const winResult = checkWinner(
        document.querySelectorAll(`.${data.turn}`),
        data.winCombination,
        data.turn,
        data.gameBoard,
    );

    // If there's a winner or it's a draw, update the turn information
    if (winResult !== null) {
        dom.info.innerHTML = winResult;
        return;
    }

    // Switch the turn to the other player (X to O or vice versa)
    data.turn === 'X' ? (data.turn = 'O') : (data.turn = 'X');

    // Update the turn information
    dom.info.innerHTML = data.turn + "'s now go";
};

export default userTurn;