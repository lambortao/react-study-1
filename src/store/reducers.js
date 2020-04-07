/**
 * reducers，就是笔记本里面的数据
 */
import _ from 'lodash';
import {
  CHANGE_INPUT_VALUE,
  INPUT_BTN_CLICK,
  INPUT_ITEM_DELETE,
  INIT_LIST_ACTION
} from './actionTypes.js'

const defaultState = {
  inputValue: '',
  list: []
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
  if (action.type === INIT_LIST_ACTION) {
    newState.list = action.value;
    return newState;
  }
  return state;
}