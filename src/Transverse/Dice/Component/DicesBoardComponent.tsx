import React, { useState } from 'react';
import DicesBoradPropsInterface from '../Interface/DicesBoardPropsInterface';

const DicesBoardComponent = ({ dices }: DicesBoradPropsInterface) => {
  const [result, setValue] = useState<number>(0);
  const dicesButton = dices.map((dice) => (
    <button type="button" onClick={() => setValue(dice.dice.roll(dice.howMany, dice.likeHundred))}>
      Lancer
      {dice.diceName}
    </button>
  ));
  return (
    <div className="Dices">
      <span className="DiceResult">{result || ''}</span>
      {dicesButton}
    </div>
  );
};

export default DicesBoardComponent;
