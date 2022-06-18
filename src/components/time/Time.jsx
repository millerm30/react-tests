import React, {useState, useEffect} from 'react';
import { Container } from '../container/Container';

const Time = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const month = new Date().toLocaleString('default', { month: 'long' });
  const day = new Date().toLocaleString('default', { weekday: 'long' });
  const date = new Date().toLocaleString('default', { day: 'numeric' });
  const year = new Date().toLocaleString('default', { year: 'numeric' });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <Container title='Time Interval Change' description='Display curent local date and time with time change on 1 second interval'>
      <div className='text-center text-4xl font-semibold'>
        <h2 className="text-center mt-5 text-2xl>">{day} {month} {date}, {year}</h2>
        <h2 className="text-center mt-5 text-2xl>">{time}</h2>
      </div>
    </Container>
  )
}

export default Time