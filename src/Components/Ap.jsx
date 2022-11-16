import React, { useState } from "react";
import { Navbar, Container, Nav, Modal, Form, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import logo from '/Jv/lowcost_avia/frontend/src/img/logo.png'
import Home from '../Pages/Home'
import Contacts from "../Pages/Contacts";
import Trips from '../Pages/Trips'
import Footer from "./UI/Footer"

const Ap = () => {
    const [modal, setModal] = useState(false)

    const handleClose = () => setModal(false)

    return (
        <>
            <Modal
                show={modal}
                onHide={handleClose}
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Authorization</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='mt-3'>
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control onChange={
                                e => e.match('^[0-9\-\+]{9,15}$')
                                    ? "Ok"
                                    : "Not ok"
                            } defaultValue="+" type='text' placeholder="Enter number" aria-invalid={false} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='dark' onClick={handleClose}>
                        Confirm

                    </Button>
                    <Button variant='outline-secondary' onClick={handleClose}>
                        Close

                    </Button>
                </Modal.Footer>
            </Modal>

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
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
                            </Nav>

                            <Nav className="justify-content-end mr-auto" >
                                <Nav.Item>
                                    <Nav.Link as={Link} to='/trips'>Trips</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link onClick={() => setModal(true)}>Log in</Nav.Link>
                                </Nav.Item>
                            </Nav>

                        </Navbar.Collapse>


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



export default Ap;