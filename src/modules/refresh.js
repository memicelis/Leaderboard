import displayScores from './leaderboard.js';

const scoresContainer = document.querySelector('.scores');
const refresh = () => {
  scoresContainer.innerHTML = '';
  displayScores();
};

export default refresh;
