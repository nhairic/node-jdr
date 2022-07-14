/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';
import Dice from '../Dice/Dice';
import DiceComponent from './Component/DiceComponent';
import BaubleComponent from './Component/BaubleComponent';
import CriticalWounds from './CriticalWounds';

export default class Feature extends React.Component <{}> {
  render() {
    const d6 = new Dice(6);
    const d100 = new Dice(100);
    return (
      <div className="Feature">
        <h2>Features</h2>
        <DiceComponent key="d6" dice={d6} howMany={1} diceName="D6" />
        <DiceComponent key="d66" dice={d6} howMany={2} likeHundred diceName="D66" />
        <DiceComponent key="d100" dice={d100} howMany={1} diceName="D100" />
        <CriticalWounds key="criticalWounds" />
        <BaubleComponent key="dddddd" />
      </div>
    );
  }
}
