import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
const initial = {
  student_id: 0
}

function authReducer (state = initial, action) {
  console.log('大元のreducerは動いておりますかね')
  switch (action.type) {
    case 'LOGIN':
      return LoginReduce(state, action);
    default:
      return state;
  }
}

async function loginReduce (state, action) {
  console.log("LoginReduce動きまーーーす")
  const response = await axios.post('http://localhost:8000/auth/sign_in', { email: "test2@gmail.com", password: "password" })
  console.log(response)
  return {
    student_id: 1
  }
}

export function loginAction(data) {
  console.log('LoginAction動きまーす')
  console.log(data)
  return {
    type: 'LOGIN'
  }
}

export function initStore(state = initial) {
  return createStore(authReducer, state, applyMiddleware(thunkMiddleware))
}