const crosses = document.getElementById("crosses");
const rounds = document.getElementById("rounds");

let user = true;
const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function makeMark() {}

function weHaveAWinner(winner) {
    console.log(
        "We have a winner > ",
        winner ? "Crosses wins!" : "Zeros wins!"
    );
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
    // rows
    board.forEach((row, i) => {
        if (row.every(field => field !== null && field === row[0])) {
            return weHaveAWinner(row[0]);
        }
    });

    // cols
    if (board[0][0] !== null && (board[0][0] === board[1][0]) === board[2][0]) {
        return weHaveAWinner(board[0][0]);
    }
    if (board[0][1] !== null && (board[0][1] === board[1][1]) === board[2][1]) {
        return weHaveAWinner(board[0][1]);
    }
    if (board[0][2] !== null && (board[0][2] === board[1][2]) === board[2][2]) {
        return weHaveAWinner(board[0][2]);
    }

    // curves
    if (board[0][0] !== null && (board[0][0] === board[1][1]) === board[2][2])
        return weHaveAWinner(board[0][0]);

    if (board[0][2] !== null && (board[0][2] === board[1][1]) === board[2][0])
        return weHaveAWinner(board[0][2]);
}

function init() {
    const fields = document.querySelectorAll(".field");

    switchUser(user);

    for (let field of fields) {
        field.addEventListener("click", event => {
            if (!event.currentTarget.dataset.marked) {
                board[event.target.dataset.row][event.target.dataset.col] =
                    Boolean(user);
                event.currentTarget.dataset.marked = true;
                event.target.innerHTML = user ? "X" : "O";
                switchUser((user = !user));
                checkBoard();
            }
        });
    }
}

init();
