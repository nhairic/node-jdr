import Dice from './Dice';

class Dice100 extends Dice {
  readonly _values: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  readonly _name: string = 'D100';

  result = () => {
    const dizaine = this.rollDice() * 10;
    const unit = this.rollDice();
    return dizaine + unit || 100;
  };
}

export default Dice100;
