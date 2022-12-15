import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import '/Jv/lowcost_avia/frontend/src/style/Item.css'

const PlaneItem = ({ plane, remove }) => {

    return (
        <Container className='mt-3 item'>
            <Row>
                <Col className="mt-3">
                    <Container style={{ display: 'flex' }}><h3>Plane Model: {plane.model}</h3></Container>
                    <Container>Side plane number: {plane.sideNumber}</Container>
                </Col>
                <Col>
                    <Container className='mr-2 mt-3' style={{ textAlign: 'right' }}>
                        <Button onClick={() => remove(plane)} variant='danger'>Deny</Button>
                    </Container>
                </Col>
            </Row>

        </Container>
    )
}

export default PlaneItem