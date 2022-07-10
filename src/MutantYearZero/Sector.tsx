import * as React from "react";
import SectorData from "./SectorData";

interface SectorProps {
  id: string;
  data: SectorData;
}

//interface SectorState {
//  zone: { sectors: Array<{[key: string]: Array<number>}> };
//}

export default class Sector extends React.Component <SectorProps> {
  
  constructor(props: SectorProps) {
    super(props);
  }  

  render() {
      return (
        <div className="Sector" key={this.props.data.position} id={this.props.id}>
          {this.props.data.ruins}                   
        </div>
      );
    }
  }