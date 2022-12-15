import React from 'react'
import { Container } from 'react-bootstrap'
import UserItem from './UserItem'

const UserList = ({ users, remove}) => {


    return (
        <Container>
            <Container className='mt-3' style={{ textAlign: 'center' }}><h1>Users</h1></Container>
            {users.map(us => {
                return <UserItem remove={remove} user={us} key={us.id}/>
            })}
        </Container>
    )
}

export default UserList