import Dice from '../../commons/Dice';
import BaubleData from '../Data/bauble.json';
import BaubleDataType from '../Type/BaubleDataType';

class Bauble {
  _data: BaubleDataType[];

  constructor() {
    this._data = BaubleData;
  }

  public getRandomData = () : BaubleDataType => this.getData(Dice.d666());

  public getData = (d66: number) : BaubleDataType => {
    const bauble = this._data.find((ba) => ba.d66 === d66);
    if (bauble) {
      return bauble;
    }

    return { d66: 0, name: 'Babiole non trouvée' };
  };
}

export default Bauble;
