import {gameBoard, cells} from './game_board';

let cought = document.getElementById('cought-goblin');
const time = 1000;
let fiveGoblins = 0;
const active = 'with-goblin';

const getRandom = (last = 0) => {
  const rndm = Math.floor(1 + Math.random() * 15);
  return rndm === last ? getRandom(last) : rndm;
}

let lastTarget = getRandom();

const removeActiveByIndex = (index) => cells[index].classList.remove(active);
const appendActiveByIndex = (index) => cells[index].classList.add(active);

const intervalHandler = () => {
	removeActiveByIndex(lastTarget);
	lastTarget = getRandom(lastTarget);
	appendActiveByIndex(lastTarget);
	timeout = setTimeout(intervalHandler, time);
};

let timeout = setTimeout(intervalHandler, time);
const timeToLose = time * 5;

const checkTime = () => {
    fiveGoblins++;
}

setInterval(checkTime, time);
gameBoard.addEventListener('click', ({ target }) => {
	if (target.classList.contains(active)) {
		removeActiveByIndex(lastTarget);
		clearTimeout(timeout);
		timeout = setTimeout(intervalHandler, time);
    cought.textContent++;
	fiveGoblins = 0;
	clearTimeout(timeoutOver);
	timeoutOver = setTimeout(howManyGoblins, timeToLose);
	}
});

const howManyGoblins = () => {
    if (fiveGoblins === 5) {
        const result = confirm('Слишком много гоблинов сбежало - вы проиграли! Желаете попробовать ещё раз?');
		if (result === true) {
			fiveGoblins = 0;
			cought.textContent = 0;
			clearTimeout(timeoutOver);
			timeoutOver = setTimeout(howManyGoblins, timeToLose);
		}
    }
}

let timeoutOver = setTimeout(howManyGoblins, timeToLose);
