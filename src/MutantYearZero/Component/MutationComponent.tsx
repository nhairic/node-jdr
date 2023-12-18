import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MutationDataType from '../Type/MutationDataType';
import MutationGenerator from '../Class/MutationGenerator';

const MutationComponent: React.FC = () => {
  const [data, setValue] = useState<MutationDataType>({
    diceResult: 0,
    name: '',
    effectA: '',
    effectB: '',
    effectC: '',
  });
  const mutation = new MutationGenerator();
  return (
    <Card className="card_bauble">
      <Card.Header className="card_header_bauble">
        <Card.Title>Mutation</Card.Title>
      </Card.Header>
      <Card.Body className="card_body_bauble">
        <Card.Text>
          {data.name}
          <ul>
            <li>{data.effectA}</li>
            <li>{data.effectB}</li>
            <li>{data.effectC}</li>
          </ul>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="card_footer_bauble">
        <Button variant="warning" type="button" onClick={() => setValue(mutation.generate())}>Générer une mutation</Button>
      </Card.Footer>
    </Card>
  );
};

export default MutationComponent;
