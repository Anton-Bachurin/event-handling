let cought = document.getElementById('cought-goblin');
let lost = document.getElementById('lost-goblin');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 0; i < boardSize ** 2; i++) {
    let hole = getHole(i);

    hole.onclick = function() {
        if (hole.className.includes('with-goblin')) {
            cought.textContent++;
        } else {
            lost.textContent++;
        }
    }
}