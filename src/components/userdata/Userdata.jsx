import React, {useState, useEffect} from 'react';
import {Container} from '../container/Container';

const Userdata = () => {
  const [userData, setUserDate] = useState({});
  const url = 'https://jsonplaceholder.typicode.com/users/1';

  const getUserDate = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUserDate(data);
  };

  useEffect(() => {
    getUserDate();
  }
  , []);

  return (
    <Container title="User Data API Fetch with ASYNC" description="Given the URL: (https://jsonplaceholder.typicode.com/users/1) make this
      app fetch the data and display them in the browser.">
        <div>
          <p><strong>Name: </strong>{userData.name}</p>
          <p><strong>Username: </strong>{userData.username}</p>
          <p><strong>Email: </strong>{userData.email}</p>
          <p><strong>Phone: </strong>{userData.phone}</p>
          <p><strong>Website: </strong>{userData.website}</p>
        </div>
    </Container>
  )
}

export default Userdata