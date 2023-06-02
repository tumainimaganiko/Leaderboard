const leaderboardApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

// Sending name and score Data
const submit = async (name, score, gameID) => {
  const submit = await fetch(`${leaderboardApi}games/${gameID}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score,
    }),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  });

  const response = await submit.json();
  return response;
};

// Retrieving the names and scores
const refresh = async (gameID) => {
  const receiveData = await fetch(`${leaderboardApi}games/${gameID}/scores/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const ans = await receiveData.json();
  return ans;
};

export { submit, refresh };