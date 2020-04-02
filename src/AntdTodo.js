import React from 'react';
import store from './store';
import {
  getChangeInputValueFunc,
  getInputBtnClickFunc,
  getInputItemDeleteFunc
} from './store/actionCreator.js';
import AntdTodoUI from './AntdTodoUI';

class AntdTodo extends React.Component {

  constructor(props) {
    super(props);
    // getState() 方法是 store 的一个方法，他会返回 store 获取到的数据
    this.state = store.getState();

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    // 一旦store发生变化，store.subscribe 会感知到
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return ( 
      <AntdTodoUI 
        inputValue={ this.state.inputValue }
        list={ this.state.list }
        handleChangeInput={ this.handleChangeInput }
        handleBtnClick={ this.handleBtnClick }
        handleItemDelete={ this.handleItemDelete }
      />
    )
  }

  handleChangeInput(e) {
    // 使用 store.dispatch 可以将定义的 action 传给 store
    const action = getChangeInputValueFunc(e.target.value);
    store.dispatch(action);
  }
  handleBtnClick() {
    const action = getInputBtnClickFunc();
    store.dispatch(action);
  }
  handleItemDelete(index) {
    const action = getInputItemDeleteFunc(index);
    store.dispatch(action);
  }

  // 这个函数是 store.subscribe 触发的，触发的条件是 store 发生了变化
  handleStoreChange() {
    this.setState(store.getState());
  }
}

export default AntdTodo;