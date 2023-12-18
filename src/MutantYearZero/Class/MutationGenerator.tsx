import Dice from '../../Transverse/Dice/Class/Dice';
import MutationDataType from '../Type/MutationDataType';
import MutationData from '../Data/MutationData.json';

class MutationGenerator {
  _dice: Dice = new Dice(6);

  private _mutationArray: MutationDataType[] = MutationData;

  public generate = () : MutationDataType => this.getData(this._dice.roll(2, true));

  public getData = (diceResult: number): MutationDataType => {
    let mutation = null;
    let compare: number = diceResult;
    // todo add throw execption and end to getout while
    while (!mutation) {
      // eslint-disable-next-line no-loop-func
      mutation = this._mutationArray.find((elt) => elt.diceResult === compare);
      compare = this._dice.roll(2, true);
    }
    return mutation;
  };
}

export default MutationGenerator;
