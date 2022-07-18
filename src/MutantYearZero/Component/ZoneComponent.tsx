import * as React from 'react';
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

export default class ZoneComponent extends React.Component <ZoneProps, ZoneState> {
  constructor(props: ZoneProps) {
    super(props);
    this.state = {
      name: 'Pi garde',
      lines: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't'],
      // eslint-disable-next-line max-len
      columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      sectors: ZoneJson,
    };
  }

  renderSectors() {
    const lineBoard: any[] = [];
    const { sectors, lines, columns } = this.state;
    lines.forEach((linePosition) => {
      const sectorsLine: any[] = [];
      columns.forEach((columnNumber) => {
        let find = sectors.find((sec) => sec.position === `${linePosition}-${columnNumber}`);
        if (!find) {
          find = {
            position: `${linePosition}-${columnNumber}`,
            environment: '',
            ruins: '',
            artifact: '',
            exploredLevel: 'u',
            threat: '',
            grangreneLevel: 0,
          };
        }
        sectorsLine.push(<Sector id={linePosition + columnNumber} data={find} />);
      });
      lineBoard.push(<div className="board-row" id={linePosition}>{sectorsLine}</div>);
    });
    return lineBoard;
  }

  render() {
    const { name } = this.state;
    return (
      <div className="zone">
        <h2>{name}</h2>
        <div className="zone-render">
          {this.renderSectors()}
        </div>
      </div>
    );
  }
}
