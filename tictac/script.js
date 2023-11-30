const crosses = document.getElementById("crosses");
const rounds = document.getElementById("rounds");
const fields = document.getElementById("board");

let user = true;

const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function weHaveAWinner(winner) {
    if (!!winner) {
        console.log(`%cWe have a winner > ${winner}`, `color: red`);
        fields.classList.add("final");
    }
}

function switchUser(user) {
    if (user) {
        crosses.classList.add("active");
        rounds.classList.remove("active");
    } else {
        crosses.classList.remove("active");
        rounds.classList.add("active");
    }
}

function checkBoard() {
    const flatBoard = board.flat();

    // rows
    if (flatBoard[0] === flatBoard[1] && flatBoard[1] === flatBoard[2])
        weHaveAWinner(flatBoard[0]);

    if (flatBoard[3] === flatBoard[4] && flatBoard[4] === flatBoard[5])
        weHaveAWinner(flatBoard[3]);

    if (flatBoard[6] === flatBoard[7] && flatBoard[7] === flatBoard[8])
        weHaveAWinner(flatBoard[6]);

    // cols
    if (flatBoard[0] === flatBoard[3] && flatBoard[3] === flatBoard[6])
        weHaveAWinner(flatBoard[0]);

    if (flatBoard[1] === flatBoard[4] && flatBoard[4] === flatBoard[7])
        weHaveAWinner(flatBoard[1]);

    if (flatBoard[2] === flatBoard[5] && flatBoard[5] === flatBoard[8])
        weHaveAWinner(flatBoard[2]);

    // curves
    if (flatBoard[0] === flatBoard[4] && flatBoard[4] === flatBoard[8])
        weHaveAWinner(flatBoard[0]);

    if (flatBoard[2] === flatBoard[4] && flatBoard[4] === flatBoard[6])
        weHaveAWinner(flatBoard[2]);
}

function init() {
    const fields = document.querySelectorAll(".field");

    switchUser(user);

    for (let field of fields) {
        field.addEventListener("click", event => {
            if (!event.currentTarget.dataset.marked) {
                board[event.target.dataset.row][event.target.dataset.col] = user
                    ? "X"
                    : "O";
                event.currentTarget.dataset.marked = true;
                event.target.innerHTML = user ? "X" : "O";
                switchUser((user = !user));
                checkBoard();
            }
        });
    }
}

init();
