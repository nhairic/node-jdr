/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';
import SectorData from '../Type/SectorDataType';

interface SectorProps {
  id: string;
  data: SectorData;
}

// interface SectorState {
//  zone: { sectors: Array<{[key: string]: Array<number>}> };
// }

export default class SectorComponent extends React.Component <SectorProps> {
  render() {
    const { data, id } = this.props;
    const sectorClass = data.explored ? 'Sector sector-explored' : 'Sector sector-not-explored';
    return (
      <div className={sectorClass} key={data.position} id={id} title={data.position}>
        {data.ruins}
      </div>
    );
  }
}
