import React, { useEffect, useState } from "react";
import validator from 'validator'
import { Navbar, Container, Nav, Modal, Form, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import logo from '/Jv/lowcost_avia/frontend/src/img/logo.png'
import Home from '../Pages/Home'
import Contacts from "../Pages/Contacts";
import Trips from '../Pages/Trips'
import Search from "../Pages/Search";
import Footer from "./UI/Footer"
import '../style/Invalid.css'
import axios from "axios";

const Ap = () => {
    const [modal, setModal] = useState(false)

    const [number, setNumber] = useState("+375")
    const [pass, setPass] = useState("")

    const [auth, setAuth] = useState(false)





    const handleClose = () => {
        setModal(false)
        setAuth(false)

        setNumber("+375")
        setPass("")
    }

    const validation = (num) => {
        return validator.isMobilePhone(num, 'be-BY')
    }

    const submit = async (e) => {
        e.preventDefault()
        const obj = { number, pass }


        const res = await fetch("http://localhost:8080/user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }
        )


        console.log(res)
        const get = await axios.get("http://localhost:8080/user/getAll")

        console.log(get)
        if (res.status == 200) {
            setNumber("+375")
            setPass("")

            setAuth(true)
            setModal(false)

            return;
        }



    }

    // useEffect(() => {
    //     fetch("http://localhost:8080/user/getAll")
    //     .then(res => res.json())
    //     .then((result) => {
    //         setNumers(result);
    //     }
    //     )
    // }, [])


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
                            <Form.Control
                                className='input'
                                type='text'
                                pattern='[+, 0-9]*'
                                placeholder="Enter number"
                                aria-invalid={true}
                                value={number}
                                onChange={e => setNumber(e.target.value)} />
                        </Form.Group>
                        {number}
                        <Form.Group className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                className="input"
                                type="password"
                                placeholder="Password"
                                aria-invalid={true}
                                value={pass}
                                onChange={e => setPass(e.target.value)} />
                            {pass}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant='dark'
                        onClick={(e) => {
                            validation(number) ? submit(e) : console.log('not ok')
                        }
                        }>
                        Confirm

                    </Button>
                    <Button variant='outline-secondary' onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Router>
                <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className="py-3" style={{ width: '100%' }}>
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
                                    {auth
                                        ? <Nav.Link onClick={() => setAuth(false)}>Log out</Nav.Link>
                                        : <Nav.Link onClick={() => setModal(true)}>Log in</Nav.Link>}
                                </Nav.Item>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Routes>
                    <Route exact path="" element={<Home />} />
                    <Route exact path="/contacts" element={<Contacts />} />
                    <Route exact path="/trips" element={<Trips />} />
                    <Route exact path="/search" element={<Search />} />
                </Routes>

                <Footer />

            </Router>
        </>
    );
}



export default Ap;