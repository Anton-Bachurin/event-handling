export const boardSize = 16;
export const gameBoard = document.getElementById('game-board');
export const cells = gameBoard.children;

if (gameBoard) {
  for (let i = 0; i < boardSize; i++) {
    const hole = document.createElement('div');
    hole.classList.add('hole');
    hole.setAttribute('id', i + 1)
    gameBoard.appendChild(hole);
  }
}

