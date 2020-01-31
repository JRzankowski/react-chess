import Piece from './piece'
import {Component} from "react";

class Rook extends Piece {
    constructor(player,board) {
        super(player);


        if(player===1){
            board[7][0].pawnType = 'Rook';
            board[7][0].pawnForUser = 1;
            board[7][0].human = true;

            board[7][7].pawnType = 'Rook';
            board[7][7].pawnForUser = 1;
            board[7][7].human = true;

            board[0][0].pawnType = 'Rook';
            board[0][0].pawnForUser = 2;

            board[0][7].pawnType = 'Rook';
            board[0][7].pawnForUser = 2;
        }else{
            board[7][0].pawnType = 'Rook';
            board[7][0].pawnForUser = 2;
            board[7][0].human = true;

            board[7][7].pawnType = 'Rook';
            board[7][7].pawnForUser = 2;
            board[7][7].human = true;

            board[0][0].pawnType = 'Rook';
            board[0][0].pawnForUser = 1;

            board[0][7].pawnType = 'Rook';
            board[0][7].pawnForUser = 1;

        }



    }

    // const playerPosition= [[7, 0], [7, 7]];
    // const aiPosition= [[0, 0], [0, 7]];
}
export default Rook