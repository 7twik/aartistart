import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
const Nave = () => {
  return (
    <div>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"><img className='c3' src="./logo.png" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><div className="c4" >Home</div></Nav.Link>
            <Nav.Link href="#features"><div className="c4" >Features</div></Nav.Link>
            <Nav.Link href="#pricing"><div className="c4" >Pricing</div></Nav.Link>
            <Button variant="danger">React</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Nave