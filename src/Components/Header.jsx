import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  
  return (
    <Container className='Header'>
      <Navbar fixed='top' variant='dark' expand='sm' >
        <Container >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className='ms-auto mt-2 ' >
        <Nav.Link as={Link} to='/' className='mx-2 text-dark'>Etusivu</Nav.Link>     
        <Nav.Link as={Link} to='/DestPage' className='mx-2'>Kohteet</Nav.Link>
        <Nav.Link as={Link} to='/food-culture' className='mx-2'>Ruokakulttuuri</Nav.Link>
        <Nav.Link as={Link} to='/tips' className='mx-2'>Käytännön vinkkejä </Nav.Link>          
      </Nav>
    </Navbar.Collapse>
        </Container>
      </Navbar>
      </Container>
  );
}

export default Header;
