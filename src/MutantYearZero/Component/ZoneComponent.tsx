import React, { useState } from 'react';
import Sector from './SectorComponent';
import SectorData from '../Type/SectorDataType';
import ZoneJson from '../Data/zone.json';

interface ZoneProps {
  // eslint-disable-next-line react/no-unused-prop-types
  file: string;
}

interface ZoneState {
  name: string;
  columns: number[];
  lines: string[];
  sectors: SectorData[];
}

// eslint-disable-next-line no-unused-vars
const ZoneComponent /*: React.FC */ = ({ file }:ZoneProps) => {
  // eslint-disable-next-line no-unused-vars
  const [state, setValue] = useState<ZoneState>({
    name: 'Pi garde',
    lines: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't'],
    // eslint-disable-next-line max-len
    columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    sectors: ZoneJson,
  });

  const renderSectors = () => {
    const lineBoard: any[] = [];
    const { sectors, lines, columns } = state;
    lines.forEach((linePosition) => {
      const sectorsLine: any[] = [];
      columns.forEach((columnNumber) => {
        let find = sectors.find((sec) => sec.position === `${linePosition}-${columnNumber}`);
        if (!find) {
          find = {
            position: `${linePosition}-${columnNumber}`,
            environment: {
              name: '',
              className: '',
              threat: {
                diceResultB: 0,
                diceResultH: 0,
                name: '',
                description: '',
                effect: '',
                zoneKnowledgeModifier: 0,
                page: 0,
                special: false,
              },
              artifact: {
                diceResultB: 0,
                diceResultH: 0,
                name: '',
                commentaire: '',
                mandatoryDev: '',
                bonusDev: '',
                effect: '',
                description: '',
              },
              ruin: {
                diceResult: 0,
                name: '',
                description: '',
              },
            },
            exploredLevel: 'c',
            grangreneLevel: 0,
            threatLevel: 0,
            ambience: {
              diceResult: 0,
              name: '',
              teaser: '',
              type: '',
            },
          };
        }
        sectorsLine.push(<Sector id={linePosition + columnNumber} data={find} />);
      });
      lineBoard.push(<div className="board-row" id={linePosition}>{sectorsLine}</div>);
    });
    return lineBoard;
  };

  const { name } = state;
  return (
    <div className="zone">
      <h2 className="tm-text-primary">{name}</h2>
      <div className="zone-render">
        {renderSectors()}
      </div>
    </div>
  );
};

export default ZoneComponent;
