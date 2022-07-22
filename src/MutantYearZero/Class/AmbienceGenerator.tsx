import Dice from '../../Transverse/Dice/Class/Dice';
import AmbienceDataType from '../Type/AmbienceDataType';
import AmbienceData from '../Data/ambienceData.json';

class AmbienceGenerator {
  dice: Dice = new Dice(6);

  _ambienceData: AmbienceDataType[] = AmbienceData;

  public generate = () => this.geData(this.dice.roll(2, true));

  public geData = (diceResult: number) : AmbienceDataType => {
    const ambience = this._ambienceData.find((elt) => elt.diceResult === diceResult);
    if (ambience) {
      return ambience;
    }

    return {
      diceResult: 0,
      name: '',
      teaser: '',
      type: '',
    };
  };
}

export default AmbienceGenerator;
