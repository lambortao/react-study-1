import { takeEvery, put } from 'redux-saga/effects';
import {
  GET_INIT_LIST
} from './actionTypes';
import { initListAction } from './actionCreator'

// 初始执行的 generator 函数
function* mySaga() {
  // takeEvery 用来捕获 dispatch 的派发
  // 在检测到 GET_INIT_LIST 这个 action 后就执行 getInitList 函数
  yield takeEvery(GET_INIT_LIST, getInitList);
}

function* getInitList() {
  const action = initListAction(['hello', 'world']);
  yield put(action); 
}

export default mySaga;