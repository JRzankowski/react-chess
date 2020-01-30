import Piece from './piece'
import {Component} from "react";

class Bishop extends Piece {
    constructor(player,board) {
        super(player);
        if(player===1){
            board[7][2].pawnType = 'Bishop';
            board[7][2].pawnForUser = 1;
            board[7][2].fieldX = 7;
            board[7][2].fieldY = 2;

            board[7][5].pawnType = 'Bishop';
            board[7][5].pawnForUser = 1;
            board[7][5].fieldX = 7;
            board[7][5].fieldY = 5;

            board[0][2].pawnType = 'Bishop';
            board[0][2].pawnForUser = 2;
            board[0][2].fieldX = 0;
            board[0][2].fieldY = 2;

            board[0][5].pawnType = 'Bishop';
            board[0][5].pawnForUser = 2;
            board[0][5].fieldX = 0;
            board[0][5].fieldY = 5;
        }

        else{
            board[0][2].pawnType = 'Bishop';
            board[0][2].pawnForUser = 1;
            board[0][2].fieldX = 0;
            board[0][2].fieldY = 2;

            board[0][5].pawnType = 'Bishop';
            board[0][5].pawnForUser = 1;
            board[0][5].fieldX = 0;
            board[0][5].fieldY = 5;

            board[7][2].pawnType = 'Bishop';
            board[7][2].pawnForUser = 2;
            board[7][2].fieldX = 7;
            board[7][2].fieldY = 2;

            board[7][5].pawnType = 'Bishop';
            board[7][5].pawnForUser = 2;
            board[7][5].fieldX = 7;
            board[7][5].fieldY = 5;
        }

    }

}
        // const playerPosition= [[7, 2], [7, 5]];
        // const aiPosition= [[0, 2], [0, 5]];
export default Bishop
