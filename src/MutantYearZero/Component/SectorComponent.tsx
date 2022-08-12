import * as React from 'react';
// import SectorDataType from '../Type/SectorDataType';
import SectorData from '../Type/SectorDataType';

interface SectorProps {
  id: string;
  data: SectorData;
}

// interface SectorState {
//  zone: { sectors: Array<{[key: string]: Array<number>}> };
// }

const SectorComponent = ({ id, data }: SectorProps) => {
  let sectorClass = 'Sector';
  switch (data.exploredLevel) {
    case 'e':
      sectorClass += ' sector-explored';
      break;
    case 'c':
      sectorClass += ' sector-crossed';
      break;
    case 'u':
      sectorClass += ' sector-not-explored';
      break;
    default:
      break;
  }
  return (
    <div className={sectorClass} key={data.position} id={id} title={data.position}>
      {data.environment.name}
    </div>
  );
};

export default SectorComponent;
