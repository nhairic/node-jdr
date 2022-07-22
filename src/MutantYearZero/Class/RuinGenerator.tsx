import Dice from '../../Transverse/Dice/Class/Dice';
import RuinDataType from '../Type/RuinDataType';
import NormalRuinDaTa from '../Data/NormaRuinData.json';
import IndustrialRuinData from '../Data/IndustrialRuinData.json';
import RuinGeneratorInterface from '../Interface/RuinGeneratorInterface';

class RuinGenerator implements RuinGeneratorInterface {
  dice: Dice = new Dice(6);

  _normalRuinData: RuinDataType[] = NormalRuinDaTa;

  _industrialRuinData: RuinDataType[] = IndustrialRuinData;

  generate = (): RuinDataType => {
    const roll = this.dice.roll(2);
    const choice = this.dice.roll(1);
    if (choice < 4) {
      return this.getNormalRuinData(roll);
    }
    return this.getindustrialRuinData(roll);
  };

  public getNormalRuinData = (diceResult: number): RuinDataType => {
    const ruin = this._normalRuinData.find((elt) => elt.diceResult === diceResult);
    if (ruin) {
      return ruin;
    }

    return { diceResult: 0, name: '', description: '' };
  };

  public getindustrialRuinData = (diceResult: number): RuinDataType => {
    const ruin = this._industrialRuinData.find((elt) => elt.diceResult === diceResult);
    if (ruin) {
      return ruin;
    }

    return { diceResult: 0, name: '', description: '' };
  };
}

export default RuinGenerator;
