import React, {useState} from 'react';
import './Modal.css';
import { Container } from '../container/Container';

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  };

  return (
    <Container title='Modal Test' description='On button click user should see popup overlay showing overlay page with information'>
      <button className='bg-blue-400 border-2 border-blue-500 py-2 px-4 rounded-lg m-auto mt-10 hover:bg-blue-500'
      onClick={() => setModal(true)}
      >
        Click Here
      </button>
      {modal && (
        <div className="Modal">
          <div onClick={toggleModal} className="Overlay">
            <div className="ModalContent">
              <h2 className='text-center text-2xl'>Michael Miller</h2>
              <button className='bg-blue-400 border-2 border-blue-500 py-2 px-4 rounded-lg mt-10 hover:bg-blue-500' onClick={toggleModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </Container>
  )
}

export default Modal