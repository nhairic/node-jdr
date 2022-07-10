export default abstract class AbstractDice {
  readonly _values: Array<number> = [];

  readonly _name: string = 'Dice';

  public result = () : number => this.rollDice();

  get values(): Array<number> {
    return this._values;
  }

  protected rollDice = (): number => {
    const diceArray: Array<number> = [...this.values];
    // eslint-disable-next-line no-plusplus
    for (let i = diceArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [diceArray[i], diceArray[j]] = [diceArray[j], diceArray[i]];
    }
    return diceArray.shift() ?? Math.ceil(Math.random() * this._values.length);
  };
}
