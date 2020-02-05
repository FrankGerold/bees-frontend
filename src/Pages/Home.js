import React from 'react';
import {useSelector} from 'react-redux';

const Home = () => {

const error = useSelector( s => {if (s.message){return s.message}})

return (
  <div>
    <h1>Home</h1>
    <span>{error}</span>
  </div>
)};

export default Home;
