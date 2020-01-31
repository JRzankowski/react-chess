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
        initPaws: false
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
            initPaws: true
        });


    };


    checkPawns = (fieldX, fieldY, pawnType, srcFieldX, srcFieldY) => {
        const newBoard = [...this.state.board];


        if ((newBoard[fieldX][fieldY].pawnType === 'Pawn') &&
            (newBoard[fieldX + 1][fieldY].activeToMove) &&
            (newBoard[fieldX + 2][fieldY].pawnType = 'Pawn')) {
            newBoard[fieldX + 2][fieldY].pawnType = '';
            newBoard[fieldX + 2][fieldY].human = false;
            newBoard[fieldX + 1][fieldY].activeToMove = !newBoard[fieldX + 1][fieldY].activeToMove;
            newBoard[fieldX + 1][fieldY].typeOfMove = null;
            newBoard[fieldX + 2][fieldY].typeOfMove = null;
        }
        if ((newBoard[fieldX][fieldY].pawnType === 'Pawn') &&
            (newBoard[fieldX - 1][fieldY].activeToMove) &&
            (newBoard[fieldX + 1][fieldY].pawnType = 'Pawn')) {
            newBoard[fieldX + 1][fieldY].pawnType = '';
            newBoard[fieldX + 1][fieldY].human = false;
            newBoard[fieldX - 1][fieldY].activeToMove = !newBoard[fieldX - 1][fieldY].activeToMove;
        }
        if ((newBoard[fieldX][fieldY].pawnType === 'Pawn') &&
            (newBoard[fieldX + 1][fieldY].pawnType = 'Pawn')) {
            newBoard[fieldX + 1][fieldY].pawnType = '';
            newBoard[fieldX + 1][fieldY].human = false;
        }
        this.setState({
            newBoard: newBoard
        });
        return this.state.board
    };
    checkRooks = (fieldX, fieldY, pawnType, srcFieldX, srcFieldY) => {
        const newBoard = [...this.state.board];

        fieldX = +fieldX;
        fieldY = +fieldY;

        if (newBoard[fieldX][fieldY].pawnType === 'Rook') {
            for (let i = 1; i <= 7; i++) {
                if ((newBoard[fieldX + i][fieldY].activeToMove) && (newBoard[fieldX + i][fieldY].pawnType === '')) {
                    newBoard[fieldX + i][fieldY].activeToMove = !newBoard[fieldX + i][fieldY].activeToMove;
                    newBoard[fieldX + i][fieldY].typeOfMove = null;
                    console.log('asdf');
                } else if ((newBoard[fieldX + i][fieldY].pawnType === 'Rook') &&
                    (newBoard[fieldX + i][fieldY].human) &&
                    (newBoard[fieldX + i][fieldY].active)) {
                    newBoard[fieldX + i][fieldY].pawnType = '';
                    newBoard[fieldX + i][fieldY].human = false;
                    newBoard[fieldX + i][fieldY].activeToMove = false;
                    break;
                } else {
                    break;
                }
            }
            for (let i = 1; i <= 7; i++) {
                if ((newBoard[fieldX - i][fieldY].activeToMove) && (newBoard[fieldX - i][fieldY].pawnType === '')) {
                    newBoard[fieldX - i][fieldY].activeToMove = !newBoard[fieldX - i][fieldY].activeToMove;
                    newBoard[fieldX - i][fieldY].typeOfMove = null;
                    console.log('asdf');

                }
                if ((newBoard[fieldX + i][fieldY].pawnType === 'Rook') &&
                    (newBoard[fieldX + i][fieldY].human) &&
                    (newBoard[fieldX + i][fieldY].active)) {
                    newBoard[fieldX + i][fieldY].pawnType = '';
                    newBoard[fieldX + i][fieldY].human = false;
                    newBoard[fieldX + i][fieldY].activeToMove = !newBoard[fieldX + i][fieldY].activeToMove;
                }
                if (newBoard[fieldX - i] && newBoard[fieldX - i][fieldY] && (newBoard[fieldX - i][fieldY].pawnType === 'Rook') &&
                    (newBoard[fieldX - i][fieldY].human) &&
                    (newBoard[fieldX - i][fieldY].active)) {
                    newBoard[fieldX - i][fieldY].pawnType = '';
                    newBoard[fieldX - i][fieldY].human = false;
                    newBoard[fieldX - i][fieldY].activeToMove = !newBoard[fieldX - i][fieldY].activeToMove;
                } else {
                    break;
                }


            }

        }
        this.setState({
            newBoard: newBoard
        });
        return this.state.board
    };


    setPawnOnField = (fieldX, fieldY, pawnType, srcFieldX, srcFieldY) => {
        const newBoard = [...this.state.board];

        fieldX = +fieldX;
        fieldY = +fieldY;

        newBoard[fieldX][fieldY].active = !newBoard[fieldX][fieldY].active;


        if (newBoard[fieldX][fieldY].pawnType === 'Pawn' && newBoard[fieldX][fieldY].pawnFirstMove) {
            newBoard[fieldX - 1][fieldY].activeToMove = !newBoard[fieldX - 1][fieldY].activeToMove;
            newBoard[fieldX - 2][fieldY].activeToMove = !newBoard[fieldX - 2][fieldY].activeToMove;
            newBoard[fieldX - 2][fieldY].active = !newBoard[fieldX - 2][fieldY].active;
            newBoard[fieldX - 2][fieldY].typeOfMove = newBoard[fieldX][fieldY].pawnType;
            newBoard[fieldX - 1][fieldY].typeOfMove = newBoard[fieldX][fieldY].pawnType;
        }
        if (newBoard[fieldX][fieldY].pawnType === 'Pawn' && !newBoard[fieldX][fieldY].pawnFirstMove) {
            newBoard[fieldX - 1][fieldY].activeToMove = !newBoard[fieldX - 1][fieldY].activeToMove;
            newBoard[fieldX - 1][fieldY].typeOfMove = newBoard[fieldX][fieldY].pawnType;
        }
        if (newBoard[fieldX][fieldY].pawnType === 'Rook') {
            //move up
            for (let i = 1; i <= 7; i++) {
                if (newBoard[fieldX - i] && newBoard[fieldX - i][fieldY] && newBoard[fieldX - i][fieldY].pawnType.length === 0) {
                    newBoard[fieldX - i][fieldY].activeToMove = !newBoard[fieldX - i][fieldY].activeToMove;
                    newBoard[fieldX - i][fieldY].typeOfMove = newBoard[fieldX][fieldY].pawnType;
                } else {
                    break;
                }
            }
            //move down
            for (let i = 1; i <= 999; i++) {
                if (newBoard[fieldX + i] && newBoard[fieldX + i][fieldY] && newBoard[fieldX + i][fieldY].pawnType.length === 0) {
                    newBoard[fieldX + i][fieldY].activeToMove = !newBoard[fieldX + i][fieldY].activeToMove;
                    newBoard[fieldX + i][fieldY].typeOfMove = newBoard[fieldX][fieldY].pawnType;
                } else {
                    break;
                }
            }

        }

        // if ((newBoard[fieldX][fieldY].pawnType === 'Rook')&&) {
        //     for (let i = 1; i <= 7; i++) {
        //         if ((newBoard[fieldX + i][fieldY].pawnType.length === 0)&&(newBoard[fieldX][fieldY].)) {
        //             newBoard[fieldX + i][fieldY].activeToMove = !newBoard[fieldX + i][fieldY].activeToMove;
        //             newBoard[fieldX + i][fieldY].typeOfMove = newBoard[fieldX][fieldY].pawnType;
        //         } else {
        //             break;
        //         }
        //     }
        //
        // }

        // if(!newBoard[fieldX - 1][fieldY].pawnType.length>0){
        //     for (let i = 1; i < ; i++) {
        //
        //
        //     }
        //     newBoard[fieldX - 1][fieldY].activeToMove = !newBoard[fieldX - 1][fieldY].activeToMove;
        //
        // }
        // }


        this.setState({
            newBoard: newBoard
        });
        return this.state.board

    };


    render() {

        if (this.state.board && this.state.board[0] && this.state.board[0][0]) {
            if (this.state.player !== 0 && !this.state.initPaws) {
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
                       checkPawns={this.checkPawns}
                       checkRooks={this.checkRooks}


                />

                {/*<GameStarter/>*/}
            </>
        )
    }


}

export default Game;


