import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import BaubleComponent from './BaubleComponent';
import CriticalWoundsComponent from './CriticalWoundsComponent';

interface MyzLeftOffCanvasPorops {
  show: boolean;
  handleClose: Function;
}

const MyzLeftOffCanvasComponent = ({ show, handleClose }: MyzLeftOffCanvasPorops) => (
  <Offcanvas key="myz-offcanvas" show={show} onHide={handleClose} className="myz-left-off-canvas">
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Aide de jeux</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <CriticalWoundsComponent key="CriticalWounds" />
      <BaubleComponent key="bauble-generator" />
    </Offcanvas.Body>
  </Offcanvas>
);

export default MyzLeftOffCanvasComponent;
