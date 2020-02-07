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

  useEffect(() => { if (userObj.message) {history.push('/')} }, [userObj])

  console.log('user', userObj);

  let userData = {attributes:''};
  if (userObj.user){userData = userObj.user.data}

  console.log('data', userData)

  const quizList = (quizObj) => {
    for (let quiz in quizObj) {

    }
  }


  return(
    <div className='userProfile'>
      <div className='bio'>
        <h1>{userData.attributes.name}</h1>
        <h3>{userData.attributes.bio}</h3>
      </div>
      <div className='userQuizzes'>
        <h2>Quizzes:</h2>
        <h3>
          <ul>
            <li>We out here</li>
          </ul>
        </h3>
      </div>
    </div>
  )

}
