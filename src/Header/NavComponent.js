import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import cities frim './cities.json';

export default function NavComponent() {
    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/my-app">Weather App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav
                        className="me-auto"
                        navbarScroll
                    >
                        <Link className="nav-link" to="/my-app">Home</Link>

                        <Link className="nav-link" to="/my-app/forecast">Forecast</Link>
                        <Link className="nav-link" to="/my-app/current/tallinn">Tallinn</Link>
                        {cities.map(city => (
                            <Link key={city.name}
                                className="nav-link"
                                to=('/weather-app/current/$(city.name.toLowerCase()}'}>
                        {city.name}
                        )
                    }
                        <Link className="nav-link" to="/my-app/current/tartu">Tartu</Link>
                        <Link className="nav-link" to="/my-app/current/kuressaare">Kuressaare</Link>
                        <Link className="nav-link" to="/my-app/current/parnu">Parnu</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}