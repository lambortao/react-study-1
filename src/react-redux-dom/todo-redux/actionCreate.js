import {
  CHANGE_INPUT_VALUE,
  ADD_INPUT_LIST,
  DELETE_LIST_ITEM,
  INITLIST
} from './actionTypes';

export const changeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const addInputList = () => ({
  type: ADD_INPUT_LIST
})

export const deleteListItem = (index) => ({
  type: DELETE_LIST_ITEM,
  index
})

export const initList = (data) => ({
  type: INITLIST,
  data
})