import React, {useState} from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const UserModal = ({ show, setShow, create }) => {
    const [user, setUser] = useState({ id: '', number: '', pass: '' })

    const addNew = (e) => {
        e.preventDefault()
        const User = {
            id: Date.now(),
            ...user
        }
        create(User)
        setUser({ id: '', number: '', pass: '' })
        setShow(false)
    }

    const handleClose = () => {
        setShow(false)
        setUser({ id: '', number: '', pass: '' })
    }

    return (
        <Modal show={show} onHide={handleClose} keyboard={false}>
            <Modal.Header closeButton>Add</Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Phone number (BY)</Form.Label>
                        <Form.Control
                            className="" 
                            type='text' 
                            placeholder='Enter number'
                            value={user.number}
                            onChange={e => setUser({...user, number: e.target.value})}></Form.Control>
                    </Form.Group>

                    <Form.Group className='mt-2'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            className="" 
                            type='password' 
                            placeholder='Enter password'
                            value={user.pass}
                            onChange={e => setUser({...user, pass: e.target.value})}></Form.Control>
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

export default UserModal