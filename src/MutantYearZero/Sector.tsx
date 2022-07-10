/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';
import SectorData from './SectorData';

interface SectorProps {
  id: string;
  data: SectorData;
}

// interface SectorState {
//  zone: { sectors: Array<{[key: string]: Array<number>}> };
// }

export default class Sector extends React.Component <SectorProps> {
  render() {
    const { data, id } = this.props;
    return (
      <div className="Sector" key={data.position} id={id}>
        {data.ruins}
      </div>
    );
  }
}
