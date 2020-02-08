import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {

const error = useSelector( s => {if (s.message){return s.message}})

return (
  <div>
    <h1>Home</h1>
    <span>{error}</span>

    <h2><Link to='/quiz'>Take Quiz!</Link></h2>
  </div>

)};

export default Home;
