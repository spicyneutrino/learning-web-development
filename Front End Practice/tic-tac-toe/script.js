let gameboard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

function player(marker) {

    let addMarker = (tile) => {
        if (tile.textContent.length === 1) {
            return;
        }
        tile.textContent = marker;

        updateGameBoard(tile, marker);
    }

    return { addMarker };
}

let tiles = document.querySelectorAll(".tile");

let player1 = player("X");
let player2 = player("O");

let firstUser = true;
tiles.forEach(tile => {
    tile.addEventListener("click", () => {
        if (firstUser) {
            player1.addMarker(tile);
        } else {
            player2.addMarker(tile);
        }
        firstUser = !firstUser;
        console.log(gameboard);
    })

})

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
        boardCol = tileIndex -3;
        // -3 for  each row

    } else {
        boardRow = 2;
        boardCol = tileIndex - 6;
        // -6 for 2 rows
    }
    gameboard[boardRow][boardCol] = marker;

};

function checkGame() {
    let checkRow = ((gameboard[0][0] === gameboard[0][1]) === gameboard[0][2]) || ((gameboard[1][0] === gameboard[1][1]) === gameboard[1][2]) || ((gameboard[2][0] === gameboard[2][1]) === gameboard[2][2]);
    let checkCol = ((gameboard[0][0] === gameboard[1][0]) === gameboard[2][0]) || ((gameboard[0][1] === gameboard[1][1]) === gameboard[2][1]) || ((gameboard[0][2] === gameboard[1][2]) === gameboard[2][2]);
    let checkDiagonal = (gameboard[0][0] === gameboard[1][1]) === gameboard[2][2];

    if (checkRow || checkCol) {
        console.log("GAME");
    }
    if (checkDiagonal) {
        console.log("DIAGONAL GAME");
    }
}

