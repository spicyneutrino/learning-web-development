let gameboard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

function player(marker) {
    let getMarker = () => { return marker };
    let numOfWins = 0;

    let addMarker = (tile) => {
        if (tile.textContent.length === 1) {
            return;
        }
        tile.textContent = marker;

        updateGameBoard(tile, marker);
    }

    return { getMarker, addMarker, numOfWins };
}

function updateGameBoard(tile, marker) {
    let tileIndex = Array.from(tiles).indexOf(tile);
    // 1 not subtracted as we are taking index of the array into account not position on the nodelist
    //position on node list
    //     1 2 3
    //     4 5 6
    //     7 8 9
    // index on array
    //     0 1 2
    //     3 4 5
    //     6 7 8

    let boardRow = 0;
    let boardCol = 0;
    if (tileIndex < 3) {
        boardRow = 0;
        boardCol = tileIndex;
    } else if (tileIndex < 6) {
        boardRow = 1;
        boardCol = tileIndex - 3;
        // -3 for  each row

    } else {
        boardRow = 2;
        boardCol = tileIndex - 6;
        // -6 for 2 rows
    }
    gameboard[boardRow][boardCol] = marker;

};

function checkGame(gameboard) {
    // i-> row
    // j-> col
    let gameWin = false;
    let winner;
    for (let i = 0, j = 0; i < 3; i++) {

        //checking rows
        if (((gameboard[i][0] === gameboard[i][1]) && (gameboard[i][0] === gameboard[i][2])) && gameboard[i][0] !== "") {
            if (player1.getMarker() === gameboard[i][0]) {
                gameWin = true;
                winner = player1;
            }
            if (player2.getMarker() === gameboard[i][0]) {
                gameWin = true;
                winner = player2;
            }
        }

        //checking columns
        if (((gameboard[0][i] === gameboard[1][i]) && (gameboard[0][i] === gameboard[2][i])) && gameboard[0][i] !== "") {
            if (player1.getMarker() === gameboard[0][i]) {
                winner = player1;
                gameWin = true;
            }
            if (player2.getMarker() === gameboard[0][i]) {
                winner = player2;
                gameWin = true;
            }
        }
    }

    // checking diagonals
    if (gameboard[1][1] !== "") {
        let checkMainDiagonal = (gameboard[0][0] === gameboard[1][1]) && (gameboard[1][1] === gameboard[2][2]);
        let checkNonDiagonal = (gameboard[0][2] === gameboard[1][1]) && (gameboard[1][1] === gameboard[2][0]);
        if (checkMainDiagonal || checkNonDiagonal) {
            if (player1.getMarker() === gameboard[1][1]) {
                winner = player1;
                gameWin = true;
            }
            if (player2.getMarker() === gameboard[1][1]) {
                winner = player2;
                gameWin = true;
            }
            gameWin = true;
        }
    }

    if (gameWin) {
        if (winner === player1) {
            player1ScoreArea.classList.add("winner");
            player2ScoreArea.classList.add("loser");
            player1.numOfWins += 1;
        }
        if (winner === player2) {
            player2ScoreArea.classList.add("winner");
            player1ScoreArea.classList.add("loser");
            player2.numOfWins += 1;
        }
        player1ScoreArea.textContent = player1.numOfWins;
        player2ScoreArea.textContent = player2.numOfWins;

        playAgainBtn.style.display = "block";
        gameResetBtn.style.display = "block";
    }
    // check if its a draw
    let boardFilled = true;
    gameboard.forEach(row => {
        row.forEach(box => {
            if (box === "") {
                boardFilled = false;
            }
        })
    })
    if (boardFilled && !gameWin) {
        playAgainBtn.style.display = "block";
        gameResetBtn.style.display = "block";
        player1ScoreArea.classList.add("draw");
        player2ScoreArea.classList.add("draw");
    }
}

function gameReset() {
    tiles.forEach(tile => {
        tile.textContent = "";
    })
    gameboard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    player1 = player("X");
    player2 = player("O");
    player1ScoreArea.textContent = 0;
    player2ScoreArea.textContent = 0;
    playAgainBtn.style.display = "none";
    gameResetBtn.style.display = "none";
    player1ScoreArea.classList.remove("loser");
    player2ScoreArea.classList.remove("winner");
    player1ScoreArea.classList.remove("winner");
    player2ScoreArea.classList.remove("loser");
    player1ScoreArea.classList.remove("draw");
    player2ScoreArea.classList.remove("draw");
    game();
}

function playAgain() {
    tiles.forEach(tile => {
        tile.textContent = "";
    })
    gameboard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    playAgainBtn.style.display = "none";
    gameResetBtn.style.display = "none";
    player1ScoreArea.classList.remove("winner");
    player1ScoreArea.classList.remove("loser");
    player2ScoreArea.classList.remove("winner");
    player2ScoreArea.classList.remove("loser");
    player1ScoreArea.classList.remove("draw");
    player2ScoreArea.classList.remove("draw");
}

let tiles = document.querySelectorAll(".tile");

let player1 = player("X");
let player2 = player("O");
let player1ScoreArea = document.getElementById("player1-score");
let player2ScoreArea = document.getElementById("player2-score");;

let playAgainBtn = document.querySelector(".again");
let gameResetBtn = document.querySelector(".reset")

playAgainBtn.addEventListener("click", playAgain);
gameResetBtn.addEventListener("click", gameReset);

let gameContinue = false;
function game() {
    let firstUser = true;
    player1ScoreArea.style.textDecoration= "underline";
    tiles.forEach(tile => {
        tile.addEventListener("click", () => {
            if (firstUser) {
                player1.addMarker(tile);
                player1ScoreArea.style.textDecoration= "none";
                player2ScoreArea.style.textDecoration= "underline";
            } else {
                player2.addMarker(tile);
                player2ScoreArea.style.textDecoration= "none";
                player1ScoreArea.style.textDecoration= "underline";
            }
            firstUser = !firstUser;
            checkGame(gameboard);           
        })
    })
}

game();

