import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import actions from '../Redux/userActions'

import '../CSS/nav.css'

const Nav = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(actions.logoutUser())
  }


  return (
    <nav id='navBar'>
      <Link to='/'>Home</Link>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/login'>Log In</Link>
      <Link to='/profile'>Profile</Link>
      <Link to ='/quiz'>New Quiz</Link>
      <Link to ='/' onClick={handleLogout}>Log Out</Link>
    </nav>
  );
}

export default Nav;
