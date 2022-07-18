import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import DicePropsInterface from '../Interface/DicePropsInterface';
// import image from '../svg/delapouite/rolling-dices.svg';

const DiceComponent = ({
  dice, howMany, likeHundred, diceName,
}: DicePropsInterface) => {
  const [result, setValue] = useState<number>(0);
  return (
    <Card key="{diceName}" className="card_dice">
      <Card.Header className="card_header">
        <Card.Title>{diceName || ''}</Card.Title>
      </Card.Header>
      <Card.Body className="card_body">
        <Card.Text>{result || ' '}</Card.Text>
      </Card.Body>
      <Card.Footer className="card_footer  ">
        <Button variant="warning button-rolling-dice" type="button" onClick={() => setValue(dice.roll(howMany, likeHundred))} />
      </Card.Footer>
    </Card>
  );
};

export default DiceComponent;
