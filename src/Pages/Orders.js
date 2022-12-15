import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderList from '../Components/order/OrderList'
import OrderModal from "../Components/UI/OrderModal";
import { Button, Container } from "react-bootstrap";
import axios from "axios";


function Orders() {
  const [show, setShow] = useState(false)
  const [orders, setOrders] = useState([])

  const remove = async (order) => {
    const link = 'http://localhost:8080/orders/delete?id=' + order.id
    const response = await axios.delete(link)

    if (response.status === 200) {

      setOrders(orders.filter(or => order.id !== or.id))
    }
  }

  const addNew = async (order) => {
    const link = 'http://localhost:8080/orders?id=' + order.userId + '&routeId=' + order.routeId 
    const response = await axios.post(link, 
      {
        baggage: order.baggage,
        timestamp: order.timestamp.toString(),
        orderCost: order.orderCost
      })
    setOrders([...orders, response.data])
  }

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get('http://localhost:8080/orders/getAll')
      setOrders(response.data)
    }

    fetch()
  }, [])

  return (
    <div>
      <Container className='mt-3' style={{ textAlign: 'center' }}>
        <Button onClick={() => setShow(true)}>Add</Button>
      </Container>

      <OrderModal create={addNew} setShow={setShow} show={show} />

      {orders.length !== 0
        ? <Container className='mb-3'><OrderList orders={orders} remove={remove} /></Container>
        : <Container className="mt-3" style={{ textAlign: 'center' }}><h1>No orders here</h1></Container>}

    </div>
  );
}

export default Orders;