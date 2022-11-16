import React from 'react'
import { Container, Row, Col, Tab, Nav, Image } from 'react-bootstrap';
import '../style/Contacts.css'
import spotify from '../img/spotify-logo.png'
import phone from '../img/phone.png'

const Contacts = () => {

  //const [title, setTitle] = useState('Contacts')


  return (
    <Container style={{ alignContent: 'center', marginTop: '100px' }}>
      <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
        <Row>
          <Col sm='4'>
            <Nav className="flex-column mt-4 main-navigation">
              <Nav.Item>
                <Nav.Link eventKey="first">Terms of Use</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Sponsors</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Contacts</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm='8' >
            <Tab.Content style={{ textAlign: 'center' }}>
              <Tab.Pane eventKey="first">
                <img
                  src="https://www.michalsons.com/wp-content/uploads/2014/03/free-website-terms-1-e1518416121438.jpg"
                  style={{ width: '800px' }} />
              </Tab.Pane>
              <Tab.Pane eventKey="second" style={{ justifyContent: 'center' }}>
                <Container className='mt-3'><span><strong>My mental health</strong></span></Container>
                <Container className='mt-3'><span>Some of my dudes</span></Container>
                <Container className='mt-3'><a href="https://open.spotify.com/"><img
                  src={spotify}
                  alt='Spotify'
                  style={{ width: '70px' }}
                /></a></Container>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Container>
                  <h2><a href='tel: 88005553535' style={{ textDecoration: 'none', color: '#343a40' }}>
                    <img src={phone} style={{ width: '30px' }} />
                    <small>&#x20;&#x20;&#x20;8-800-555-35-35</small>
                  </a>  </h2>
                </Container>
                <Container><h2><a
                  href="https://telegram.org/"
                  style={{ textDecoration: 'none', color: '#343a40' }}
                  target="_blank">Telegram</a></h2></Container>
                <Container><h2><a
                  href="https://instagram.com"
                  style={{ textDecoration: 'none', color: '#343a40' }}
                  targer="_blank">Instagram</a></h2></Container>
                <Container><h2><a
                  href='https://twitter.com/'
                  style={{ textDecoration: 'none', color: '#343a40' }}
                  targer="_blank">Twitter</a></h2></Container>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>

      </Tab.Container>

    </Container>
  );
}

export default Contacts;