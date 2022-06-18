import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header/Header';
import Think from './components/think/Think';
import Testing from './components/testing/Testing';
import Users from './components/users/Users';
import Showhide from './components/showhide/Showhide';
import Inputshow from './components/inputshow/Inputshow';
import Valuechange from './components/valuechange/Valuechange';
import Counter from './components/counter/Counter';
import Userdata from './components/userdata/Userdata';
import Addnumbers from './components/addnumbers/Addnumbers';
import Time from './components/time/Time';
import Modal from './components/modal/Modal';
import Uniqueid from './components/uniqueid/Uniqueid';
import Tailwindcss from './components/tailwindcss/Tailwindcss';
import Useeffect from './components/useeffect/Useeffect';
import Props from './components/props/Props';
import Tictactoe from './components/tictactoe/Tictactoe';
import Userprofile from './components/userprofile/Userprofile';
import Footer from './components/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Think />
    <Testing />
    <Users />
    <Showhide />
    <Inputshow />
    <Valuechange />
    <Counter />
    <Userdata />
    <Addnumbers />
    <Time />
    <Modal />
    <Uniqueid />
    <Tailwindcss />
    <Useeffect />
    <Props />
    <Tictactoe />
    <Userprofile />
    <Footer />
  </React.StrictMode>
);