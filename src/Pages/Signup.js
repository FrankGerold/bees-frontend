import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../Redux/userActions';

import '../CSS/signup.css'

const Signup = ({ history }) => {

  const dispatch = useDispatch();

  const [ signupForm, setSignupForm ] = useState({
    name: '',
    userName: '',
    password: '',
    bio:'',
    image:''
  })

  const handleChange = (typing) => {
    setSignupForm({
      ...signupForm,
      [typing.target.name]: typing.target.value
    })
  };

  const handleSubmit = (form) => {
    form.preventDefault();
    dispatch(actions.newUser(signupForm));
    history.push('/');
  };

  const { name, userName, password, bio, image } = signupForm;

  return (
    <div className='signupField'>
      <div className='signupBg'></div>
      <form className='signupForm' onSubmit={ handleSubmit }>
        <h1>Sign Up!</h1>
        <br />
        <input className='textFields'
          type='text'
          name='name'
          value={ name }
          onChange={ handleChange }
          placeholder='Name'
        />
      <br />
        <input className='textFields'
          type='text'
          name='userName'
          value={ userName }
          onChange={ handleChange }
          placeholder='Username'
        />
      <br />
        <input className='textFields'
          type='password'
          name='password'
          value={ password }
          onChange={ handleChange }
          placeholder='Password'
        />
      <br />
        <input className='textFields'
          type='text'
          name='bio'
          value={ bio }
          onChange={ handleChange }
          placeholder='Bio'
        />
      <br />
        <input className='textFields'
          type='text'
          name='image'
          value={image}
          onChange={ handleChange }
          placeholder='Image URL'
        />
      <br />
      <input className='submit' type='submit' value='Sign Up' />
    </form>
  </div>
  )
}

export default Signup;
