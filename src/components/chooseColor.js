import React, {Component} from "react";


class ChooseColor extends Component {

    state = {
        chosenColor: 0,
        activePopup: true
    };

    handleClick = (e) => {
        let color;
        if (e.target.className === 'choose-color__white'){
            color = 1;
            this.setState({
                activePopup: false
            })
        }else {
            color = 2;
              this.setState({
                    activePopup: false
              })
        }

        if(typeof this.props.eventChoose === 'function'){
            this.props.eventChoose(color);
        }
    };

    render() {

        if (this.state.activePopup) {
            return (
                <div className='choose-color'>
                    <h3 className='choose-color__heading'>Choose your color</h3>
                    <div onClick={this.handleClick} color='white' className='choose-color__white'></div>
                    <div onClick={this.handleClick} color='black' className='choose-color__black'></div>
                </div>
            )
        } else return this.state.chosenColor
    }
}

export default ChooseColor;

