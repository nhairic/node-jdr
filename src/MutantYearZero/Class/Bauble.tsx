import React from 'react';
import Dice from '../../Dice/Dice';
import DiceInterface from '../../Dice/DiceInterface';
import BaubleData from '../Data/bauble.json';
import BaubleDataType from '../Type/BaubleDataType';

class Bauble {
  _dice: DiceInterface;

  _data: BaubleDataType[];

  constructor() {
    this._dice = new Dice(6);
    this._data = BaubleData;
  }

  public getRandomData = () : BaubleDataType => this.getData(this._dice.roll(3, true));

  public searchClick = (e: React.FormEvent<HTMLInputElement>) : BaubleDataType => {
    const newValue = parseInt(e.currentTarget.value, 10);
    return this.getData(newValue);
  };

  public getData = (diceResult: number) : BaubleDataType => {
    const bauble = this._data.find((ba) => ba.diceResult === diceResult);
    if (bauble) {
      return bauble;
    }

    return { diceResult: 0, name: 'Babiole non trouvée' };
  };
}

export default Bauble;
