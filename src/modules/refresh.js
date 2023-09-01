import displayScores from './leaderboard';

const scoresContainer = document.querySelector('.scores');
const refresh = () => {
  scoresContainer.innerHTML = '';
  displayScores();
};

export default refresh;
