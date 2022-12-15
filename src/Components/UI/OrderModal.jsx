import React, {useState} from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const OrderModal = ({ show, setShow, create }) => {
    const [order, setOrder] = useState({ id: '', orderCost: '', baggage: '', timestamp: Date.now() })
    const truefalse = [true, false]

    const addNew = (e) => {
        e.preventDefault()
        const Order = {
            id: Date.now(),
            ...order
        }
        create(Order)
        setOrder({ id: '', orderCost: '', baggage: '', timestamp: Date.now() })
        setShow(false)
    }


    const handleClose = () => {
        setShow(false)
        setOrder({ id: '', orderCost: '', baggage: '', timestamp: Date.now() })
    }

    return (
        <Modal show={show} onHide={handleClose} keyboard={false}>
            <Modal.Header closeButton>Add</Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Order cost</Form.Label>
                        <Form.Control
                            className="" 
                            type='text' 
                            placeholder='Enter order cost'
                            value={order.orderCost}
                            onChange={e => setOrder({...order, orderCost: e.target.value})}></Form.Control>
                    </Form.Group>

                    <Form.Group className='mt-2'>
                        <Form.Label>Baggage</Form.Label>
                        <Form.Select 
                            className=""
                            placeholder='Keep empty or enter "no" if no baggage'
                            value={order.baggage}
                            defaultValue={true}
                            onChange={e => {setOrder({...order, baggage: e.target.value})}}>
                            {truefalse.map(tf => { return <option value={tf}>{tf.toString()}</option>})}</Form.Select>
                    </Form.Group>

                    <Form.Group className='mt-2'>
                        <Form.Label>User id</Form.Label>
                        <Form.Control 
                            className="" 
                            type='text' 
                            placeholder='Enter user id'
                            value={order.userId}
                            onChange={e => setOrder({...order, userId: e.target.value})}></Form.Control>
                    </Form.Group>

                    <Form.Group className='mt-2'>
                        <Form.Label>Route id</Form.Label>
                        <Form.Control 
                            className="" 
                            type='text' 
                            placeholder='Enter user id'
                            value={order.routeId}
                            onChange={e => setOrder({...order, routeId: e.target.value})}></Form.Control>
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

export default OrderModal