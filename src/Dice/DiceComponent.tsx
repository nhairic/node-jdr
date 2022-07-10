import * as React from "react";
import DicePropsInterface from "./DicePropsInterface";
import DiceStateInterface from "./DiceStateInterface";

export default class DiceComponent extends React.Component <DicePropsInterface, DiceStateInterface> {
  constructor(props: DicePropsInterface) {
    super(props);
    this.state = {
      result: 0
    }
  } 

  rollDice(){
    this.setState({result : this.props.dice.result()});
  }

  render() {
    return (
      <div className="dice">
        <span>{this.state.result ? this.state.result : ''}</span>
        <button onClick={() => this.rollDice()}/>
      </div>
    );
  }
}