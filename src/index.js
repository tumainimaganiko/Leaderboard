import './styles.css';
import { refresh, submit } from './modules/api.js';
import { generateScores } from './modules/generateScores.js';

const leaderboardApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameID = 'vtL6cvMOxCyImcJYZjbt';

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

const showingScrores = async () => {
  const retrieve = await refresh(gameID);
  generateScores(retrieve.result);
};

gameName();
const submitButton = document.getElementById('submitBtn');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  const errDiv = document.getElementById('errDiv');
  if (name.value !== '' && score.value !== '') {
    submit(name.value, score.value, gameID);
    name.value = '';
    score.value = '';
    showingScrores();
    errDiv.style.display = 'none';
  } else if(name.value === '' && score.value === '') {
    errDiv.textContent = 'Name and Score field are required';
    errDiv.style.display = 'block';
  } else if (name.value === '') {
    errDiv.textContent = 'Please fill in your name please';
    errDiv.style.display = 'block';
  }else if (score.value === '') {
    errDiv.textContent = 'Please fill in your score';
    errDiv.style.display = 'block';
  }
});

const aLink = document.querySelector('a');
aLink.addEventListener('click', (e) => {
  e.preventDefault();
  showingScrores();
});

window.onbeforeunload = function askReload() {
  return false;
};
window.onload = () => {
  showingScrores();
  askReload()
};
