import Dice from './AbstractDice';
import DiceInterface from './DiceInterface';

class Dice6 extends Dice implements DiceInterface
{
  readonly _values: Array<number> = [1, 2, 3, 4, 5, 6];
}

export default Dice6;
