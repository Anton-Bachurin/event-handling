import {time, fiveGoblins} from './goblin';

const timeToLose = time * 5;

const checkTime = () => {
    fiveGoblins++;
}

setInterval(checkTime, time);

const howManyGoblins = () => {
    if (fiveGoblins === 5) {
        alert('Сбежало много гоблинов: вы проиграли!');
    } else {
        clearTimeout(timeoutOver);
        setTimeout(howManyGoblins, timeToLose);
    }
}

let timeoutOver = setTimeout(howManyGoblins, timeToLose);
