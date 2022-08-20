import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import MyzLeftOffCanvasComponent from './Component/LeftOffCanvasComponent';
import MyzBottomOffCanvasComponent from './Component/BottomOffCanvasComponent ';

function MutantYearZeroNavBar() {
  const [showleft, setShowLeft] = useState(false);
  const [showBottom, setShowBottom] = useState(false);

  const handleCloseLeft = () => setShowLeft(false);
  const handleShowLeft = () => setShowLeft(true);

  const handleCloseBottom = () => setShowBottom(false);
  const handleShowBottom = () => setShowBottom(true);
  return (
    <Navbar expand="lg" sticky="top" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Button variant="warning" onClick={handleShowLeft}>
          Aide de jeux
        </Button>
        <Button variant="warning" onClick={handleShowBottom}>
          dés
        </Button>
        <MyzLeftOffCanvasComponent show={showleft} handleClose={handleCloseLeft} />
        <MyzBottomOffCanvasComponent show={showBottom} handleClose={handleCloseBottom} />
      </Container>
    </Navbar>
  );
}

export default MutantYearZeroNavBar;
