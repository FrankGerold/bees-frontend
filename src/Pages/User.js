import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../Redux/userActions'
import quizActions from '../Redux/QuizActions'

import '../CSS/profile.css'

export default ({ history }) => {

  const dispatch = useDispatch();

// Grab user info and list of their quizzes on mount
  useEffect(() => {
    dispatch(userActions.userProfile())
    dispatch(quizActions.getQuizzes())
  }, [])

// Selector hook to grab user data
  // const userObj = useSelector(state => state)
  const userData = useSelector(state => {if (state.user){return state.user.data}})

// If the state contains an error message instead of the user object, throw the user back to the homepage to login
  const errorMessage = useSelector(s=>{if(s.message){return s.message}});

  useEffect(() => { if (errorMessage) {history.push('/')} }, [errorMessage]);

// FIXED? - Set a userData variable that will contain user object info. This is a hack until i figure out how to properly deal with the async calls
  // let userData = {attributes:''};
  // if (userObj.user) {
  //   userData = userObj.user.data
  // };

// Set quiz list to variable
  // let quizList = [];
  // if (userObj.quizzes) {
  //   quizList = userObj.quizzes.data
  // };
  const quizList = useSelector(state=>{if(state.userQuizzes){return state.userQuizzes.data}})

  const renderQuizzes = list => {if (list) return (
    <ul className='quizList'>
      {list.map( quiz => (<li key={quiz.id}>{quiz.attributes.name}, a quiz about {quiz.attributes.topic}. You scored {quiz.attributes.score ? `${quiz.attributes.score}%` : 'NOTHING'}</li>))}
    </ul>
  )}

  const renderBio = user => {if(user) return(
    <div className='bio'>
      <h1>{user.attributes.name}</h1>
    <h3>{user.attributes.bio}</h3>
    </div>
  )}

  return(
    <div>
      <div className='profileBg'></div>
    <div className='userProfile'>
      {renderBio(userData)}
      <div className='userQuizzes'>
        <h2>Quizzes:</h2>
        <h3>
          <ul>
            {renderQuizzes(quizList)}
          </ul>
        </h3>
      </div>
    </div>
  </div>
  )
}
