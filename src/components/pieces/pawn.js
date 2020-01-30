import Piece from './piece'
import {Component} from "react";

class Pawn extends Piece {
    constructor(player, board) {
        super(player);
        if (player === 1) {

            for (let i = 0; i <= 7; i++) {
                board[6][i].pawnType = 'Pawn';
                board[6][i].pawnForUser = 1;
                board[6][i].fieldX = 6;
                board[6][i].fieldY = i;

                board[1][i].pawnType = 'Pawn';
                board[1][i].pawnForUser = 2;
                board[1][i].fieldX = 1;
                board[1][i].fieldY = i;
            }

        } else {
            for (let i = 0; i <= 7; i++) {
                board[6][i].pawnType = 'Pawn';
                board[6][i].pawnForUser = 2;
                board[6][i].fieldX = 6;
                board[6][i].fieldY = i;

                board[1][i].pawnType = 'Pawn';
                board[1][i].pawnForUser = 1;
                board[1][i].fieldX = 1;
                board[1][i].fieldY = i;

            }
        }


    }


    // const playerPosition= [[6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6.7]];
    // const aiPosition= [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1,7]];
}

export default Pawn

