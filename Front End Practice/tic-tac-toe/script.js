let gameboard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
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
        checkGame(gameboard);
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
    for (let i = 0; i < 3; i++) {
        let j = 0;


        if (((gameboard[i][0] === gameboard[i][1]) && (gameboard[i][0] === gameboard[i][2])) && gameboard[i][0] !== "") {
            console.log("row")

        }
        if (((gameboard[0][i] === gameboard[1][i]) && (gameboard[0][i] === gameboard[2][i])) && gameboard[0][i] !== "") {
            console.log("col")

        }

    }
    if (gameboard[1][1] !== "") {
        let checkMainDiagonal = (gameboard[0][0] === gameboard[1][1]) && (gameboard[1][1] === gameboard[2][2]);
        let checkNonDiagonal = (gameboard[0][2] === gameboard[1][1]) && (gameboard[1][1] === gameboard[2][0]);
        if (checkMainDiagonal || checkNonDiagonal) {
            console.log(3);
        }
    }
}

checkGame(gameboard);

