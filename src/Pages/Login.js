import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../Redux/userActions';

import Nav from '../Components/Nav';


const Login = ({ history }) => {

  const dispatch = useDispatch();

  const [loginForm, setLoginForm] = useState({
    userName: '',
    password: ''
  });

  const handleChange = typing => setLoginForm({...loginForm, [typing.target.name]: typing.target.value});

  const handleSubmit = (submission) => {
    submission.preventDefault();
    dispatch(actions.loginUser(loginForm));
    history.push('/');
  };

  const {userName, password} = loginForm

  return (
    <div className='loginField'>
      <form onSubmit={handleSubmit}>

        <h1>Login</h1>

        <input
          type='text'
          name='userName'
          value={userName}
          onChange={handleChange}
          placeholder='Username'
          />

        <br />

        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          placeholder='password'
          />

        <br />

        <input type='submit' />

      </form>

    </div>
  );
};

export default Login;
