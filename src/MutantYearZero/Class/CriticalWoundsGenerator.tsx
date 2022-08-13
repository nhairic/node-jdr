import Dice from '../../Transverse/Dice/Class/Dice';
import DiceInterface from '../../Transverse/Dice/Interface/DiceInterface';
import CriticalWoundsData from '../Data/critiques.json';
import CriticalWoundsGeneratorInterface from '../Interface/CriticalWoundsGeneratorInterface';
import CriticalWoundsDataType from '../Type/CriticalWoundsDataType';

class CriticalWoundsGenerator implements CriticalWoundsGeneratorInterface {
  _dice: DiceInterface;

  _data: CriticalWoundsDataType[];

  public readonly DefaultWound = {
    diceResult: 0,
    blessure: ' ',
    mortelle: '-',
    periode_soin: ' ',
    effet_durant_guerison: ' ',
    convalescence: '',
  };

  constructor() {
    this._dice = new Dice(6);
    this._data = CriticalWoundsData;
  }

  public generate = () : CriticalWoundsDataType => this.getData(this._dice.roll(2, true));

  public getData = (diceResult: number) : CriticalWoundsDataType => {
    const CriticalWound = this._data.find((ba) => ba.diceResult === diceResult);
    if (CriticalWound) {
      return CriticalWound;
    }

    return this.DefaultWound;
  };
}

export default CriticalWoundsGenerator;
