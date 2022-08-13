import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import Dice from '../../Transverse/Dice/Class/Dice';
import DiceComponent from '../../Transverse/Dice/Component/DiceComponent';
import DicesBoardComponent from '../../Transverse/Dice/Component/DicesBoardComponent';
import SectorGeneratorComponent from './SectorGeneratorComponent';

const FeatureComponent: React.FC = () => {
  const d6 = new Dice(6);
  const d100 = new Dice(100);
  const d8 = new Dice(8);
  const dices = [
    {
      dice: d6, howMany: 1, likeHundred: false, diceName: 'd6',
    },
    {
      dice: d6, howMany: 2, likeHundred: true, diceName: 'd66',
    },
    {
      dice: d8, howMany: 1, likeHundred: true, diceName: 'd8',
    },
  ];
  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <DiceComponent key="d6" dice={d6} howMany={1} diceName="D6" />
            <DiceComponent key="d66" dice={d6} howMany={2} likeHundred diceName="D66" />
            <DiceComponent key="d100" dice={d100} howMany={1} diceName="D100" />
          </CardGroup>
        </Col>
        <Col>
          <DicesBoardComponent dices={dices} />
        </Col>
      </Row>
      <Row>
        <Col>
          <SectorGeneratorComponent key="Sector-display" />
        </Col>
      </Row>
    </Container>
  );
};

export default FeatureComponent;
