/**
 * reducers，就是笔记本里面的数据
 */
import _ from 'lodash';

const defaultState = {
  inputValue: '123',
  list: [1, 2, 3]
}

// reducers 可以接受 state ，但是绝对不能修改 state

export default (state = defaultState, action) => {
  console.log(state, action);
  if (action.type === 'change_input_value') {
    const newState = _.cloneDeep(state);
    newState.inputValue = action.value;
    // 修改好新的数据后将数据直接返回到 store
    return newState;
  }
  if (action.type === 'input_btn_click') {
    const newState = _.cloneDeep(state);
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  return state;
}