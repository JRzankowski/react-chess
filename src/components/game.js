import React, {Component} from "react";
import Board from './board.js';
import ChooseColor from './chooseColor.js'

import King from "./pieces/king";
import Bishop from "./pieces/bishop";
import Knight from "./pieces/knight";
import Pawn from "./pieces/pawn";
import Queen from "./pieces/queen";
import Rook from "./pieces/rook";


class Game extends Component {
    state = {
        board: [],
        player: 0,
        playerPaws: [],
        // oponentPaws: []
        initPaws : false
    };


    setPlayer = (color) => {
        this.setState({
            player: color
        })
    };

    setBoard = (board) => {
        this.setState({
            board: board
        });
    };

    initPawsOnBoard = (board) => {
        let tmpBoard = [...board];
        //for player


        let playerPaws = [
            new King(this.state.player, tmpBoard),
            new Bishop(this.state.player, tmpBoard),
            new Knight(this.state.player, tmpBoard),
            new Pawn(this.state.player, tmpBoard),
            new Queen(this.state.player, tmpBoard),
            new Rook(this.state.player, tmpBoard)
        ];

        this.setState({
            board: tmpBoard,
            playerPaws: playerPaws,
            // oponentPaws: oponentPaws
            initPaws : true
        });


    };

    setPawnOnField = (fieldX, fieldY, pawnType, srcFieldX, srcFieldY) => {
        const newBoard = [...this.state.board];

        if (srcFieldX && srcFieldY) {
            newBoard[srcFieldX][srcFieldY].pawnType = null;
        }

        newBoard[fieldX][fieldY].pawnType = pawnType;

        this.setState({
            newBoard: newBoard
        });
        return this.state.board

    };


    render() {

        if (this.state.board && this.state.board[0] && this.state.board[0][0]) {
         if (this.state.player !== 0 && !this.state.initPaws) {
             console.log('asd');
             this.initPawsOnBoard(this.state.board);
         }


    }

            return (
                <>

                    <ChooseColor eventChoose={this.setPlayer}/>
                    <Board board={this.state.board}
                        //     === 0 ? this.state.board : () => {
                        //     this.initPawsOnBoard(this.state.board)
                        // }}
                           eventSetBoard={this.setBoard}
                           eventMovePawn={this.setPawnOnField}

                    />

                    {/*<GameStarter/>*/}
                </>
            )
        }


}

export default Game;


