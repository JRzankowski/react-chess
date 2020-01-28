import Piece from './piece'
import {Component} from "react";

class Rock extends Piece {
    constructor(player) {
        super(player, (player === 1 ?'https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces#/media/File:Chess_rlt45.svg' : 'https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces#/media/File:Chess_rdt45.svg'));
        const playerPosition= [[7, 0], [7, 7]];
        const aiPosition= [[0, 0], [0, 7]];
    }


}
export default Rock