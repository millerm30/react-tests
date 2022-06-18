import React, {useState} from 'react';
import {Container} from '../container/Container';

const Valuechange = () => {
  const [value, setValue] = useState(''); 
  return (
    <Container title="Button disabled until the value on input" description="Make button disabled when there is no character on the input field. Enable the button when there is atleast one character.">
      <input
        type="text"
        placeholder='Please Enter Text...'
        className='border-2 border-gray-600 py-2 px-1 rounded-lg text-lg my-5 w-1/2'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        >
        </input>
        <div className="text-center">
          <button
            disabled={value.length === 0}
            className="w-full m-auto bg-blue-400 border-2 border-blue-500 py-2 px-4 rounded-lg mt-10 hover:bg-blue-500 sm:w-1/2"
          >
            Click Me
          </button>
        </div>
    </Container>
  )
}

export default Valuechange