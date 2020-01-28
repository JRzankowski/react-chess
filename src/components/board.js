import React, {Component} from "react";
import Square from './square';


function isEven(num) {
    return num % 2 === 0
}

function renderSquare(color,i,j) {
    return <Square
        style={`single__square single__square--${color}`}
        key={[i,j]}
    />
}

class Board extends Component {
    state = {
        board: [],
    };
    render() {

        for (let i = 0; i < 8; i++) {
            const boardRow = []
            for (let j = 0; j < 8; j++) {
                const squareColor = ((isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j)) ? "light" : "dark");
                boardRow.push(renderSquare(squareColor,i,j))
            }
            this.state.board.push(boardRow);
        }
        return (
            <div className='container container__board'>
                <div className="board">
                    {this.state.board}

                </div>


            </div>
        );
    }
}


export default Board;




