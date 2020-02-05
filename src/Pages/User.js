import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../Redux/userActions'

export default ({ history }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.userProfile())
  }, [])

  const userObj = useSelector(state => state)
    // {if (state.user) {return state.user.data}})

  if (userObj.message) {
    history.push('/')
  }

  console.log('user', userObj);

  return(
    <div className='userProfile'>
      <h1>hi</h1>
    </div>
  )

}
