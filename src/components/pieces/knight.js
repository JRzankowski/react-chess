import Piece from './piece'
import {Component} from "react";

class Knight extends Piece {
    constructor(player) {
        super(player, (player === 1 ?'https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces#/media/File:Chess_nlt45.svg' : 'https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces#/media/File:Chess_ndt45.svg'));
        const playerPosition= [[7, 1], [7, 6]];
        const aiPosition= [[0, 1], [0, 6]];
    }


}
export default Knight