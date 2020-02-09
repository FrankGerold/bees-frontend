import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../Redux/userActions'
import quizActions from '../Redux/QuizActions'


export default ({ history }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(quizActions.createQuiz())
  }, [])

  const quiz = useSelector(s => {if (s.quiz){return s.quiz}else{return []}})


  console.log(quiz);
  return (
  <p>Lmao</p>
  )
}
