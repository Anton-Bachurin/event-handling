const holes = Array.from(document.querySelectorAll('.hole'));

function goblinImg(index, number) {
  if (index !== -1) {
    holes[index].classList.remove('with-goblin');
  }
  const goblinImgCell = holes[number];
  goblinImgCell.classList.add('with-goblin');
}

setInterval(() => {
  const index = holes.findIndex((item) => item.className.includes('with-goblin'));
  let randomNumber = Math.floor(Math.random() * holes.length);
  if (randomNumber === index) {
    randomNumber = Math.floor(Math.random() * holes.length);
  } else {
    goblinImg(index, randomNumber);
  }
}, 1000);