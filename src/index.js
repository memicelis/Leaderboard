import './style.css';
import displayScores from './modules/leaderboard';
import addScore from './modules/submit';
import refresh from './modules/refresh';

const submitButton = document.getElementById('submit');
const refreshButton = document.getElementById('refresh');
displayScores();

refreshButton.addEventListener('click', refresh);

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  addScore();
});
