import React, { useState } from 'react';
import DicePropsInterface from '../Interface/DicePropsInterface';

const DiceComponent = ({
  dice, howMany, likeHundred, diceName,
}: DicePropsInterface) => {
  const [result, setValue] = useState<number>(0);
  return (
    <div className="Dice">
      <span className="DiceName">{diceName || ''}</span>
      <span className="DiceResult">{result || ''}</span>
      <button type="button" onClick={() => setValue(dice.roll(howMany, likeHundred))}>Lancer</button>
    </div>
  );
};

export default DiceComponent;
