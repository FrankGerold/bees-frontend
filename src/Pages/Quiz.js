import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../Redux/userActions'
import quizActions from '../Redux/QuizActions'

import '../CSS/quiz.css'


export default ({ history }) => {

// Use redux dispatcher
  const dispatch = useDispatch();

// On render, create a new quiz and save it to state
  useEffect(() => {
    dispatch(quizActions.createQuiz());
  }, []);

  // If the state contains an error message instead of the user object, throw the user back to the homepage to login
    const errorMessage = useSelector(s=>{if(s.quiz){return s.quiz.message}});

    useEffect(() => { if (errorMessage) {history.push('/')} }, [errorMessage]);

// State variables for setting quiz name and score
  const [quizName, setQuizName] = useState('');
  const [score, setScore] = useState({
    question: 0,
    numberCorrect: 0,
  });
  // const [questions, setQuestions] = useState([]);

// Display answer result popup
  const [answerResult, setAnswerResult] = useState('')

// Grab quiz from state and store locally
  const quiz = useSelector(s => {if (s.quiz){return s.quiz}else{return {}}});
// Grab questions from current local quiz
  const questions = quiz.included;


  const renderQuestion = (questionIndex) => {
    if (questions) {
      const questionObj = questions[questionIndex].attributes;
      const currentQuestion = questionObj.question;
      const currentAnswer = questionObj.full_answer;
      const answers = questionObj.answers;


      return (
        <div className='questionRender'>
          <p className='question'>{currentQuestion}</p>
          <span className='result'>{answerResult}</span>
          <p className='fullAnswer'>{answerResult?currentAnswer:''}</p>
          {answerResult?<button className='nextButton' onClick={()=>(nextQuestion())}>Next Question</button>:''}
          {renderAnswers(answers)}
        </div>
      )
    }
  }

  const renderAnswers = (answers) => {
    return (
      <ul className='answers'>
        {answers.map(ans => <li className='answer' key={ans.id} onClick={()=>answerChoice(ans)}>{ans.text}</li>)}
      </ul>
    )
  }

  const answerChoice = (answer) => {
    if (!answerResult) {
      if (answer.correct) {
      setAnswerResult('Correct!')
    } else {
      setAnswerResult('Wrong!')
      }
    }
  }


  const nextQuestion = () => {
    // end quiz on last question, has to also check if last answer was correct or not. not DRY, gonna refactor
    if (score.question === questions.length-1) {
      if (answerResult === 'Correct!') {
        setScore({
          ...score,
          numberCorrect: score.numberCorrect += 1
        })}
      displayResults(score)
    }
    else if (answerResult === 'Correct!') {
      setScore({
        ...score,
        question: score.question += 1,
        numberCorrect: score.numberCorrect += 1
      });
    }
    else if (answerResult === 'Wrong!') {
      setScore({
        ...score,
        question: score.question += 1
      });
    };
    setAnswerResult('');
  }

  const displayResults = () => {
    dispatch(quizActions.quizResult(score))
    history.push('/result')
  }

  return (
    <div className='quiz'>
      <div className='quizQuestion'>{renderQuestion(score.question)}</div>
      <div className='quizBg'></div>
    </div>
  )
}
