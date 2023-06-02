let gameboard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

function player(marker) {

    let addMarker = (tile) => {
        if (tile.textContent.length ===1) {
            return;
        }
        tile.textContent = marker;

        (function updateGameBoard() {
            tiles.forEach(tile => {
                //if tile is empty or it has any marker already in it dont update game board
                               

                let tileIndex = Array.from(tiles).indexOf(tile);

                let boardRow = 0;
                let boardCol = 0;
                if (tileIndex < 4) {
                    boardRow = 0;
                    boardCol = tileIndex - 1;
                } else if (tileIndex < 7) {
                    boardRow = 1;
                    boardCol = tileIndex - 4;
                    // -3 for  each row
                    // -1 for index/position offset 
                } else {
                    boardRow = 2;
                    boardCol = tileIndex - 7;
                    // -6 for 2 rows
                    // -1 for index/position offset
                }
                gameboard[boardRow][boardCol] = marker;
            })
        })(marker);

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
    })
    
})

