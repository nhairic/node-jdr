import * as React from "react";
import ZoneComponent from "./Zone";
import Feature from "./Feature";

export default class MutantYearZero extends React.Component <{}> {
  render() {
    console.log('ICI');
    return (
      <div className="MutantYearZero">
            <Feature/>
            <ZoneComponent file="rrr"/>
      </div>
    );
  }
}