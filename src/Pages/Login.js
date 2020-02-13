import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../Redux/userActions';

import '../CSS/login.css'

const Login = ({ history }) => {

  const dispatch = useDispatch();

  const [loginForm, setLoginForm] = useState({
    userName: '',
    password: ''
  });

  const handleChange = typing => setLoginForm({...loginForm, [typing.target.name]: typing.target.value});

  const handleSubmit = (submission) => {
    submission.preventDefault();
    dispatch(actions.loginUser(loginForm))
    history.push('/profile');
  };

  const {userName, password} = loginForm

  return (
    <div className='loginField'>
      <div className='loginBg'></div>
      <form className='loginForm' onSubmit={handleSubmit}>

        <h1>Login</h1>

        <input  className='textFields'
          type='text'
          name='userName'
          value={userName}
          onChange={handleChange}
          placeholder='Username'
          />

        <br />

        <input className='textFields'
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          placeholder='password'
          />

        <br />

        <input type='submit' className='submit' />

      </form>

    </div>
  );
};

export default Login;
