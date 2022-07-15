/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';
import ZoneComponent from './ZoneComponent';
import Feature from './FeatureComponent';

export default class MutantYearZeroComponent extends React.Component <{}> {
  render() {
    return (
      <div className="MutantYearZero">
        <Feature />
        <ZoneComponent file="rrr" />
      </div>
    );
  }
}
