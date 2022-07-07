import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './components/auth/Login';
import Layout from './components/layout/Layout';


const root = ReactDOM.createRoot(document.getElementById('root'));
const isLoggedIn = false;

isLoggedIn ? root.render(<Layout isLoggedIn={isLoggedIn} />) : root.render(<Login />);

