export default (state = {}, { type, payload }) => {

  switch (type) {
    case 'SET_USER':
      return payload;

    case 'CLEAR_USER':
      return {};

    case 'SET_QUIZZES':
      return {
        ...state,
        quizzes: payload
      }

    default:
      return state;
  }
}
