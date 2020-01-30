import React, {Component,useState} from "react";

import Rook from './pieces/rook'





class Square extends Component {

    handleMove = (e) => {
        const {eventMovePawn, field} = this.props;
        if(typeof eventMovePawn === 'function'){
            eventMovePawn(field.fieldX, field.fieldY, '0');

        }
    };



    render() {
        // console.log(this.props.field);
        const {style, i, j, field} = this.props;

        let squareStyle = `${style} ${field.pawnType} ${field.pawnForUser==1? 'white': 'black'}`;

        return (
            <div className={squareStyle}
                 key={[i, j]}
                 onClick={this.handleMove}
            />
        )
    }

}


export default Square;