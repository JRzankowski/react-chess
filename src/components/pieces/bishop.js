import Piece from './piece'
import {Component} from "react";

class Bishop extends Piece {
    constructor(player) {
        super(player, (player === 1 ?'https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces#/media/File:Chess_blt45.svg' : 'https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces#/media/File:Chess_bdt45.svg'));
        const playerPosition= [[7, 2], [7, 5]];
        const aiPosition= [[0, 2], [0, 5]];
    }


}
export default Bishop