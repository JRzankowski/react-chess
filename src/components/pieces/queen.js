import Piece from './piece'
import {Component} from "react";

class Queen extends Piece {
    constructor(player) {
        super(player, (player === 1 ?'https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces#/media/File:Chess_qlt45.svg' : 'https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces#/media/File:Chess_qdt45.svg'));
        const playerPosition= [[7, 3]];
        const aiPosition= [[0, 3]];
    }


}
export default Queen