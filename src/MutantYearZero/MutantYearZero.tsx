/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';
import ZoneComponent from './Zone';
import Feature from './Feature';

export default class MutantYearZero extends React.Component <{}> {
  render() {
    return (
      <div className="MutantYearZero">
        <Feature />
        <ZoneComponent file="rrr" />
      </div>
    );
  }
}
