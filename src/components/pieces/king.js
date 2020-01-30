import Piece from './piece'
import {Component} from "react";

class King extends Piece {
    constructor(player, board) {
        super(player);
        if(player===1){
            board[7][4].pawnType = 'King';
            board[7][4].pawnForUser = 1;
            board[7][4].fieldX = 7;
            board[7][4].fieldY = 4;

            board[0][4].pawnType = 'King';
            board[0][4].pawnForUser = 2;
            board[0][4].fieldX = 0;
            board[0][4].fieldY = 4;
        }

        else{
            board[0][4].pawnType = 'King';
            board[0][4].pawnForUser = 1;
            board[0][4].fieldX = 0;
            board[0][4].fieldY = 4;

            board[7][4].pawnType = 'King';
            board[7][4].pawnForUser = 2;
            board[7][4].fieldX = 7;
            board[7][4].fieldY = 4;
        }

        // const playerPosition= [7, 4];
        // const aiPosition= [[0, 4]];
        // board[playerPosition[0]][playerPosition[1]].pawnType = 'King';
    }


}
export default King