import {
  CHANGE_INPUT_VALUE,
  INPUT_BTN_CLICK,
  INPUT_ITEM_DELETE
} from './actionTypes.js'

// 这里的 action 是固定格式，type 为标识符，会传到 reducers 用来判断操作，value 是可选的，是传的值
export const getChangeInputValueFunc = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getInputBtnClickFunc = () => ({
  type: INPUT_BTN_CLICK
});

export const getInputItemDeleteFunc = (index) => ({
  type: INPUT_ITEM_DELETE,
  index
});