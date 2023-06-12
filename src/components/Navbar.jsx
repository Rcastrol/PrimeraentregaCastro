import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './cartwidget';

const Navbar = () => {
  return (
    <NavbarBootstrap bg="light" expand="lg">
      <Container>
        <NavbarBootstrap.Brand href="#home">DELIFRESCA</NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Productos</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Frutas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Verduras
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Frutos Secos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Ofertas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
           <CartWidget />
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
};

export default Navbar;