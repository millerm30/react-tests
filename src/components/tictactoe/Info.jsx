import React from 'react';

const Info = () => {
  return (
    <div className='info flex justify-evenly items-center'>
      <div className='player border-2 border-[#f6546a] rounded py-1 px-2 flex justify-center items-center text-xl'>Player 1: X</div>
      <div className='player border-2 border-[#f6546a] rounded py-1 px-2 flex justify-center items-center text-xl'>Player 2: O</div>
    </div>
  )
}

export default Info