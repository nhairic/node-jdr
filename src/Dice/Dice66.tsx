import Dice from './Dice';

class Dice66 extends Dice {
  readonly _values: Array<number> = [1, 2, 3, 4, 5, 6];

  readonly _name: string = 'D66';

  result = (): number => {
    const dizaine = this.rollDice() * 10;
    const unit = this.rollDice();
    return dizaine + unit;
  };
}

export default Dice66;
