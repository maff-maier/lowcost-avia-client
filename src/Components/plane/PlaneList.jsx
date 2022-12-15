import React from 'react'
import { Container } from 'react-bootstrap'
import PlaneItem from './PlaneItem'

const UserList = ({ planes, remove}) => {


    return (
        <Container>
            <Container className='mt-3' style={{ textAlign: 'center' }}><h1>Planes</h1></Container>
            {planes.map(pl => {
                return <PlaneItem remove={remove} plane={pl} key={pl.id}/>
            })}
        </Container>
    )
}

export default UserList