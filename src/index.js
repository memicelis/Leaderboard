import './style.css';
import displayScores from './modules/leaderboard.js';
import addScore from './modules/submit.js';
import refresh from './modules/refresh.js';

const submitButton = document.getElementById('submit');
const refreshButton = document.getElementById('refresh');
displayScores();

refreshButton.addEventListener('click', refresh);

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  addScore();
});
