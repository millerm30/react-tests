import React, {useState, useEffect} from 'react';
import {Container} from '../container/Container';

const Useeffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <Container title="useEffect" description="Change page title to count clicks on button click">
      <button className='bg-blue-400 border-2 border-blue-500 py-2 px-4 rounded-lg m-auto hover:bg-blue-500 mt-10'
      onClick={() => setCount(count + 1)}
      >
        Click Me
      </button>
    </Container>
  )
}

export default Useeffect