import Dice from '../../Transverse/Dice/Class/Dice';
import GangreneGeneratorInterface from '../Interface/GangreneGeneratorInterface';

class GangreneGenerator implements GangreneGeneratorInterface {
  dice : Dice = new Dice(6);

  public generate = () : number => {
    const roll = this.dice.roll(2, true);
    switch (true) {
      case roll >= 11 && roll <= 12:
        return 0;
      case roll >= 56 && roll <= 66:
        return 2;
      case roll >= 13 && roll <= 55:
      default:
        return 1;
    }
  };
}

export default GangreneGenerator;
