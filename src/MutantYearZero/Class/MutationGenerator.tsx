import Dice from '../../Transverse/Dice/Class/Dice';
import MutationDataType from '../Type/MutationDataType';
import MutationData from '../Data/MutationData.json';

class MutationGenerator {
  _dice: Dice = new Dice(6);

  private _mutationArray: MutationDataType[] = MutationData;

  public generate = () : MutationDataType => this.getData(this._dice.roll(2, true));

  public getData = (diceResult: number): MutationDataType => {
    let mutation = null;
    // todo add throw execption and end to getout while
    while (!mutation) {
      mutation = this._mutationArray.find((elt) => elt.diceResult === diceResult);
    }
    return mutation;
  };
}

export default MutationGenerator;
