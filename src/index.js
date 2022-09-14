import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import allLikes from './components/allLikes.js';

// PRINT ALL LIKES
allLikes();

import header from './components/header.js';
import loadAll from './components/loadAll.js';
import footer from './components/footer.js';

header();
// PRINT ALL MEALS.
loadAll();

// PRINT THE FOOTER
footer();

