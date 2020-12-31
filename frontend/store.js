import { useMemo } from 'react'
import { composeWithDevTools } from 'redux-devtools-extension'

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initial = {
  data: [],
  check: true,
  question: ["問題作成中"],
  answer: ["問題作成中"],
  alternative: ["選択肢作成中","選択肢作成中","選択肢作成中","選択肢作成中"],
  correct:0,
  wrong:0,
  status: "question",
  questioncount: 1,
  timelimit: 100,
  question_word_id: 0,
  test_id: 0,
  student_id: 0,
}


function counterReducer (state = initial, action) {
  switch (action.type) {
    // 単語reducer
    case 'GET':
      return getTestDataReduce(state, action);
    case 'NEXT':
      return nextReduce(state, action);
    case 'CHECK':
      return checkReduce(state, action);
    default:
      return state;
  }
}


// テストデータ取得処理
function getTestDataReduce(state, action) {
  let d = action.data;
  let a = action.alternative
  console.log("Reduce動きました")
  console.log(d)
  console.log("テストID")
  console.log(d.slice(-1)[0])
  return {
    data: d,
    check:"NON",
    question: d[0][0].english,
    answer: d[0][0].japanese,
    alternative: a,
    correct:state.correct,
    wrong:state.wrong,
    status: "question",
    questioncount: 1,
    timelimit:100,
    question_word_id: d[0][0].id,
    test_id: d.slice(-1)[0],
  }
}

// テストのreduce処理
function nextReduce(state, action) {
  let q = state.questioncount + 1;
  let n = state.questioncount
  console.log("nextReduce動きます")
  let alternative = [[state.data[n][0].japanese,"t"], [state.data[n][1].japanese,"f"], [state.data[n][2].japanese,"f"], [state.data[n][3].japanese,"f"]]
  for(var i = alternative.length - 1; i > 0; i--){
    var rand = Math.floor(Math.random() * (i + 1));
    [alternative[i], alternative[rand]] = [alternative[rand], alternative[i]];
  }
  console.log("選択肢シャッフル後");
  console.log(alternative);
  return {
    data: state.data,
    check: state.check,
    question: state.data[n][0].english,
    answer: state.data[n][0].japanese,
    alternative: alternative,
    correct:state.correct,
    wrong:state.wrong,
    status: "question",
    questioncount: q,
    timelimit:100,
    question_word_id: state.data[n][0].id,
    test_id: state.test_id,
  }
}
// テスト答え合わせのreduce
function checkReduce(state, action) {
  let c = action.choise;
  let check, correct, wrong;
  if (c=="t"){
    check = true;
    correct = state.correct + 1;
    wrong = state.wrong;
  }else{
    check = false;
    correct = state.correct;
    wrong = state.wrong + 1;
  }
  console.log("checkReduce動きます")
  console.log(check)
  return {
    data:state.data,
    check: check,
    question: state.question,
    answer: state.answer,
    alternative: state.alternative,
    correct:correct,
    wrong:wrong,
    status: "answer",
    questioncount: state.questioncount,
    timelimit:0,
    question_word_id: state.question_word_id,
    test_id: state.test_id,
  }
}

export function getTestData(data) {
  let alternative = [[data[0][0].japanese,"t"], [data[0][1].japanese,"f"], [data[0][2].japanese,"f"], [data[0][3].japanese,"f"]]
  for(var i = alternative.length - 1; i > 0; i--){
    var rand = Math.floor(Math.random() * (i + 1));
    [alternative[i], alternative[rand]] = [alternative[rand], alternative[i]];
  }
  return {
    type: 'GET',
    data: data,
    alternative : alternative
  }
}


export function nextTest() {
  return {
    type: 'NEXT'
  }
}

export function checkTest(choise) {
  return {
    type: 'CHECK',
    choise: choise
  }
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['student_id'],
}

const persistedReducer = persistReducer(persistConfig, counterReducer)


function makeStore(initialState = initial) {
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? makeStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

// export function useStore(initialState) {
//   const store = useMemo(() => initializeStore(initialState), [initialState])
//   return store
// }

// let store = createStore(persistedReducer)

// export default pstore = persistStore(store);

export function initStore(state = initial) {
  console.log('reduxを初期化します')
  return createStore(counterReducer, state, applyMiddleware(thunkMiddleware))
}
