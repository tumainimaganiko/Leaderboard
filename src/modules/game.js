const leaderboardApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const gameName = async () => {
    const response = await fetch (`${leaderboardApi}games/`, {
        method: "POST",
        body: JSON.stringify({
            name: "Tumaini Maganiko practise"
        }),
        headers: {
            'content-type':"application/json; charset=UTF-8"
        }
    })

    const id = await response.json();
    console.log(id.result);
    return id.result;
}

console.log(gameName())
gameName()
