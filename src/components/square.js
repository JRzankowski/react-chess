import React, {Component} from "react";


class Square extends Component {

    render() {
        const {style, i, j} = this.props;
        return (
            <div className={style}
                 key={[i,j]}
            />
        )
    }

}


export default Square;