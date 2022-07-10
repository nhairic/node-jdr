import Dice from './Dice';

class Dice666 extends Dice {
  readonly _values: Array<number> = [1, 2, 3, 4, 5, 6];

  readonly _name: string = 'D666';

  result = () => {
    const centaine = this.rollDice() * 100;
    const dizaine = this.rollDice() * 10;
    const unit = this.rollDice();

    return centaine + dizaine + unit;
  };
}

export default Dice666;
