const leaderboardApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

// Sending name and score Data
const submitData = async (name, score, gameID) => {
  const submitData = await fetch(`${leaderboardApi}games/${gameID}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score,
    }),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  });

  const response = await submitData.json();
  return response;
};

// Retrieving the names and scores
const refreshScore = async (gameID) => {
  const receiveData = await fetch(`${leaderboardApi}games/${gameID}/scores/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result = await receiveData.json();
  return result;
};

export { submitData, refreshScore };