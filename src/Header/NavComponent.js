import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function NavComponent() {
    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Weather App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav
                        className="me-auto"
                        navbarScroll
                    >
                        {/* Link запускает обработку правильного компонента.
                        без Link теряется смысл react route поскольку обычный <a href="/"></a> перезапускает всю страницу
                        */}
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/current/0">Tallinn</Link>
                        <Link className="nav-link" to="/current/1">Tartu</Link>
                        <Link className="nav-link" to="/current/2">Kuresaare</Link>
                        <Link className="nav-link" to="/current/3">Parnu</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}