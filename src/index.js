import './styles.css';
import { refresh, submit, generateScores } from './modules/api.js';

const leaderboardApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const gameName = async () => {
  const response = await fetch(`${leaderboardApi}games/`, {
    method: 'POST',
    body: JSON.stringify({
      name: 'Tumaini Maganiko Game',
    }),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  });

  const id = await response.json();
  return id;
};

gameName();
const gameID = 'YiYSP42Mr4UocCG8xuVc';
const form = document.getElementById('submit');
form.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  submit(name.value, score.value, gameID);
  name.value = '';
  score.value = '';
});

const aLink = document.querySelector('a');
aLink.addEventListener('click', async (e) => {
  e.preventDefault();
  const retrieve = await refresh(gameID);
  generateScores(retrieve.result);
});