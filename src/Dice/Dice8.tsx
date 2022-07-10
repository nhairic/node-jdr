import Dice from './Dice';

class Dice8 extends Dice {
  readonly _values: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];

  readonly _name: string = 'D8';
}

export default Dice8;
