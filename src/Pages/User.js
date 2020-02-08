import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../Redux/userActions'
import quizActions from '../Redux/QuizActions'

export default ({ history }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.userProfile())
    dispatch(quizActions.getQuizzes())
  }, [])

// Selector hook to grab redux state in user compionent
  const userObj = useSelector(state => state)

// If the state contains an error message instead of the user object, throw the user back to the homepage to login
  useEffect(() => { if (userObj.message) {history.push('/')} }, [userObj])

// Set a userData variable that will contain user object info. This is a hack until i figure out how to properly deal with the async calls
  let userData = {attributes:''};
  if (userObj.user) {
    userData = userObj.user.data
  };

  let quizList = [];
  if (userObj.quizzes) {
    quizList = userObj.quizzes.data
  };

  const renderQuizzes = list => (
    <ul className='quizList'>
      {list.map( quiz => (<li>{quiz.attributes.name}, a quiz about {quiz.attributes.topic}. You scored {quiz.attributes.score ? quiz.attributes.score : 'NOTHING'}</li>))}
    </ul>
  )

  // console.log();
  // debugger
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
            {renderQuizzes(quizList)}
          </ul>
        </h3>
      </div>
    </div>
  )
}
