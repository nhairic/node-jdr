/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';
import Dice from '../../Transverse/Dice/Class/Dice';
import DiceComponent from '../../Transverse/Dice/Component/DiceComponent';
import DicesBoardComponent from '../../Transverse/Dice/Component/DicesBoardComponent';
import BaubleComponent from './BaubleComponent';
import CriticalWounds from './CriticalWoundsComponent';

export default class FeatureComponent extends React.Component <{}> {
  render() {
    const d6 = new Dice(6);
    const d100 = new Dice(100);
    const d8 = new Dice(8);
    const dices = [
      {
        dice: d6, howMany: 1, likeHundred: false, diceName: 'd6',
      },
      {
        dice: d6, howMany: 2, likeHundred: true, diceName: 'd66',
      },
      {
        dice: d8, howMany: 1, likeHundred: true, diceName: 'd8',
      },
    ];
    return (
      <div className="Feature">
        <h2>Features</h2>
        <DiceComponent key="d6" dice={d6} howMany={1} diceName="D6" />
        <DiceComponent key="d66" dice={d6} howMany={2} likeHundred diceName="D66" />
        <DiceComponent key="d100" dice={d100} howMany={1} diceName="D100" />
        <CriticalWounds key="criticalWounds" />
        <BaubleComponent key="dddddd" />
        <DicesBoardComponent dices={dices} />
      </div>
    );
  }
}
