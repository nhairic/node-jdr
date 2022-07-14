import * as React from 'react';
import Dice from '../commons/Dice';

interface DiceComponentProps {
  faces:number
}
const DiceComponent = (props:DiceComponentProps) => {
  const { faces } = props;
  const [lastValue, setLastValue] = React.useState('');

  const diceName = `d${faces}`;
  const rollDice = () => setLastValue(Dice.roll(faces).toString(10));

  return (
    <div className="Dice">
      <span className="DiceName">{diceName}</span>
      <span className="DiceResult">{lastValue}</span>
      <button type="button" onClick={rollDice}>Lancer</button>
    </div>
  );
};

export default DiceComponent;
