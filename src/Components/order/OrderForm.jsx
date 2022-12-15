import React, {useState} from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const OrderForm = ({create}) => {
    const [order, setOrder] = useState({ id: '', orderCost: '', baggage: '' })

    const addNew = (e) => {
        e.preventDefault()
        const Order = {
            id: Date.now(),
            ...order
        }
        create(Order)
        setOrder({ id: '', orderCost: '', baggage: '' })
      }
 
    return (
        <Form>
            <Form.Group className='mt-3 mb-2'>
                <Form.Label>Order cost</Form.Label>
                <Form.Control
                    value={order.orderCost}
                    type='text'
                    placeholder='Enter order cost'
                    onChange={(e) => setOrder({ ...order, orderCost: e.target.value })} />
            </Form.Group>
            <Form.Group className='mb-2'>
                <Form.Label>Baggage</Form.Label>
                <Form.Control
                    value={order.baggage}
                    type='text'
                    placeholder='Enter baggage'
                    onChange={(e) => setOrder({ ...order, baggage: e.target.value })} />
            </Form.Group>
            <Container style={{ textAlign: 'center' }}><Button onClick={addNew}>Add</Button></Container>

        </Form>
    )
}

export default OrderForm