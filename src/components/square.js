import React, {Component, useState} from "react";

import Rook from './pieces/rook'


class Square extends Component {

    state={
        userSelect : false
    };

    handleMove = () => {
        const {eventMovePawn, field,checkPawns,checkRooks} = this.props;

        if (typeof eventMovePawn === 'function') {
            eventMovePawn(field.fieldX, field.fieldY, field.pawnType);

            if(field.activeToMove && field.typeOfMove === 'Pawn'){
                field.pawnType = 'Pawn';
                field.pawnForUser= 1;
                field.human = true;
                field.activeToMove = false;
                field.active = false;
                checkPawns(parseInt(field.fieldX),parseInt(field.fieldY))
        }
            if(field.activeToMove && field.typeOfMove === 'Rook'){
                field.pawnType = 'Rook';
                field.pawnForUser= 1;
                field.human = true;
                field.activeToMove = false;
                field.active = false;
                checkRooks(parseInt(field.fieldX),parseInt(field.fieldY))
            }
            }


        };
    render() {
        // console.log(this.props.field);
        const {style, i, j, field,checkPawns} = this.props;
        let squareStyle = '';

        if (field.pawnForUser === 1) {
            squareStyle = `${style} ${field.pawnType} white`;
        } else if (field.pawnForUser === 2) {
            squareStyle = `${style} ${field.pawnType} black`;
        } else {
            squareStyle = `${style} ${field.pawnType}`;
        }

        if (field.pawnForUser === 1 || field.pawnForUser === 2) {
            if (field.active && field.human) {
                squareStyle = `${squareStyle} active`;
            }
         }
        if(field.activeToMove){
            squareStyle = `${squareStyle} activeToMove`;
        }



        return (
            <div className={squareStyle}
                 key={[i, j]}
                 onClick={this.handleMove}
            />
        )
    }
}





export default Square;