import Dice from '../../Transverse/Dice/Class/Dice';
import ArtifactGeneratorInterface from '../Interface/ArtifactGeneratorInterface ';
import RuinGeneratorInterface from '../Interface/RuinGeneratorInterface';
import ThreatGeneratorInterface from '../Interface/ThreatGeneratorInterface';
import ArtifactDataType from '../Type/ArtifactDataType';
import RuinDataType from '../Type/RuinDataType';
import ThreatDataType from '../Type/ThreatDataType';
import MutantYearZeroThreatDiceTest from '../Function/MutantYearZeroThreatDiceTest';
import EnvironmentDataType from '../Type/EnvironmentDataType';

class EnvironmentGenerator {
  dice: Dice = new Dice(6);

  private _threatLevel: number = 0;

  _environmentName: string = '';

  _environmentClassName: string = '';

  _ruinGenerator: RuinGeneratorInterface;

  _threatGenerator: ThreatGeneratorInterface;

  _artifactGenerator: ArtifactGeneratorInterface;

  _ruin: RuinDataType = {
    diceResult: 0,
    name: '',
    description: '',
  };

  _artifact: ArtifactDataType = {
    diceResultB: 111,
    diceResultH: 114,
    name: '',
    commentaire: '',
    mandatoryDev: '',
    bonusDev: '',
    effect: '',
    description: '',
  };

  _threat: ThreatDataType = {
    diceResultB: 0,
    diceResultH: 0,
    name: '',
    description: '',
    effect: '',
    zoneKnowledgeModifier: 0,
    page: 0,
    special: false,
  };

  public constructor(
    ruinGenerator: RuinGeneratorInterface,
    threatGenerator: ThreatGeneratorInterface,
    artifactGenerator: ArtifactGeneratorInterface,
    threatLevel: number = 0,
  ) {
    this._threatLevel = threatLevel;
    this._ruinGenerator = ruinGenerator;
    this._threatGenerator = threatGenerator;
    this._artifactGenerator = artifactGenerator;
  }

  public get threatLevel(): number {
    return this._threatLevel;
  }

  public set threatLevel(value: number) {
    this._threatLevel = value;
  }

  public generate = (): EnvironmentDataType => {
    const roll = this.dice.roll(2, true);
    const threatResult = MutantYearZeroThreatDiceTest(this._threatLevel);
    let couldHaveArtifact = false;
    let couldHaveThreat = true;
    switch (true) {
      case roll >= 11 && roll <= 12:
        this._environmentName = 'Forêt dense';
        this._environmentClassName = 'forest';
        break;
      case roll >= 13 && roll <= 15:
        this._environmentName = 'Brousse';
        this._environmentClassName = 'bush';
        break;
      case roll >= 16 && roll <= 21:
        this._environmentName = 'Marécages';
        this._environmentClassName = 'swamp';
        break;
      case roll >= 22 && roll <= 24:
        this._environmentName = 'Forêt éteinte';
        this._environmentClassName = 'dead-forest';
        break;
      case roll >= 25 && roll <= 26:
        this._environmentName = 'Désert de cendres';
        this._environmentClassName = 'ash-desert';
        break;
      case roll === 31:
        this._environmentName = 'Immense cratère';
        this._environmentClassName = 'big-crater';
        break;
      case roll === 32:
        this._environmentName = 'Terre vitrifiée';
        this._environmentClassName = 'ash-desert';
        break;
      case roll >= 33 && roll <= 35:
        this._environmentName = 'Ruines luxuriantes';
        this._environmentClassName = 'lush-ruins';
        this._ruin = this._ruinGenerator.generate();
        couldHaveArtifact = true;
        break;
      case roll >= 36 && roll <= 42:
        this._environmentName = 'Ruines croulantes';
        this._environmentClassName = 'crumbling-ruins';
        this._ruin = this._ruinGenerator.generate();
        couldHaveArtifact = true;
        break;
      case roll >= 43 && roll <= 51:
        this._environmentName = 'Ruines délabrées';
        this._environmentClassName = 'dilapidated-ruins';
        this._ruin = this._ruinGenerator.generate();
        couldHaveArtifact = true;
        break;
      case roll >= 52 && roll <= 56:
        this._environmentName = 'Ruines intactes';
        this._environmentClassName = 'intact-ruins';
        this._ruin = this._ruinGenerator.generate();
        couldHaveArtifact = true;
        break;
      case roll >= 61 && roll <= 64:
        this._environmentName = 'Usines abandonnées';
        this._environmentClassName = 'abandoned-factories';
        this._ruin = this._ruinGenerator.generate();
        couldHaveArtifact = true;
        break;
      case roll >= 65 && roll <= 66:
        this._environmentName = 'Colonie*';
        couldHaveThreat = false;
        break;
      default:
        break;
    }
    if (couldHaveArtifact && threatResult.radioactive > 0) {
      this._artifact = this._artifactGenerator.generate();
    }
    if (couldHaveThreat && threatResult.biohazard > 0) {
      this._threat = this._threatGenerator.generate();
    }
    return {
      name: this._environmentName,
      className: this._environmentClassName,
      artifact: this._artifact,
      threat: this._threat,
      ruin: this._ruin,
    };
  };
}

export default EnvironmentGenerator;
