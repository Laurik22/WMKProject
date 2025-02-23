import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";




function Header() {
  return (
      <Navbar sticky='top' expand='sm' >
        <Container >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className='ms-auto mt-2' >     
      <Nav.Link href='#introduction' className='mx-2'>Miksi Japaniin?</Nav.Link>
      <Nav.Link href='#sights' className='mx-2'>Kohteet</Nav.Link>
      <Nav.Link href='#introduction' className='mx-2' >Ruoka</Nav.Link>
      <Nav.Link href='#introduction' className='mx-2'>Käytännön vinkit</Nav.Link>
      <Nav.Link href='#introduction' className='mx-2'>Ota yhteyttä</Nav.Link>          
      </Nav>
    </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Header;