import * as React from "react";
import Sector from "./Sector";
import SectorData from './SectorData';
import ZoneJson from './Data/zone.json';

interface ZoneProps {
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
      name: 'Monceaux',
      lines: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i','j', 'k', 'l', 'm', 'o','p', 'q', 'r', 's', 't'],
      columns: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
      sectors: ZoneJson,
    };
  }

  renderSectors(){
    let lineBoard: any[] =[];
    this.state.lines.forEach((linePosition) => {
      const sectorsLine: any[] = [];
      this.state.columns.forEach((columnNumber) => {
        let find = this.state.sectors.find(sec => sec.position === linePosition+ '-' +columnNumber);
        if (!find) { 
          find =     {
            "position": "a-1",
            "enviromnent": "",
            "ruins": "",
            "artifact": "",
            "explored": false,
            "threat": ""
          }
        }
        sectorsLine.push(<Sector id={linePosition+columnNumber} data={find} />);
      });
      lineBoard.push(<div className="board-row" id={linePosition}>{sectorsLine}</div>);
    });
    return lineBoard;
  }
  
  render() {
    return (
      <div className="zone">
            {this.renderSectors()}
      </div>
    );
  }
}