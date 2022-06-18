import React from 'react'
import {Container} from '../container/Container';
import {v4 as uuid} from 'uuid';

const Uniqueid = () => {
  const uniqueId = uuid();

  return (
    <Container title="Unique Id Key" description="Assign Unique Key Value">
      <p className='text-center mt-5'>{uniqueId}</p>
    </Container>
  )
}

export default Uniqueid