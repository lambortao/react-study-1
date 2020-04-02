/**
 * reducers，就是笔记本里面的数据
 */
import _ from 'lodash';
import {
  CHANGE_INPUT_VALUE,
  INPUT_BTN_CLICK,
  INPUT_ITEM_DELETE
} from './actionTypes.js'

const defaultState = {
  inputValue: '123',
  list: [1, 2, 3]
}

// reducers 可以接受 state ，但是绝对不能修改 state

export default (state = defaultState, action) => {
  const newState = _.cloneDeep(state);
  if (action.type === CHANGE_INPUT_VALUE) {
    newState.inputValue = action.value;
    // 修改好新的数据后将数据直接返回到 store
    return newState;
  }
  if (action.type === INPUT_BTN_CLICK) {
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === INPUT_ITEM_DELETE) {
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
}