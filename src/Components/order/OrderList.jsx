import React from 'react'
import { Container } from 'react-bootstrap'
import OrderItem from './OrderItem'

const OrderList = ({ orders, remove }) => {


    return (
        <Container>
            <Container className='mt-3' style={{ textAlign: 'center' }}><h1>Orders</h1></Container>
            {orders.map(or => {
                return <OrderItem remove={remove} order={or} key={or.id}/>
            })}
        </Container>
    )
}

export default OrderList