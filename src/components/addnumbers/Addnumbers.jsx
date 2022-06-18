import React, {useState} from 'react';
import { Container } from '../container/Container';

const Addnumbers = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const addNumbers = () => {
    setResult(number1 + number2);
  };

  return (
    <Container title="Add Two Numbers"
      description="When user places numbers on first and second input and hits the calculate button, should show total on total line.">
        <div className="flex justify-center my-5">
          <input
            className="border-2 border-gray-600 py-2 px-1 rounded-lg text-lg my-5 w-1/2 mr-5"
            type="number"
            value={number1}
            onChange={(e) => setNumber1(+e.target.value)}
          />
          <input
            className="border-2 border-gray-600 py-2 px-1 rounded-lg text-lg my-5 w-1/2 mr-5"
            type="number"
            value={number2}
            onChange={(e) => setNumber2(+e.target.value)}
          />
          <button className="bg-blue-400 border-2 border-blue-500 py-2 px-4 rounded-lg h-1/2 my-auto hover:bg-blue-500" onClick={addNumbers}>Calculate</button>
        </div>
        <div className="text-center text-4xl font-semibold">{result}</div>
    </Container>
  )
}

export default Addnumbers