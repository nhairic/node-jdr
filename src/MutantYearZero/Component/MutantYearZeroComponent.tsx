import * as React from 'react';
import '../css/myz.css';
import { Row } from 'react-bootstrap';
import ZoneComponent from './ZoneComponent';
import Feature from './FeatureComponent';
import MutantYearZeroNavBar from '../MutantYearZeroNavBar';

const MutantYearZeroComponent: React.FC = () => (
  <>
    <MutantYearZeroNavBar />
    <h1 className="h1-myz">Mutant Year Zero</h1>
    <Row>
      <Feature />
    </Row>
    <Row>
      <ZoneComponent file="rrr" />
    </Row>
  </>
);

export default MutantYearZeroComponent;
