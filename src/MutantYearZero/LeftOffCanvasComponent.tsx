import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import BaubleComponent from './Component/BaubleComponent';

interface MyzLeftOffCanvasPorops {
  show: boolean;
  handleClose: Function;
}

const MyzLeftOffCanvasComponent = ({ show, handleClose }: MyzLeftOffCanvasPorops) => (
  <Offcanvas show={show} onHide={handleClose} variant="dark">
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Aide de jeux</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <BaubleComponent key="bauble-generator" />
    </Offcanvas.Body>
  </Offcanvas>
);

export default MyzLeftOffCanvasComponent;
