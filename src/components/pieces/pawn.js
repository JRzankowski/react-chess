import Piece from './piece'
import {Component} from "react";

class Pawn extends Piece {
    constructor(player) {
        super(player, (player === 1 ?'https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces#/media/File:Chess_plt45.svg' : 'https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces#/media/File:Chess_pdt45.svg'));
        const playerPosition= [[6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6.7]];
        const aiPosition= [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1,7]];
    }


}
export default Pawn

