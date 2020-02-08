const QUIZZES_URL = 'http://localhost:3000/quizzes'

const USER_QUIZZES = 'http://localhost:3000/userquizzes'

// Action to create a quiz for the current logged in user. Uses the Quiz Create route on rails api backend
const createQuiz = (topic, quizName) => {
  const config = {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${localStorage.token}`
    },
    body: JSON.stringify(
      {
        topic: topic,
        name:quizName
      }
    )
  }
  fetch(QUIZZES_URL, config)
  .then(r=>r.json())
  // Will do more here after testing
  .then(console.log);
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
const setQuizzes = quizzes => ({type: 'SET_QUIZZES', payload: quizzes})

export default {
  createQuiz,
  getQuizzes,
  setQuizzes
}
