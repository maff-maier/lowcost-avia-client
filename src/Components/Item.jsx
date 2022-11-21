import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import '../style/Item.css'

const Item = (props) => {

    return (
        <Container className="mt-3  item">
            <Container>
                <Row>
                    <Col>
                        <Container>
                            <strong>From --- To</strong>
                        </Container>
                        <Container>
                            Id: {props.num.id}
                            Number: {props.num.number}
                        </Container>
                    </Col>
                    <Col>
                        <Container style={{textAlign:'right', justifyContent: 'space-between'}}>
                            <Button variant='dark' style={{width: '100px'}}>Reserve</Button>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Item;