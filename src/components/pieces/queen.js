import Piece from './piece'
import {Component} from "react";

class Queen extends Piece {
    constructor(player, board) {
        super(player);
        if (player === 1) {
            board[7][3].pawnType = 'Queen';
            board[7][3].pawnForUser = 1;
            board[7][3].human = true;


            board[0][3].pawnType = 'Queen';
            board[0][3].pawnForUser = 2;


        } else {
            board[0][3].pawnType = 'Queen';
            board[0][3].pawnForUser = 1;



            board[7][3].pawnType = 'Queen';
            board[7][3].pawnForUser = 2;
            board[7][3].human = true;

        }
    }

    // const playerPosition= [[7, 3]];
    // const aiPosition= [[0, 3]];

}

export default Queen