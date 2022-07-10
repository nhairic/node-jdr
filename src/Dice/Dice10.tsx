import Dice from './Dice';

class Dice10 extends Dice {
  readonly _values: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  readonly _name: string = 'D10';
}

export default Dice10;
