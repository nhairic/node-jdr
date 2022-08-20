import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CardGroup from 'react-bootstrap/CardGroup';
import DiceComponent from '../../Transverse/Dice/Component/DiceComponent';
import Dice from '../../Transverse/Dice/Class/Dice';
import DicesBoardComponent from '../../Transverse/Dice/Component/DicesBoardComponent';

interface MyzLeftOffCanvasPorops {
  show: boolean;
  handleClose: Function;
}

const MyzBottomOffCanvasComponent = ({ show, handleClose }: MyzLeftOffCanvasPorops) => {
  const d6 = new Dice(6);
  const d100 = new Dice(100);
  const d8 = new Dice(8);
  const dices = [
    {
      dice: d6, howMany: 1, likeHundred: false, diceName: 'd6',
    },
    {
      dice: d6, howMany: 2, likeHundred: true, diceName: 'd66',
    },
    {
      dice: d8, howMany: 1, likeHundred: true, diceName: 'd8',
    },
  ];

  return (
    <Offcanvas key="myz-offcanvas" show={show} onHide={handleClose} placement="bottom" className="myz-left-off-canvas">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Dés</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <CardGroup>
          <DiceComponent key="d6" dice={d6} howMany={1} diceName="D6" />
          <DiceComponent key="d66" dice={d6} howMany={2} likeHundred diceName="D66" />
          <DiceComponent key="d100" dice={d100} howMany={1} diceName="D100" />
        </CardGroup>
        <DicesBoardComponent dices={dices} />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MyzBottomOffCanvasComponent;
