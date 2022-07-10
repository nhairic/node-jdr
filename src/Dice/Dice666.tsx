import Dice6 from "./Dice6";

class Dice666 extends Dice6 
{
  readonly _values: Array<number> = [1, 2, 3, 4, 5, 6];

  result = () => {
    const centaine = this.rollDice() * 100;
    const dizaine = this.rollDice() * 10;
    const unit = this.rollDice();

    return centaine + dizaine + unit;
  };
}

export default Dice666;
