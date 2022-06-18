import React from 'react';
import {Container} from '../container/Container';
import mikePicture from '../../assets/profilephoto.png';

const User = (props) => {
  return (
    <h2 className='text-center mt-10 text-xl'>This is {props.firstName} {props.lastName}</h2>
  );
};

const Profile = () => {
  return (
    <img
    className='self-center mt-5 rounded-xl'
    src={mikePicture}
    alt='Mike Miller'
    width={100}
    height={100}
    />
  );
};

const Props = () => {
  const firstName = 'Mike';
  const lastName = 'Miller';

  return (
    <Container title='Props Testing' description='Props testing area'>
      <User firstName={firstName} lastName={lastName} />
      <Profile />
    </Container>
  )
}

export default Props