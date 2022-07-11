/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';
import Dice100 from '../Dice/Dice100';
import Dice6 from '../Dice/Dice6';
import Dice66 from '../Dice/Dice66';
import DiceComponent from '../Dice/DiceComponent';
import CriticalWounds from './CriticalWounds';

export default class Feature extends React.Component <{}> {
  render() {
    const d6 = new Dice6();
    const d66 = new Dice66();
    const d100 = new Dice100();
    return (
      <div className="Feature">
        <h2>Features</h2>
        <DiceComponent key="d6" dice={d6} />
        <DiceComponent key="d66" dice={d66} />
        <DiceComponent key="d100" dice={d100} />
        <CriticalWounds key="criticalWounds" />
      </div>
    );
  }
}
