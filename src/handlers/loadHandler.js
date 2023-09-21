
/**
 * Handles the loading of the game by creating and appending the game field to the DOM.
 * It calls the `createGameField` function to generate the game field and appends it to
 * the specified board element in the DOM.
 *
 * @function
 * @example
 * loadHandler(); // Loads the game field and appends it to the DOM
 */

import dom from '../dom.js';
import createGameField from '../components/createGameField.js';

const loadHandler = () => {
    const domEl = createGameField();
    dom.board.append(domEl);
};

export default loadHandler;