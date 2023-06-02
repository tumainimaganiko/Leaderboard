// Creating lists for displaying Data
export const generateScores = (score) => {
    const ul = document.querySelector('.content');
    ul.innerHTML = '';
    score.forEach((element) => {
      const li = document.createElement('li');
      li.innerHTML = `${element.user} : ${element.score}`;
      ul.appendChild(li);
    });
  };