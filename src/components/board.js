import React, {Component, useState} from "react";
import Square from './square';
import ChooseColor from './chooseColor.js'


function isEven(num) {
    return num % 2 === 0
}


// function RenderBoard() {
//     let [board, setBoard] = useState([]);
//
//     for (let i = 0; i < 8; i++) {
//         const boardRow = [];
//         for (let j = 0; j < 8; j++) {
//             const squareColor = ((isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j)) ? "light" : "dark");
//             boardRow.push(
//                 <Square
//                     style={`single__square single__square--${squareColor}`}
//                     key={[i, j]}
//                 />
//             );
//         }
//         board.push(boardRow);
//         console.log(boardRow)
//
//     }
//     return <div className="board">{board}</div>
// }

export default class Board extends Component {


    genBoard = () => {
        let board = [];
        for (let i = 0; i < 8; i++) {
            const boardRow = [];
            for (let j = 0; j < 8; j++) {
                const squareColor = ((isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j)) ? "light" : "dark");
                boardRow.push({
                    'fieldX': `${i}`,
                    'fieldY': `${j}`,
                    'color': `${squareColor}`,
                    'pawnType': "",
                    'pawnForUser': "",
                    'active': false,
                    'human':false,
                    'activeToMove':false,
                    'typeOfMove' : null
                });
            }
            board.push(boardRow);
            // console.log(boardRow)
        }
        return board;
    };

    render() {
        let {board, eventSetBoard} = this.props;

        if (board.length === 0) {
            board = this.genBoard();
            if (typeof eventSetBoard === 'function') {
                    eventSetBoard(board);

            }
            return null;
        }



        return (
            <>
                <div className='container container__board'>
                    <div className="board"> {board.map(row =>
                        row.map(el =>
                            <Square
                                style={`single__square single__square--${el.color}`}
                                key={[el.fieldX, el.fieldY]}
                                field={el}
                                 eventMovePawn={this.props.eventMovePawn}
                                checkPawns = {this.props.checkPawns}
                                checkRooks={this.props.checkRooks}

                            />
                        )
                    )} </div>
                </div>
            </>

        );
    }
}







