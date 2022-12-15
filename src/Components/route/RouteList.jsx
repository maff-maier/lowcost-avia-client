import React from 'react'
import { Container } from 'react-bootstrap'
import RouteItem from './RouteItem'

const RouteList = ({ routes, remove, edit}) => {


    return (
        <Container>
            <Container className='mt-3' style={{ textAlign: 'center' }}><h1>Routes</h1></Container>
            {routes.map(rt => {
                return <RouteItem remove={remove} route={rt} key={rt.id} edit={edit}/>
            })}
        </Container>
    )
}

export default RouteList