import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
const initial = {
  student_id: 0
}

function authReducer (state = initial, action) {
  switch (action.type) {
    case 'LOGIN':
      return LoginReduce(state, action);
    default:
      return state;
  }
}

async function loginReduce (state, action) {
  const response = await axios.post('http://localhost:8000/auth/sign_in', { email: action.email, password: action.password })
  console.log(response)
  return {
    // TODO: ここにIDを入れる
    student_id: response
  }
}

export function loginAction(data) {
  return {
    type: 'LOGIN',
    email: data.email,
    password: data.password
  }
}

export function initStore(state = initial) {
  return createStore(authReducer, state, applyMiddleware(thunkMiddleware))
}