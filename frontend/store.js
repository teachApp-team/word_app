import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const wordData = [
  {English:'apple', Japanese:'りんご', No:1},
  {English:'banana', Japanese:'バナナ', No:2},
  {English:'chocolate', Japanese:'チョコレート', No:3},
  {English:'red', Japanese:'赤', No:4},
  {English:'white', Japanese:'白', No:5},
  {English:'apple', Japanese:'りんご', No:1},
  {English:'banana', Japanese:'バナナ', No:2},
  {English:'chocolate', Japanese:'チョコレート', No:3},
  {English:'red', Japanese:'赤', No:4},
  {English:'white', Japanese:'白', No:5}
]
const alternative = ["正解", "不正解1", "不正解2", "不正解3"]

const initial = {
  // 単語ステート
  data: wordData,
  check: "NON",
  question: wordData[0].English,
  answer: wordData[0].Japanese,
  alternative: alternative,
  correct:0,
  wrong:0,
  status: "question",
  questioncount: 1,
  timelimit: 100,
}

function counterReducer (state = initial, action) {
  switch (action.type) {
    // 単語reducer
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


// テストのreduce処理
function nextReduce(state, action) {
  let q = state.questioncount + 1;
  return {
    data:state.data,
    check:"NON",
    question: state.data[state.questioncount].English,
    answer: state.data[state.questioncount].Japanese,
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
