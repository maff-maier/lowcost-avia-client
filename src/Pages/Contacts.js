import React, { Component, Link } from 'react'
import { Container, ListGroup, Form, Row, Col } from 'react-bootstrap';

export default class Contacts extends Component {
  render() {
    return (
      <Container>
        <Row>

          <Col className="mt-5">
            <Container className='mt-3' lg='4'>
              <ListGroup as='ul' active>
                <ListGroup.Item as='li' action style={{ cursor: 'pointer', textAlign: 'center' }}>
                  Contacts
                </ListGroup.Item>
                <ListGroup.Item as='li' action style={{ cursor: 'pointer', textAlign: 'center' }}>
                  Sponsors
                </ListGroup.Item>
                <ListGroup.Item as='li' action style={{ cursor: 'pointer', textAlign: 'center' }}>
                  About us
                </ListGroup.Item>
              </ListGroup>
            </Container>
          </Col>

          <Col >
            <Container className='mt-3' lg='6' style={{alignItem: 'flex'}}>
              Some onClick content
            </Container>
          </Col>
        </Row>


      </Container>
    );
  }
}