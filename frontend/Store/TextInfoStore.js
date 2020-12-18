import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const initial = {
  text: {id:1, name: "テキスト名", iamge:"", correct:30, wrong:20, not:50},
  text_level_title: ["level 1", "level 2"],
  active_level: { id: 1, name: "level 1 ", correct:30, wrong:20, not:50},
}

function textReducer (state = initial, action) {
  switch (action.type) {
    case 'GET':
      return getTextDataReduce(state, action);
    case 'LEVEL':
      return selectLevel(state, action);
    default:
      return state;
  }
}

function getTextDataReduce(state, action) {
  console.log("getTextDataReduce動きました")
  return {
    text: state.text,
    text_level_title: state.text_level_title,
    active_level: state.active_level
  }
}

export function getTextData() {
  return {
    type: 'GET'
  }
}

export function selectLevel() {
  return {
    type: 'LEVEL'
  }
}


export function initStore(state = initial) {
  return createStore(textReducer, state, applyMiddleware(thunkMiddleware))
}