import * as React from "react";
import Dice6 from "../Dice/Dice6";
import DiceComponent from "../Dice/DiceComponent";
export default class Feature extends React.Component <{}> {
  render() {
    const d6 = new Dice6();
    return (
      <div className="Feature">
            <h2>Features</h2>
            <DiceComponent key='d6' dice={d6} />
      </div>
    );
  }
}