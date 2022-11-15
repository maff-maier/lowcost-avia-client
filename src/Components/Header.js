import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import logo from '/Jv/lowcost_avia/frontend/src/img/logo.png'
import Home from '../Pages/Home'
import Contacts from "../Pages/Contacts";
import Trips from '../Pages/Trips'
import Footer from "./UI/Footer"

const Header = () => {
    return (
        <>
            <Router>
                <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className="py-3">
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
                            <Nav className="mr-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>

                        <Nav className="justify-content-end mr-auto" >
                        <Nav.Item>
                            <Nav.Link as={Link} to='/trips'>Trips</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to='/'>Log in</Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Container>
                </Navbar>

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/contacts" element={<Contacts />} />
                    <Route exact path="/trips" element={<Trips />} />
                </Routes>



                <Footer />
            </Router>

        </>
    );
}

                //reload page!


export default Header;