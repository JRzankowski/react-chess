import Piece from './piece'
import {Component} from "react";

class Knight extends Piece {
    constructor(player,board) {
        super(player);
        if(player===1){
            board[7][1].pawnType = 'Knight';
            board[7][1].pawnForUser = 1;
            board[7][1].human = true;


            board[7][6].pawnType = 'Knight';
            board[7][6].pawnForUser = 1;
            board[7][6].human = true;

            board[0][1].pawnType = 'Knight';
            board[0][1].pawnForUser = 2;


            board[0][6].pawnType = 'Knight';
            board[0][6].pawnForUser = 2;

        }else

        {
            board[0][1].pawnType = 'Knight';
            board[0][1].pawnForUser = 1;


            board[0][6].pawnType = 'Knight';
            board[0][6].pawnForUser = 1;



            board[7][1].pawnType = 'Knight';
            board[7][1].pawnForUser = 2;
            board[7][1].human = true;


            board[7][6].pawnType = 'Knight';
            board[7][6].pawnForUser = 2;
            board[7][6].human = true;


        }
    }


        // const playerPosition= [[7, 1], [7, 6]];
        // const aiPosition= [[0, 1], [0, 6]];
}
export default Knight