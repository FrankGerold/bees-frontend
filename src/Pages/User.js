import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../Redux/userActions'

export default ({ history }) => {

  const dispatch = useDispatch();

  const user = useSelector(state => state);

  useEffect(() => {
    dispatch(actions.userProfile())    
  })


  // debugger

  return(
    {user}
  )

}
