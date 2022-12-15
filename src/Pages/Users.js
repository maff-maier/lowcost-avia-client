import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from '../Components/user/UserList'
import UserModal from "../Components/UI/UserModal";
import { Button, Container } from "react-bootstrap";
import axios from "axios";


function Users() {
  const [show, setShow] = useState(false)
  const [users, setUsers] = useState([])


  const remove = async (user) => {
    const link = 'http://localhost:8080/users/delete?id=' + user.id
    const response = await axios.delete(link)

    if (response.status === 200) {

      setUsers(users.filter(us => user.id !== us.id))
    }
  }

  const addNew = async (user) => {
    const response = await axios.post('http://localhost:8080/users', user)
    setUsers([...users, response.data])
  }

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get('http://localhost:8080/users/getAll')
      setUsers(response.data)
    }

    fetch()
  }, [])

  return (
    <div>
      <Container className='mt-3' style={{ textAlign: 'center' }}>
        <Button onClick={() => setShow(true)}>Add</Button>
      </Container>

      <UserModal create={addNew} setShow={setShow} show={show} />

      {users.length !== 0
        ? <Container className='mb-3'><UserList users={users} remove={remove} /></Container>
        : <Container className="mt-3" style={{ textAlign: 'center' }}><h1>No users here</h1></Container>}

    </div>
  );
}

export default Users;