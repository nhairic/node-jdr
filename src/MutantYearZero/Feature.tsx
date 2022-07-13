/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';
import DiceComponent from '../Dice/DiceComponent';
import BaubleComponent from './Component/BaubleComponent';
import CriticalWounds from './CriticalWounds';

export default class Feature extends React.Component <{}> {
  render() {
    return (
      <div className="Feature">
        <h2>Features</h2>
        <DiceComponent faces={6} />
        <DiceComponent faces={66} />
        <DiceComponent faces={100} />
        <CriticalWounds key="criticalWounds" />
        <BaubleComponent key="dddddd" />
      </div>
    );
  }
}
