/* eslint-disable no-unused-vars */
interface DiceInterface {
  _values: Array<number>,
  roll(HowMany: number, LikeHundred?: boolean): number;
}

export default DiceInterface;
