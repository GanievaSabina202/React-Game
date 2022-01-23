import React, { Component } from 'react';
import DiceBox from './DiceBox';

const rollNum = ["one", "two", "three", "four", "five", "six"];

class Dice extends Component {
    constructor(props) {
        super(props)
        this.roll = this.roll.bind(this)
        this.state = {
            gamer1: "one",
            gamer2: "one",
            dice: false
        }
    }

    roll() {
        let gamer1 = rollNum[Math.floor(Math.random() * rollNum.length)]
        console.log(gamer1);
        let gamer2 = rollNum[Math.floor(Math.random() * rollNum.length)]
        console.log(gamer2);
        this.setState(PrevState => {
            return {
                gamer1,
                gamer2,
                dice: !PrevState.dice
            }
        })

    }


    render() {
        return (
            <div>
                <button className='button-dice' role="button" onClick={this.roll}>Dice</button>
                <DiceBox
                    gamer1={this.state.gamer1}
                    gamer2={this.state.gamer2}
                    dice={this.state.dice && "shaking"}
                />
            </div>
        );
    }
}
export default Dice