import React, {useState} from 'react'
import {Container} from '../container/Container'

const Inputshow = () => {
  const [value, setValue] = useState('');

  return (
    <Container title="Input Field Show Text on Type" description="User should be able to type in any characters on input and those characters should show in browser">
      <input
        type="text"
        placeholder='Please Enter Text...'
        className='border-2 border-gray-600 py-2 px-1 rounded-lg text-lg my-5 w-1/2'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        >
        </input>
        <p className='text-[red] text-lg text-center'>{value}</p>
    </Container>
  )
};

export default Inputshow