import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import Register from './components/register/Register';
import Signin from './components/signin/signIn';



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="signin" element={<Signin />}/>
      <Route path="register" element={<Register />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
  );