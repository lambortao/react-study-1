import {
  initList
} from './actionCreate';

export const getInitList = () => {
  return (dispatch) => {
    setTimeout(() => {
      const data = ['hello', 'world'];
      const action = initList(data);
      // store.dispatch 会传过来一个 dispatch 方法，这里可以直接调用，用来派发请求
      dispatch(action);
    }, 500);
  }
}