import React, {useState} from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const RouteModal = ({ show, setShow, create }) => {
    const [route, setRoute] = useState({ id: '', departure: '', arrival: '', routeCost: '', qtyCount: '', timestamp: Date.now()})

    const addNew = (e) => {
        e.preventDefault()
        const User = {
            id: Date.now(),
            ...route
        }
        create(User)
        setRoute({ id: '', departure: '', arrival: '', routeCost: '', qtyCount: '', timestamp: Date.now()})
        setShow(false)
    }

    const handleClose = () => {
        setShow(false)
        setRoute({ id: '', departure: '', arrival: '', routeCost: '', qtyCount: '', timestamp: Date.now()})
    }

    return (
        <Modal show={show} onHide={handleClose} keyboard={false}>
            <Modal.Header closeButton>Add</Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Route departure</Form.Label>
                        <Form.Control
                            className="" 
                            type='text' 
                            placeholder='Enter departure'
                            value={route.departure}
                            onChange={e => setRoute({...route, departure: e.target.value})}></Form.Control>
                    </Form.Group>

                    <Form.Group className='mt-2'>
                        <Form.Label>Route arrival</Form.Label>
                        <Form.Control 
                            className="" 
                            type='text' 
                            placeholder='Enter arrival'
                            value={route.arrival}
                            onChange={e => setRoute({...route, arrival: e.target.value})}></Form.Control>
                    </Form.Group>

                    <Form.Group className='mt-2'>
                        <Form.Label>Route quantity</Form.Label>
                        <Form.Control 
                            className="" 
                            type='text' 
                            placeholder='Enter arrival'
                            value={route.qtyCount}
                            onChange={e => setRoute({...route, qtyCount: e.target.value})}></Form.Control>
                    </Form.Group>

                    <Form.Group className='mt-2'>
                        <Form.Label>Route cost</Form.Label>
                        <Form.Control 
                            className="" 
                            type='text' 
                            placeholder='Enter cost'
                            value={route.routeCost}
                            onChange={e => setRoute({...route, routeCost: e.target.value})}></Form.Control>
                    </Form.Group>

                    <Form.Group className='mt-2'>
                        <Form.Label>Plane id</Form.Label>
                        <Form.Control 
                            className="" 
                            type='text' 
                            placeholder='Enter cost'
                            value={route.planeId}
                            onChange={e => setRoute({...route, planeId: e.target.value})}></Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='dark' onClick={addNew}>Submit</Button>
                <Button variant='secondary' onClick={handleClose}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RouteModal