import Piece from './piece'
import {Component} from "react";

class Bishop extends Piece {
    constructor(player,board) {
        super(player);
        if(player===1){
            board[7][2].pawnType = 'Bishop';
            board[7][2].pawnForUser = 1;
            board[7][2].human = true;


            board[7][5].pawnType = 'Bishop';
            board[7][5].pawnForUser = 1;
            board[7][5].human = true;

            board[0][2].pawnType = 'Bishop';
            board[0][2].pawnForUser = 2;

            board[0][5].pawnType = 'Bishop';
            board[0][5].pawnForUser = 2;

        }

        else{
            board[0][2].pawnType = 'Bishop';
            board[0][2].pawnForUser = 1;



            board[0][5].pawnType = 'Bishop';
            board[0][5].pawnForUser = 1;



            board[7][2].pawnType = 'Bishop';
            board[7][2].pawnForUser = 2;
            board[7][2].human = true;

            board[7][5].pawnType = 'Bishop';
            board[7][5].pawnForUser = 2;
            board[7][5].human = true;
        }

    }

}
        // const playerPosition= [[7, 2], [7, 5]];
        // const aiPosition= [[0, 2], [0, 5]];
export default Bishop
