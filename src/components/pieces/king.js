import Piece from './piece'
import {Component} from "react";

class King extends Piece {
    constructor(player) {
        super(player, (player === 1 ?'https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces#/media/File:Chess_klt45.svg' : 'https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces#/media/File:Chess_kdt45.svg'));
        const playerPosition= [[7, 4]];
        const aiPosition= [[0, 4]];
    }


}
export default King