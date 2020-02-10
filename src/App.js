import React from 'react';
import './App.css';

import Routes from './Routes';
import Nav from './Components/Nav';
import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
