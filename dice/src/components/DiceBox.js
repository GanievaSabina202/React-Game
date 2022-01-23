import React, { Component } from 'react';

class DiceBox extends Component {
    constructor(props) {
      super(props)
    
 
    }
    
    render() {
        return (
            <div>
                <div className='diceWrapper'>
                    <i className={`dice fas fa-dice-${this.props.gamer1} ${this.props.dice && "shaking"}`}></i>
                    <i className={`dice fas fa-dice-${this.props.gamer2} ${this.props.dice && "shaking"}`}></i>
                </div>
            </div>
        );
    }
}
export default DiceBox