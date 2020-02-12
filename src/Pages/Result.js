import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../Redux/userActions'
import quizActions from '../Redux/QuizActions'


export default ({history}) => {
  const dispatch = useDispatch();
  const result = useSelector(s=>s.quizResult);
  const quizId = useSelector(s=>s.quiz.data.id)

  const [quizUpdate, setQuizUpdate] = useState({name:'', score: 0, id: 0})

  const setPercentScore = () => {
    if (result) {
      let pct = Math.round((result.numberCorrect/(result.question+1))*100);

      console.log(pct)
      return pct
    }
  }

  const percentScore = setPercentScore()

  useEffect(() => {
    setQuizUpdate({
      ...quizUpdate,
      score: percentScore
    })}, [percentScore]
  )

  const handleChange = nameInput => {
    setQuizUpdate({
      ...quizUpdate,
      [nameInput.target.name]: nameInput.target.value
    })
  };

  const handleSubmit = () => {

    let newName = quizUpdate.name;
    if (!newName) {
      newName=
    }
    let newScore = quizUpdate.score;


    dispatch(quizActions.finishedQuiz(quizUpdate.name, quizUpdate.score, quizId))

    history.push('/')
  }

  const {name, score, id} = quizUpdate;

  const renderResults = () => {
    return (
      <div className='resultArea'>
      <h2>Quiz Complete!</h2>
      <h2>You scored {percentScore}%!</h2>
        <h2><label >Name Your Quiz?</label>
          <input type='text' name='name' onChange={handleChange} value={name} placeholder='Quiz Name' />
          <input type='submit' value='Submit' onClick={handleSubmit} />
        </h2>
      </div>
    )
  }

  return (
    <div>{renderResults()}</div>
  )
}
