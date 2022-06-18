import React, {useState} from 'react';
import {Container} from '../container/Container';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Container title="Button Counter" description="Pressing the Increment button should increase the counter by one while pressing the Decrement button should reduce the number by one.">
      <div className="flex justify-center my-5">
        <button
          className="border-2 border-blue-500 py-4 px-6 rounded-lg mr-5"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <h2 className='text-2xl self-center'>{count}</h2>
        <button
          className="border-2 border-blue-500 py-4 px-6 rounded-lg ml-5"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </Container>
  )
}

export default Counter