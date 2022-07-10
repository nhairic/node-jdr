import * as React from 'react';
import DicePropsInterface from './DicePropsInterface';
import DiceStateInterface from './DiceStateInterface';

export default class DiceComponent extends React.Component
<DicePropsInterface, DiceStateInterface> {
  constructor(props: DicePropsInterface) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  rollDice() {
    const { dice } = this.props;
    this.setState({ result: dice.result() });
  }

  render() {
    const { dice } = this.props;
    const { result } = this.state;
    return (
      <div className="Dice">
        <span className="DiceName">{dice._name}</span>
        <span className="DiceResult">{result || ''}</span>
        <button type="button" onClick={() => this.rollDice()}>Lancer</button>
      </div>
    );
  }
}
