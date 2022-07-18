import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import DicesBoradPropsInterface from '../Interface/DicesBoardPropsInterface';

const DicesBoardComponent = ({ dices }: DicesBoradPropsInterface) => {
  const [result, setValue] = useState<number>(0);
  const dicesButton = dices.map((dice) => (
    <Button variant="warning" type="button" onClick={() => setValue(dice.dice.roll(dice.howMany, dice.likeHundred))}>
      Lancer
      {dice.diceName}
    </Button>
  ));
  return (
    <div className="Dices">
      <span className="DiceResult">{result || ''}</span>
      {dicesButton}
    </div>
  );
};

export default DicesBoardComponent;
