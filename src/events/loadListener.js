/**
 * Adds a window load event listener that invokes the `loadHandler` function
 * when the page has finished loading.
 *
 * @function
 * @example
 * loadListener(); // Binds the loadHandler function to the window's load event
 */

import loadHandler from '../handlers/loadHandler.js';

const loadListener = () => {
    window.addEventListener('load', loadHandler);
};

export default loadListener;