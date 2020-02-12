const QUIZZES_URL = 'http://localhost:3000/quizzes'

const USER_QUIZZES = 'http://localhost:3000/userquizzes'

// Action to create a quiz for the current logged in user. Uses the Quiz Create route on rails api backend
const createQuiz = (topic='bees') => dispatch => {
  const config = {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${localStorage.token}`
    },
    body: JSON.stringify(
      {
        topic: topic,
      }
    )
  }
  fetch(QUIZZES_URL, config)
  .then(r=>r.json())
  .then(quiz => dispatch(newQuiz(quiz)))
}

// Action to grab a list of the user's quizzes
const getQuizzes = () => dispatch => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${localStorage.token}`
    }
  }
  fetch(USER_QUIZZES, config)
  .then(r=>r.json())
  .then(quizList => {
    dispatch(setQuizzes(quizList))
  })
}

// action to save quiz list to state
const setQuizzes = quizzes => ({
  type: 'SET_QUIZZES',
  payload: quizzes
})

// action to save a newly creted list to state
const newQuiz = (quiz) => ({
  type: 'NEW_QUIZ',
  payload: quiz
})

// After quiz is done, patch db record with name and final score. Quizzes > Update rails route
const finishedQuiz = (newName, newScore, id) => dispatch => {
  const config = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${localStorage.token}`
    },
    body: JSON.stringify({
      name: newName,
      score: newScore
    })
  }

  fetch(`${QUIZZES_URL}/${id}`, config)
  .then(r=>r.json())
  .then(finishedQuiz => {
    console.log(finishedQuiz);
     return dispatch(newQuiz(finishedQuiz))})
}

const quizResult = (resultObj) => ({
  type: 'QUIZ_RESULT',
  payload: resultObj
})

export default {
  createQuiz,
  getQuizzes,
  setQuizzes,
  newQuiz,
  finishedQuiz,
  quizResult
}
