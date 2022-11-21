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

const Ap = () => {
    const [modal, setModal] = useState(false)
    const [numbers, setNumers] = useState([])

    let [number, setNumber] = useState('+375')
    


    const handleClose = () => {
        setModal(false)
        number = setNumber('+375')
    }

    const validation = (num) => {
        return validator.isMobilePhone(num)
    }

    const submit = (e) => {
        e.preventDefault()
        const obj = {number}
        console.log(obj)

        fetch("http://localhost:8080/user/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }
        ).then(console.log("success"))
    }

    useEffect(() => {
        fetch("http://localhost:8080/user/getAll")
        .then(res => res.json())
        .then((result) => {
            setNumers(result);
        }
        )
    }, [])

    console.log(numbers)

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
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant='dark'
                        onClick={() => {
                            validation(number) ? submit() : console.log('not ok')
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
                    <Route path="/" element={<Home />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/trips" element={<Trips />} />
                    <Route path="/search" element={<Search />}/>
                </Routes>



                {//<Footer /> 
                }
            </Router>

            <div className='container'>
                {numbers.map((obj, index) => {
                    return ( <div key={index}>
                    <h2>Num is {obj.number}</h2>
                    <h2>id is {obj.id}</h2>
                    </div>);
                })}
            </div>

        </>
    );
}



export default Ap;