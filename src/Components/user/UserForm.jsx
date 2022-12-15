import React, {useState} from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const UserForm = ({create}) => {
    const [user, setUser] = useState({ id: '', number: '', pass: '' })

    const addNew = (e) => {
        e.preventDefault()
        const User = {
            id: Date.now(),
            ...user
        }
        create(User)
        setUser({ id: '', number: '', pass: '' })
      }
 
    return (
        <Form>
            <Form.Group className='mt-3 mb-2'>
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                    value={user.number}
                    type='text'
                    placeholder='Enter number'
                    onChange={(e) => setUser({ ...user, number: e.target.value })} />
            </Form.Group>
            <Form.Group className='mb-2'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    value={user.pass}
                    type='password'
                    placeholder='Enter password'
                    onChange={(e) => setUser({ ...user, pass: e.target.value })} />
            </Form.Group>
            <Container style={{ textAlign: 'center' }}><Button onClick={addNew}>Add</Button></Container>

        </Form>
    )
}

export default UserForm