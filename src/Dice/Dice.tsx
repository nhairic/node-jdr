import AbstractDice from './AbstractDice';
import DiceInterface from './DiceInterface';

class Dice extends AbstractDice implements DiceInterface {
  readonly _values: Array<number> = [1, 2];

  readonly _name: string = 'Dice';
}

export default Dice;
