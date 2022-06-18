import React, {useState} from 'react';
import {Container} from '../container/Container';

const MyCounter = () => {
  const [count, setCount] = useState(0);
  function handleCount() {
    setCount(count +1);
    }
    return (
        <button className='bg-blue-400 border-2 border-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500' onClick={handleCount}>Clicked {count} times</button>
    )
}

const MyButton = () => {
    function handleClick() {
        alert('You cliked the button!')
    }
    return (
        <button className='bg-blue-400 border-2 border-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500' onClick={handleClick}>Click Here</button>
    )
}

const products = [
    {title: 'Cabbage', id: 1, isFruit: false},
    {title: 'Apple', id: 2, isFruit: true},
    {title: 'Garlic', id: 3, isFruit: false},
];

const listItems = products.map(product =>
    <li key={product.id} style={{color: product.isFruit ? 'magenta': 'darkgreen'}}>
        {product.title}
    </li>
    );

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const Testing = () => {
  return (
    <Container >
      <div className="header text-center">
        <MyButton />
      </div>
      <div className='person flex flex-col justify-center items-center'>
        <h2 className='mt-10'>{user.name}</h2>
        <img src={user.imageUrl} alt={'Photo of' + user.name} style={{width: user.imageSize, height: user.imageSize}} className='avatar mb-5'/>
      </div>
      <div className='products'>
        <ul className='list-disc'>
          {listItems}
        </ul>
      </div>
      <div className='counter text-center'>
        <MyCounter />
      </div>
    </Container>
  );
}

export default Testing