import Piece from './piece'
import {Component} from "react";

class Queen extends Piece {
    constructor(player, board) {
        super(player);
        if (player === 1) {
            board[7][3].pawnType = 'Queen';
            board[7][3].pawnForUser = 1;
            board[7][3].fieldX = 7;
            board[7][3].fieldY = 3;

            board[0][3].pawnType = 'Queen';
            board[0][3].pawnForUser = 2;
            board[0][3].fieldX = 0;
            board[0][3].fieldY = 3;

        } else {
            board[0][3].pawnType = 'Queen';
            board[0][3].pawnForUser = 1;
            board[0][3].fieldX = 0;
            board[0][3].fieldY = 3;

            board[7][3].pawnType = 'Queen';
            board[7][3].pawnForUser = 2;
            board[7][3].fieldX = 7;
            board[7][3].fieldY = 3;
        }
    }

    // const playerPosition= [[7, 3]];
    // const aiPosition= [[0, 3]];

}

export default Queen