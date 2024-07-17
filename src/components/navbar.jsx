import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../App.css';

function NavbarApp() {
  return (
    <Navbar expand="lg" id="navbarContainer" sticky="top">
      <Container>
      <Link className="navlinks" to="/"><Navbar.Brand style={{color: 'white', padding: '10px'}}>Andres Felipe Llamosa</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex gap-30">
            <div className="navlinksContainer">
              <Link className="navlinks" to="/">Home</Link>
              <Link className="navlinks" to="/projects">Projects</Link>
              <Link className="navlinks" to="/skills">Skills</Link>
              <Link className="navlinks" to="/contact">Contact me</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
