const boardSize = 4;
const gameBoard = document.getElementById('game-board');

if (gameBoard) {
  for (let i = 0; i < boardSize ** 2; i++) {
    const hole = document.createElement('div');
    hole.classList.add('hole');
    hole.setAttribute('id', i + 1)
    gameBoard.appendChild(hole);
  }
}