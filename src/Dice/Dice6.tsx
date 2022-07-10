import Dice from './Dice';

class Dice6 extends Dice {
  readonly _values: Array<number> = [1, 2, 3, 4, 5, 6];

  readonly _name: string = 'D6';
}

export default Dice6;
