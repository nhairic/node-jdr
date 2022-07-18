import Dice from '../../Transverse/Dice/Class/Dice';
import AmbienceGeneratorInterface from '../Interface/AmbienceGeneratorInterface ';
import EnvironmentGeneratorInterface from '../Interface/EnvironmentGeneratorInterface';
import GangreneGeneratorInterface from '../Interface/GangreneGeneratorInterface';
import SectorDataType from '../Type/SectorDataType';

class SectorGenerator {
  _dice : Dice = new Dice(6);

  _grangreneGenerator : GangreneGeneratorInterface;

  _ambienceGenerator : AmbienceGeneratorInterface;

  _environmentGenerator: EnvironmentGeneratorInterface;

  _sector: SectorDataType = {
    position: '',
    environment: {
      name: '',
      className: '',
      threat: {
        diceResultB: 0,
        diceResultH: 0,
        name: '',
        description: '',
        effect: '',
        zoneKnowledgeModifier: 0,
        page: 0,
        special: false,
      },
      artifact: {
        diceResultB: 0,
        diceResultH: 0,
        name: '',
        commentaire: '',
        mandatoryDev: '',
        bonusDev: '',
        effect: '',
        description: '',
      },
      ruin: {
        diceResult: 0,
        name: '',
        description: '',
      },
    },
    exploredLevel: 'c',
    grangreneLevel: 0,
    threatLevel: 0,
    ambience: {
      diceResult: 0,
      name: '',
      teaser: '',
      type: '',
    },
  };

  constructor(
    grangreneGenerator: GangreneGeneratorInterface,
    ambienceGenerator: AmbienceGeneratorInterface,
    environmentGenerator: EnvironmentGeneratorInterface,
  ) {
    this._grangreneGenerator = grangreneGenerator;
    this._ambienceGenerator = ambienceGenerator;
    this._environmentGenerator = environmentGenerator;
  }

  public generate = (): SectorDataType => {
    this._sector.grangreneLevel = this._grangreneGenerator.generate();
    this._sector.threatLevel = this._dice.roll(2);
    this._environmentGenerator.threatLevel = this._sector.threatLevel;
    this._sector.environment = this._environmentGenerator.generate();
    this._sector.ambience = this._ambienceGenerator.generate();
    return this._sector;
  };
}

export default SectorGenerator;
