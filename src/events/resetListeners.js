/**
 * Adds a click event listener to the reset button specified in the `dom` module.
 * When the reset button is clicked, the `resetHandler` function is invoked to
 * reset the game.
 *
 * @function
 * @example
 * resetListener(); // Binds the resetHandler function to the reset button's click event
 */

import dom from '../dom.js';
import resetHandler from '../handlers/resetHandler.js';

const resetListener = () => {
    dom.resetButton.addEventListener('click', resetHandler);
};

export default resetListener;