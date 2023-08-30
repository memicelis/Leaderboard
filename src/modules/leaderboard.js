const scoresContainer = document.querySelector('.scores');

const displayScores = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8QmxIOHY48jkw6OH7xyq/scores/'
  )
    .then((response) => response.json())
    .then((json) => {
      scoresContainer.innerHTML = '';
      json.result.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.user} : ${item.score}`;
        scoresContainer.appendChild(listItem);
      });
    });
};

export default displayScores;
