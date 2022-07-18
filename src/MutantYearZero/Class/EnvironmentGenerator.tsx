import Dice from '../../Transverse/Dice/Class/Dice';
import AmbienceGeneratorInterface from '../Interface/AmbienceGeneratorInterface ';
import RuinGeneratorInterface from '../Interface/RuinGeneratorInterface';
import RuinDataType from '../Type/RuinDataType';

class EnvironmentGenerator {
  dice: Dice = new Dice(6);

  _environmentName: string = '';

  _ruinGenerator: RuinGeneratorInterface;

  _ruin: RuinDataType = { diceResult: 0, name: '' };

  _ambienceGenerator: AmbienceGeneratorInterface;

  public constructor(
    ruinGenerator: RuinGeneratorInterface,
    ambienceGenerator: AmbienceGeneratorInterface,
  ) {
    this._ruinGenerator = ruinGenerator;
    this._ambienceGenerator = ambienceGenerator;
  }

  public generate = () => {
    const roll = this.dice.roll(2, true);
    switch (true) {
      case roll >= 11 && roll <= 12:
        this._environmentName = 'Forêt dense';
        break;
      case roll >= 13 && roll <= 15:
        this._environmentName = 'Brousse';
        break;
      case roll >= 16 && roll <= 21:
        this._environmentName = 'Marécages';
        break;
      case roll >= 22 && roll <= 24:
        this._environmentName = 'Forêt éteinte';
        break;
      case roll >= 25 && roll <= 26:
        this._environmentName = 'Désert de cendres';
        break;
      case roll === 31:
        this._environmentName = 'Immense cratère';
        break;
      case roll === 32:
        this._environmentName = 'Terre vitrifiée';
        break;
      case roll >= 33 && roll <= 35:
        this._environmentName = 'Ruines luxuriantes';
        this._ruin = this._ruinGenerator.generate();
        break;
      case roll >= 36 && roll <= 42:
        this._environmentName = 'Ruines croulantes';
        this._ruin = this._ruinGenerator.generate();
        break;
      case roll >= 43 && roll <= 51:
        this._environmentName = 'Ruines délabrées';
        this._ruin = this._ruinGenerator.generate();
        break;
      case roll >= 52 && roll <= 56:
        this._environmentName = 'Ruines intactes';
        this._ruin = this._ruinGenerator.generate();
        break;
      case roll >= 61 && roll <= 64:
        this._environmentName = 'Usines abandonnées';
        this._ruin = this._ruinGenerator.generate();
        break;
      case roll >= 65 && roll <= 66:
        this._environmentName = 'Colonie*';
        break;
      default:
        break;
    }
  };
}

export default EnvironmentGenerator;
