import React, {useState} from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const PlaneModal = ({ show, setShow, create }) => {
    const [planes, setPlane] = useState({ id: '', model: '', sideNumber: ''})

    const addNew = (e) => {
        e.preventDefault()
        const Plane = {
            id: Date.now(),
            ...planes
        }
        create(Plane)
        setPlane({ id: '', model: '', sideNumber: ''})
        setShow(false)
    }

    const handleClose = () => {
        setShow(false)
        setPlane({ id: '', model: '', sideNumber: ''})
    }

    return (
        <Modal show={show} onHide={handleClose} keyboard={false}>
            <Modal.Header closeButton>Add</Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Plane model</Form.Label>
                        <Form.Control
                            className="" 
                            type='text' 
                            placeholder='Enter model'
                            value={planes.model}
                            onChange={e => setPlane({...planes, model: e.target.value})}></Form.Control>
                    </Form.Group>

                    <Form.Group className='mt-2'>
                        <Form.Label>Side plane number</Form.Label>
                        <Form.Control 
                            className="" 
                            type='text' 
                            placeholder='Enter side number'
                            value={planes.sideNumber}
                            onChange={e => setPlane({...planes, sideNumber: e.target.value})}></Form.Control>
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

export default PlaneModal