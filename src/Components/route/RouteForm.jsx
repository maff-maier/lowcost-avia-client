import React, {useState} from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const RouteForm = ({create}) => {
    const [route, setRoute] = useState({ id: '', departure: '', arrival: '', routeCost: '', qtyCount: ''})

    const addNew = (e) => {
        e.preventDefault()
        const Route = {
            id: Date.now(),
            ...route
        }
        create(Route)
        setRoute({ id: '', departure: '', arrival: '', routeCost: '', qtyCount: ''})
      }
 
    return (
        <Form>
            <Form.Group className='mt-3 mb-2'>
                <Form.Label>From</Form.Label>
                <Form.Control
                    value={route.departure}
                    type='text'
                    placeholder='Enter departure'
                    onChange={(e) => setRoute({ ...route, departure: e.target.value })} />
            </Form.Group>
            <Form.Group className='mb-2'>
                <Form.Label>To</Form.Label>
                <Form.Control
                    value={route.arrival}
                    type='text'
                    placeholder='Enter arrival'
                    onChange={(e) => setRoute({ ...route, arrival: e.target.value })} />
            </Form.Group>
            <Container style={{ textAlign: 'center' }}><Button onClick={addNew}>Add</Button></Container>

        </Form>
    )
}

export default RouteForm