import React, {useState} from 'react';
import {Container} from '../container/Container';

const Showhide = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <Container title="Button Click to Show and Hide an Element" description="User should be able to click on a button to show and hide an element">
      <button
        onClick={handleClick}
        className="w-full m-auto bg-blue-400 border-2 border-blue-500 py-2 px-4 rounded-lg mt-10 hover:bg-blue-500 lg:w-1/4"
      >
        {show ? 'Hide' : 'Show'}
      </button>
      {show && <p className="text-center mt-10">This is a hidden element!</p>}
    </Container>
  );
}

export default Showhide