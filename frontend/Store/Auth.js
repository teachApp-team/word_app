import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

const initial = {
  student_id: 5
}

function authReducer (state = initial, action) {
  console.log("authReducer")
  switch (action.type) {
    case 'LOGIN':
      console.log("LOGIN")
      return LoginReduce(state, action);
    default:
      console.log("default")
      return state;
  }
}

async function LoginReduce (state, action) {
  console.log("こんにちは")
  const response = await axios.post('http://localhost:8000/auth/sign_in', { email: action.email, password: action.password })
  return {
    // TODO: ここにIDを入れる
    student_id: response
  }
}

export function loginAction(data) {
  console.log("loginAction")
  return {
    type: 'LOGIN',
    email: data.email,
    password: data.password
  }
}

export function initStore(state = initial) {
  return createStore(authReducer, state, applyMiddleware(thunkMiddleware))
}