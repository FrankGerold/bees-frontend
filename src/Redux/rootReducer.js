export default (state = {}, { type, payload }) => {

  switch (type) {
    case 'SET_USER':
      return payload;

    case 'CLEAR_USER':
      return {};

    case 'SET_QUIZZES':
      return {
        ...state,
        userQuizzes: payload
      }

    case 'NEW_QUIZ':
      return {
        ...state,
        quiz: payload
      }

    default:
      return state;
  }
}
