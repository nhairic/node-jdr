import DiceInterface from './DiceInterface';

interface DicePropsInterface {
  dice: DiceInterface
  howMany: number;
  likeHundred?: boolean;
  diceName?: string;
}

export default DicePropsInterface;
