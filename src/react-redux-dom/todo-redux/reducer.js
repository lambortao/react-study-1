import {
  CHANGE_INPUT_VALUE,
  ADD_INPUT_LIST,
  DELETE_LIST_ITEM,
  INITLIST
} from './actionTypes';

const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === CHANGE_INPUT_VALUE) {
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_INPUT_LIST) {
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === DELETE_LIST_ITEM) {
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (action.type === INITLIST) {
    newState.list = action.data;
    return newState;
  }
  return state;
}