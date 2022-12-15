import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PlaneList from '../Components/plane/PlaneList'
import PlaneModal from "../Components/UI/PlaneModal";
import { Button, Container } from "react-bootstrap";
import axios from "axios";


function Planes() {
  const [show, setShow] = useState(false)
  const [planes, setPlanes] = useState([])

  const remove = async (plane) => {
    const link = 'http://localhost:8080/planes/delete?id=' + plane.id
    const response = await axios.delete(link)

    if (response.status === 200) {
      setPlanes(planes.filter(pl => plane.id !== pl.id))
    }
  }


  const addNew = async (plane) => {
    const response = await axios.post('http://localhost:8080/planes', plane)
    setPlanes([...planes, response.data])
  }

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get('http://localhost:8080/planes/getAll')
      setPlanes(response.data)
      console.log(response.data)
    }

    fetch()
  }, [])

  return (
    <div>
      <Container className='mt-3' style={{ textAlign: 'center' }}>
        <Button onClick={() => setShow(true)}>Add</Button>
      </Container>

      <PlaneModal create={addNew} setShow={setShow} show={show} />

      {planes.length !== 0
        ? <Container className='mb-3'><PlaneList planes={planes} remove={remove}/></Container>
        : <Container className="mt-3" style={{ textAlign: 'center' }}><h1>No planes here</h1></Container>}

    </div>
  );
}

export default Planes;