import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function NavComponent() {

  const [selectedCity, setSelectedCity] = useState({ city: "Choose city" });
  const [units, setUnits] = useState('');

  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Weather App {units}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <Nav.Link onClick={() => setUnits('C')}>C</Nav.Link>
            <Nav.Link onClick={() => setUnits('F')}>F</Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={selectedCity.city}
              menuVariant="dark"
            >
              {cities.map(city =>
                <NavDropdown.Item onClick={() => setSelectedCity(city)} href="#action/3.1">{city.city}</NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}