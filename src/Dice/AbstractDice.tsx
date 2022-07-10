export default abstract class Dice {
    readonly _values: Array<number> = [];

    public result = () : number => {
      return this.rollDice();
    };
    
    protected rollDice = (): number => {
      let diceArray: Array<number> = [...this._values];
      for (let i = diceArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [diceArray[i], diceArray[j]] = [diceArray[j], diceArray[i]];
      }
      return diceArray.shift() ?? Math.ceil(Math.random() * this._values.length);
    };
};