import {gameBoard, cells} from './game_board';

export let cought = document.getElementById('cought-goblin');
export const time = 1000;
export let fiveGoblins = 0;
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

gameBoard.addEventListener('click', ({ target }) => {
	if (target.classList.contains(active)) {
		removeActiveByIndex(lastTarget);
		clearTimeout(timeout);
		timeout = setTimeout(intervalHandler, time);
    cought.textContent++;
	fiveGoblins = 0;
	}
});
