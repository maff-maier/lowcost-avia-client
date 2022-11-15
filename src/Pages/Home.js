import React, { useState } from 'react'
import { Button, Form, Col, Row, FloatingLabel, Container, Card, Image } from 'react-bootstrap'
import search from "../img/search.png"

const Home = () => {

    const [date, setDate] = useState(new Date().toLocaleDateString("de-DE"))


    return (
        <>
            <Container
                className="bg-image p-5 text-center shadow-1-strong rounded mb-5 mt-4" style={{

                    backgroundImage: 'url(https://images.unian.net/photos/2022_08/thumb_files/1200_0_1661244119-5886.png)',
                    backgroundSize: "cover"
                    
                }}>
                <Container
                >
                    <Container className='mt-3' style={{ textAlign: 'center' }}>
                        <div>
                            <h1 >SOME TEXT LOL</h1>
                        </div>
                    </Container>
                    <Form className="mt-4">
                        <Container>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridFrom">
                                    <FloatingLabel controlId="floatingInput" label="From">

                                        <Form.Control type="text" placeholder='From' autoComplete="off" />
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridTo">
                                    <FloatingLabel controlId="floatingInput" label="To">

                                        <Form.Control type="text" placeholder='To' autoComplete="off" />
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridInlintDate">
                                    <FloatingLabel controlId="floatingInput" label="Date">

                                        <Form.Control
                                            readOnly={true}
                                            type="text"
                                            value={date}

                                        />
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridSitCount">
                                    <FloatingLabel controlId='floatingSit' label="Sit count" >
                                        <Form.Select defaultValue="Sit Count">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Select>
                                    </FloatingLabel>

                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridSearch">
                                    <Button variant='dark' type='submit' className="pb-3 btn-lg" style={{ width: "130px", justifyContent: "center" }}>
                                        Search
                                    </Button>
                                </Form.Group>


                            </Row>
                        </Container>
                    </Form>
                </Container>
            </Container>

            <Container className="pt-3 mb-3">
                <Row>
                    <Form.Group as={Col} controlId="fromToFirst">
                        <Card onClick={1} style={{ cursor: 'pointer' }}>
                            <Row>
                                <Form.Group as={Col} controlId="text">
                                    <Card.Body>
                                        <Card.Title>
                                            From-To
                                        </Card.Title>
                                        <Card.Text>
                                            Cost
                                        </Card.Text>
                                    </Card.Body>
                                </Form.Group>

                                <Form.Group as={Col} controlId="icon">
                                    <Container className="mt-4" style={{ textAlign: 'right' }}>
                                        <Image src={search} style={{ width: '30px' }} />

                                    </Container>

                                </Form.Group>
                            </Row>
                        </Card>
                    </Form.Group>
                    <Form.Group as={Col} controlId="fromToFirst">
                        <Card onClick={1} style={{ cursor: 'pointer' }}>
                            <Row>
                                <Form.Group as={Col} controlId="text">
                                    <Card.Body>
                                        <Card.Title>
                                            From-To
                                        </Card.Title>
                                        <Card.Text>
                                            Cost
                                        </Card.Text>
                                    </Card.Body>
                                </Form.Group>

                                <Form.Group as={Col} controlId="icon">
                                    <Container className="mt-4" style={{ textAlign: 'right' }}>
                                        <Image src={search} style={{ width: '30px' }} />

                                    </Container>

                                </Form.Group>
                            </Row>
                        </Card>
                    </Form.Group>
                    <Form.Group as={Col} controlId="fromToFirst">
                        <Card onClick={1} style={{ cursor: 'pointer' }}>
                            <Row>
                                <Form.Group as={Col} controlId="text">
                                    <Card.Body>
                                        <Card.Title>
                                            From-To
                                        </Card.Title>
                                        <Card.Text>
                                            Cost
                                        </Card.Text>
                                    </Card.Body>
                                </Form.Group>

                                <Form.Group as={Col} controlId="icon">
                                    <Container className="mt-4" style={{ textAlign: 'right' }}>
                                        <Image src={search} style={{ width: '30px' }} />

                                    </Container>

                                </Form.Group>
                            </Row>
                        </Card>
                    </Form.Group>
                </Row>
                <Row className="mt-3">
                    <Form.Group as={Col} controlId="fromToFirst">
                        <Card onClick={1} style={{ cursor: 'pointer' }}>
                            <Row>
                                <Form.Group as={Col} controlId="text">
                                    <Card.Body>
                                        <Card.Title>
                                            From-To
                                        </Card.Title>
                                        <Card.Text>
                                            Cost
                                        </Card.Text>
                                    </Card.Body>
                                </Form.Group>

                                <Form.Group as={Col} controlId="icon">
                                    <Container className="mt-4" style={{ textAlign: 'right' }}>
                                        <Image src={search} style={{ width: '30px' }} />

                                    </Container>

                                </Form.Group>
                            </Row>
                        </Card>
                    </Form.Group>
                    <Form.Group as={Col} controlId="fromToFirst">
                        <Card onClick={1} style={{ cursor: 'pointer' }}>
                            <Row>
                                <Form.Group as={Col} controlId="text">
                                    <Card.Body>
                                        <Card.Title>
                                            From-To
                                        </Card.Title>
                                        <Card.Text>
                                            Cost
                                        </Card.Text>
                                    </Card.Body>
                                </Form.Group>

                                <Form.Group as={Col} controlId="icon">
                                    <Container className="mt-4" style={{ textAlign: 'right' }}>
                                        <Image src={search} style={{ width: '30px' }} />

                                    </Container>

                                </Form.Group>
                            </Row>
                        </Card>
                    </Form.Group>
                    <Form.Group as={Col} controlId="fromToFirst">
                        <Card onClick={1} style={{ cursor: 'pointer' }}>
                            <Row>
                                <Form.Group as={Col} controlId="text">
                                    <Card.Body>
                                        <Card.Title>
                                            From-To
                                        </Card.Title>
                                        <Card.Text>
                                            Cost
                                        </Card.Text>
                                    </Card.Body>
                                </Form.Group>

                                <Form.Group as={Col} controlId="icon">
                                    <Container className="mt-4" style={{ textAlign: 'right' }}>
                                        <Image src={search} style={{ width: '30px' }} />

                                    </Container>

                                </Form.Group>
                            </Row>
                        </Card>
                    </Form.Group>
                </Row>
            </Container>


        </>
    );
}
export default Home;
