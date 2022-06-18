import React from 'react'
import {Container} from '../container/Container'

const Tailwindcss = () => {
  return (
    <Container title="Tailwind Testing" description="This area used for tailwind testing area.">
      <div className="container grid grid-cols-3 gap-2 mt-5">
        <div className="box1 border-2 p-10 text-center">Box 1</div>
        <div className="box2 border-2 p-10 text-center">Box 2</div>
        <div className="box3 border-2 p-10 text-center">Box 3</div>
      </div>
    </Container>
  )
}

export default Tailwindcss