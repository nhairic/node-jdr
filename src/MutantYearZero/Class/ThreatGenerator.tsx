import Dice from '../../Transverse/Dice/Class/Dice';
import threatMonsterData from '../Data/threatMonsterData.json';
import threatHumanoidData from '../Data/threatHumanoidData.json';
import threatPhenomenData from '../Data/threatPhenomenData.json';
import ThreatDataType from '../Type/ThreatDataType';

class ThreatGenerator {
  dice: Dice = new Dice(6);

  _threatMonsterData: ThreatDataType[] = threatMonsterData;

  _threatHumanoidData: ThreatDataType[] = threatHumanoidData;

  _threatPhenomenData: ThreatDataType[] = threatPhenomenData;

  _defaultThreat : ThreatDataType = {
    diceResult: 0, name: '', description: '', effect: '', special: false, zoneKnowledgeModifier: 0, page: 0,
  };

  public generate = () => {
    const type = this.dice.roll(1);
    const roll = this.dice.roll(2, true);
    if (type === 6) {
      return this.getPhenomenData(roll);
    } if (type > 2) {
      return this.getMonsterData(roll);
    }
    return this.getHumanoidData(roll);
  };

  public getPhenomenData = (diceResult: number) : ThreatDataType => {
    const threat = this._threatPhenomenData.find((ph) => ph.diceResult === diceResult);
    if (threat) {
      return threat;
    }

    return this._defaultThreat;
  };

  public getHumanoidData = (diceResult: number) : ThreatDataType => {
    const threat = this._threatHumanoidData.find((ph) => ph.diceResult === diceResult);
    if (threat) {
      return threat;
    }

    return this._defaultThreat;
  };

  public getMonsterData = (diceResult: number) : ThreatDataType => {
    const threat = this._threatMonsterData.find((ph) => ph.diceResult === diceResult);
    if (threat) {
      return threat;
    }

    return this._defaultThreat;
  };
}

export default ThreatGenerator;
