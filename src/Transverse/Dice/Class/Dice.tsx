import DiceInterface from '../Interface/DiceInterface';

export default class Dice implements DiceInterface {
  readonly _values: Array<number> = [];

  public constructor(diceFaceNumber: number) {
    for (let i = 1; i <= diceFaceNumber; i += 1) {
      this._values.push(i);
    }
    // this._values = Array(Math.floor(diceFaceNumber)).fill(null);
  }

  get values(): Array<number> {
    return this._values;
  }

  protected rollDice = (): number => {
    const diceArray: Array<number> = [...this.values];
    for (let i = diceArray.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [diceArray[i], diceArray[j]] = [diceArray[j], diceArray[i]];
    }
    return diceArray.shift() ?? Math.ceil(Math.random() * this._values.length);
  };

  public roll = (HowMany: number, LikeHundred: boolean = false): number => {
    let result = 0;
    let factor = 1;
    const factorIncrement = LikeHundred ? 10 : 1;
    // eslint-disable-next-line no-plusplus
    for (let _i = 0; _i < Math.floor(HowMany); _i++) {
      result += this.rollDice() * factor;
      factor *= factorIncrement;
    }
    return result;
  };
}
