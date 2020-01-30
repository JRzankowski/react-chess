import Piece from './piece'
import {Component} from "react";

class Rook extends Piece {
    constructor(player,board) {
        super(player);


        if(player===1){
            board[7][0].pawnType = 'Rook';
            board[7][0].pawnForUser = 1;
            board[7][0].fieldX = 7;
            board[7][0].fieldY = 0;

            board[7][7].pawnType = 'Rook';
            board[7][7].pawnForUser = 1;
            board[7][7].fieldX = 7;
            board[7][7].fieldY = 4;

            board[0][0].pawnType = 'Rook';
            board[0][0].pawnForUser = 2;
            board[0][0].fieldX = 0;
            board[0][0].fieldY = 4;

            board[0][7].pawnType = 'Rook';
            board[0][7].pawnForUser = 2;
            board[0][7].fieldX = 0;
            board[0][7].fieldY = 4;




        }else{
            board[7][0].pawnType = 'Rook';
            board[7][0].pawnForUser = 2;
            board[7][0].fieldX = 7;
            board[7][0].fieldY = 0;

            board[7][7].pawnType = 'Rook';
            board[7][7].pawnForUser = 2;
            board[7][7].fieldX = 7;
            board[7][7].fieldY = 4;

            board[0][0].pawnType = 'Rook';
            board[0][0].pawnForUser = 1;
            board[0][0].fieldX = 0;
            board[0][0].fieldY = 4;

            board[0][7].pawnType = 'Rook';
            board[0][7].pawnForUser = 1;
            board[0][7].fieldX = 0;
            board[0][7].fieldY = 4;

        }
    }

    // const playerPosition= [[7, 0], [7, 7]];
    // const aiPosition= [[0, 0], [0, 7]];
}
export default Rook