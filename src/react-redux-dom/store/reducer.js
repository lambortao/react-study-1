import { combineReducers } from 'redux';
import todoRedux from '../todo-redux/reducer';

export default combineReducers({
  todo: todoRedux
})