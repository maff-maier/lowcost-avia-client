import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import RouteList from '../Components/route/RouteList'
import RouteModal from "../Components/UI/RouteModal";
import { Button, Container } from "react-bootstrap";
import axios from "axios";


function Routs() {
  const [show, setShow] = useState(false)
  const [routes, setRoutes] = useState([])


  const remove = async (route) => {
    const link = 'http://localhost:8080/routes/delete?id=' + route.id
    const response = await axios.delete(link)

    if (response.status === 200) {
      setRoutes(routes.filter(rt => route.id !== rt.id))
    }
  }

  const addNew = async (route) => {
    const link = 'http://localhost:8080/routes?planeId=' + route.planeId
    const response = await axios.post(link, 
      {
        departure: route.departure,
        arrival: route.arrival,
        routeCost: route.routeCost,
        timestamp: route.timestamp.toString(),
        qtyCount: route.qtyCount
      })
    setRoutes([...routes, response.data])
  }

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get('http://localhost:8080/routes/getAll')
      setRoutes(response.data)
      console.log(response.data)
    }

    fetch()
  }, [])

  return (
    <div>
      <Container className='mt-3' style={{ textAlign: 'center' }}>
        <Button onClick={() => setShow(true)}>Add</Button>
      </Container>

      <RouteModal create={addNew} setShow={setShow} show={show} />

      {routes.length !== 0
        ? <Container className='mb-3'><RouteList routes={routes} remove={remove} /></Container>
        : <Container className="mt-3" style={{ textAlign: 'center' }}><h1>No routes here</h1></Container>}

    </div>
  );
}

export default Routs;