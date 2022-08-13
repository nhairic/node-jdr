import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import MyzLeftOffCanvasComponent from './Component/LeftOffCanvasComponent';

function MutantYearZeroNavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar expand="lg" sticky="top" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Button variant="warning" onClick={handleShow}>
          Aide de jeux
        </Button>
        <MyzLeftOffCanvasComponent show={show} handleClose={handleClose} />
      </Container>
    </Navbar>
  );
}

export default MutantYearZeroNavBar;
