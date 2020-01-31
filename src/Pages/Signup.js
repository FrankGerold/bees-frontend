import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Actions from '../Redux/actions.js';

const Signup = ({history}) => {

  const dispatch = useDispatch();

  const {signupForm, setSignupForm} = useState({
    name: '',
    userName: '',
    password: '',
    bio:'',
    image:''
  })

  const handleChange = (typing) => {
    setSignupForm({
      ...signupForm,
      typing.target.name: typing.target.value
    })
  };

  const handleSubmit = (form) => {
    form.preventDefault();
    dispatch(Actions.newUser(signupForm));
    history.puch('/');
  };

  const {name, userName, password, bio, image} = signupForm;

  return (
    <form onSumbit={handleSubmit}>
      <input
        type='text'
        name='name'
        value={name}
        onChange={handleChange}
        placeholder='Name'
      />
      <input
        type='text'
        name='userName'
        value={userName}
        onChange={handleChange}
        placeholder='Username'
      />
      <input
        type='password'
        name='password'
        value={password}
        onChange={handleChange}
        placeholder='Password'
      />
      <input
        type='text'
        name='bio'
        value={bio}
        onChange={handleChange}
        placeholder='Bio'
      />
      <input
        type='text'
        name='image'
        value={image}
        onChange={handleChange}
        placeholder='Image URL'
      />
    </form>
  )
}

export default Signup;
