import Dice6 from "./Dice6";

class Dice66 extends Dice6{
  readonly _values: Array<number> = [1, 2, 3, 4, 5, 6];

  result = () => {
    const dizaine = this.rollDice() * 10;
    const unit = this.rollDice();
    return dizaine + unit;
  };
}

export default Dice66;
