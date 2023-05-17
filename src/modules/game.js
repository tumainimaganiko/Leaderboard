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

const submit = async (name,score) => {
    const submit = await fetch(`${leaderboardApi}games/bimDPSRuKmVDalnSDtNx/scores/`, {
        method: "POST",
        body: JSON.stringify({
            user:name,
            score:score
        }),
        headers: {
            'content-type':"application/json; charset=UTF-8"
        }
    })

    const response = await submit.json();
    console.log(response.result);
    return response.result;
}

submit('Tumaini Maganiko',98);
submit('Prosper',57);