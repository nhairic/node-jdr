import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Bauble from '../Class/Bauble';
import BaubleDataType from '../Type/BaubleDataType';

const BaubleComponent: React.FC = () => {
  const [data, setValue] = useState<BaubleDataType>({
    diceResult: 0,
    name: '',
  });
  const bauble = new Bauble();
  return (
    <Card className="card_bauble">
      <Card.Header className="card_header_bauble">
        <Card.Title>Babiole</Card.Title>
      </Card.Header>
      <Card.Body className="card_body_bauble">
        <Card.Text>{data.name}</Card.Text>
      </Card.Body>
      <Card.Footer className="card_footer_bauble">
        {/*
        <input
          type="number"
          min="111"
          max="666"
          id="searchcw"
          name="search_cw"
          key="searchCW"
          onChange={(event) => setValue(bauble.getData(parseInt(event.target.value, 10)))}
        />
  */}
        <Button variant="warning" type="button" onClick={() => setValue(bauble.getRandomData())}>Trouver une babiole</Button>
      </Card.Footer>
    </Card>
  );
};

export default BaubleComponent;
