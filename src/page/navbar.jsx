// Navbarpage.jsx

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './navbar.css';

function Navbarpage() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ alignItems: 'center' }}>
      <Container>
        <Navbar.Brand href="#home">Coffee Shop</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Product</Nav.Link>
            <Nav.Link href="/list">List Product</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarpage;
