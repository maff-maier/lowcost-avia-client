import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../img/logo.png'

const NewNavbar = () => {
    return (
        <Navbar sticky="top"
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            className="py-3"
            style={{ width: '100%' }}>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        height="30"
                        width="30"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Users</Nav.Link>
                        <Nav.Link as={Link} to="/routes">Routes</Nav.Link>
                    </Nav>

                    <Nav className="justify-content-end mr-auto" >
                        <Nav.Item>
                            <Nav.Link as={Link} to='/orders'>Orders</Nav.Link>

                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to='/planes'>Planes</Nav.Link>
                        </Nav.Item>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NewNavbar