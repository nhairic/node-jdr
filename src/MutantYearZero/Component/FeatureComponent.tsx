import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectorGeneratorComponent from './SectorGeneratorComponent';

const FeatureComponent: React.FC = () => (
  <Container>
    <Row>
      <Col>
        <SectorGeneratorComponent key="Sector-display" />
      </Col>
    </Row>
  </Container>
);

export default FeatureComponent;
