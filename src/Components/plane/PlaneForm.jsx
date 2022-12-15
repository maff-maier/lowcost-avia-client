import React, {useState} from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const PlaneForm = ({create}) => {
    const [planes, setPlane] = useState({ id: '', model: '', sideNumber: ''})

    const addNew = (e) => {
        e.preventDefault()
        const Plane = {
            id: Date.now(),
            ...planes
        }
        create(Plane)
        setPlane({ id: '', model: '', sideNumber: ''})
      }
 
    return (
        <Form>
            <Form.Group className='mt-3 mb-2'>
                <Form.Label>Plane model</Form.Label>
                <Form.Control
                    value={planes.model}
                    type='text'
                    placeholder='Enter number'
                    onChange={(e) => setUser({ ...planes, model: e.target.value })} />
            </Form.Group>
            <Form.Group className='mb-2'>
                <Form.Label>Side number</Form.Label>
                <Form.Control
                    value={planes.sideNumber}
                    type='password'
                    placeholder='Enter password'
                    onChange={(e) => setUser({ ...planes, sideNumber: e.target.value })} />
            </Form.Group>
            <Container style={{ textAlign: 'center' }}><Button onClick={addNew}>Add</Button></Container>

        </Form>
    )
}

export default PlaneForm