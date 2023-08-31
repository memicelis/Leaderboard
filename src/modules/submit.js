const addScore = async () => {
  const userInput = document.getElementById('name').value;
  const scoreInput = document.getElementById('score').value;

  if (userInput === '' && scoreInput === '') {
    document.getElementById('error').innerHTML = 'Please add name and score';
  } else {
    document.getElementById('error').innerHTML = '';
    await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8QmxIOHY48jkw6OH7xyq/scores/',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userInput,
          score: scoreInput,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    ).then((response) => response.json());
  }

  //Clearing input
  document.getElementById('name').value = '';
  document.getElementById('score').value = '';
};

export default addScore;
