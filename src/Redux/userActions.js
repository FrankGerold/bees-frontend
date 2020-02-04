const URL = 'http://localhost:3000';
const USERS_URL = URL + '/users';
const PERSIST_URL = URL + '/auth';
const LOGIN_URL = URL + '/login';
const USER_URL = id => USERS_URL + `/${id}`;

const setUserAction = user => ({type: 'SET_USER', payload: user})

const clearUserAction = () => ({type: 'CLEAR_USER'})

const newUser = user => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  };
  fetch(USERS_URL, config)
    .then(r=>r.json())
    .then(userInfo => {
      dispatch(setUserAction(userInfo.user));
      localStorage.setItem('token', userInfo.jwt);
    });
};

const deleteUser = user => dispatch => {
  const config = {
    method: 'DELETE'
  };
  fetch(USER_URL, config)
    .then(r => {
      dispatch(clearUserAction());
      localStorage.clear();
    });
};

const loginUser = user => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  };
  fetch(LOGIN_URL, config)
    .then(r => r.json())
    .then(userInfo => {
      dispatch(setUserAction(userInfo.user));
      localStorage.setItem('token', userInfo.jwt);
    });
};

const persistUser = () => dispatch => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: `bearer ${localStorage.token}`
    }
  };
  fetch(PERSIST_URL, config)
    .then(r => r.json())
    .then(user => {
      dispatch(setUserAction(user))
    });
};

const logoutUser = () => dispatch => {
  dispatch(clearUserAction());
  localStorage.clear();
};

export default {
  newUser,
  deleteUser,
  loginUser,
  persistUser,
  logoutUser
}
