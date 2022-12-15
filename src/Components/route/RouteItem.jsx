import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import '/Jv/lowcost_avia/frontend/src/style/Item.css'

const RouteItem = ({ route, remove }) => {

    return (
        <Container className='mt-3 item'>
            <Row>
                <Col className="mt-3">
                    <Container style={{ display: 'flex' }}><h3>{route.departure} --- {route.arrival}</h3></Container>
                    <Container>Cost: {route.routeCost}; Quantity: {route.qtyCount}</Container>
                </Col>
                <Col>

                    <Container className='mr-2 mt-4' style={{ textAlign: 'right' }}>
                        <Button onClick={() => remove(route)} variant='danger'>Deny</Button>
                    </Container>
                </Col>
            </Row>

        </Container>
    )
}

export default RouteItem