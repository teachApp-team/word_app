import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';


const initial = {
  data: [],
  check: "NON",
  question: ["問題作成中"],
  answer: ["問題作成中"],
  alternative: ["選択肢作成中","選択肢作成中","選択肢作成中","選択肢作成中"],
  correct:0,
  wrong:0,
  status: "question",
  questioncount: 1,
  timelimit: 100,
  loading: false,
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

// 選択肢作成のための処理
function randomSelect(array, num)
{
  let newArray = [];
  
  while(newArray.length < num && array.length > 0)
  {
    // 配列からランダムな要素を選ぶ
    const rand = Math.floor(Math.random() * array.length);
    // 選んだ要素を別の配列に登録する
    newArray.push(array[rand]);
    // もとの配列からは削除する
    array.splice(rand, 1);
  }
  
  return newArray;
}

// テストデータ取得処理
function getTestDataReduce(state, action) {
  let d = action.data;
  let a = action.alternative
  console.log("Reduce動きました")
  console.log(d)
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
    loading: true
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
    check:"NON",
    question: state.data[n][0].english,
    answer: state.data[n][0].japanese,
    alternative: alternative,
    correct:state.correct,
    wrong:state.wrong,
    status: "question",
    questioncount: q,
    timelimit:100,
  }
}
// テスト答え合わせのreduce
function checkReduce(state, action) {
  let c = action.choise;
  let check, correct, wrong;
  if (c=="t"){
    check = "correct";
    correct = state.correct + 1;
    wrong = state.wrong;
  }else{
    check = "wrong";
    correct = state.correct;
    wrong = state.wrong + 1;
  }
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


export function initStore(state = initial) {
  return createStore(counterReducer, state, applyMiddleware(thunkMiddleware))
}
