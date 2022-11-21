import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import Item from '../Components/Item'

const Search = (props) => {

  return (
    <Container className='mt-4'>

      <Container>
        <Form className='d-flex'>
          <Form.Control
            type='search'
            placeholder='from'
            className='me-2'
            aria-label='Search' />

          <Button variant='outline-dark'>Search</Button>
        </Form>
      </Container>

      {/* <Container className='mt-5 mb-5'>
        {props.numbers.map((num, index) => {
          return (
            <Container key={index}>
              Name: {props.num.num}
              Id: {props.num.id}

            </Container>
          )
        })}
      </Container> */}
    </Container>
  )
}

export default Search;
