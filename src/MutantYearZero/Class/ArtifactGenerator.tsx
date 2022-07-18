import Dice from '../../Transverse/Dice/Class/Dice';
import ArtifactData from '../Data/artifactData.json';
import ArtifactDataType from '../Type/ArtifactDataType';

class ArtifactGenerator {
  dice: Dice = new Dice(6);

  private _artifactData: ArtifactDataType[] = ArtifactData;

  public generate = () => this.geData(this.dice.roll(3, true));

  public geData = (diceResult: number) : ArtifactDataType => {
    // re-roll any score over 642
    while (diceResult > 642) {
      // eslint-disable-next-line no-param-reassign
      diceResult = this.dice.roll(3, true);
    }
    // eslint-disable-next-line max-len
    const artifact = this._artifactData.find((elt) => diceResult >= elt.diceResultB && diceResult <= elt.diceResultH);
    if (artifact) {
      return artifact;
    }

    return {
      diceResultB: 0,
      diceResultH: 0,
      name: '',
      commentaire: '',
      effect: '',
      bonusDev: '',
      mandatoryDev: '',
      description: '',
    };
  };
}

export default ArtifactGenerator;
