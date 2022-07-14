import Dice666 from '../../Dice/Dice666';
import DiceInterface from '../../Dice/DiceInterface';
import BaubleData from '../Data/bauble.json';
import BaubleDataType from '../Type/BaubleDataType';

class Bauble {
  _dice: DiceInterface;

  _data: BaubleDataType[];

  constructor() {
    this._dice = new Dice666();
    this._data = BaubleData;
  }

  public getRandomData = () : BaubleDataType => this.getData(this._dice.result());

  public getData = (d66: number) : BaubleDataType => {
    const bauble = this._data.find((ba) => ba.d66 === d66);
    if (bauble) {
      return bauble;
    }

    return { d66: 0, name: 'Babiole non trouvée' };
  };
}

export default Bauble;
