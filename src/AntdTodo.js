import React from 'react';
import { Input, Button, List } from 'antd'
import store from './store';
import {
  getChangeInputValueFunc,
  getInputBtnClickFunc,
  getInputItemDeleteFunc
} from './store/actionCreator.js';

class AntdTodo extends React.Component {

  constructor(props) {
    super(props);
    // getState() 方法是 store 的一个方法，他会返回 store 获取到的数据
    this.state = store.getState();

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    // 一旦store发生变化，store.subscribe 会感知到
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return ( 
      <div style={{width: 500, padding: 20}}>
        <div style={{marginBottom: '10px', display: 'flex'}}>
          <Input
            style={{marginRight: 10}}
            placeholder="todo info"
            value={ this.state.inputValue }
            onChange={ this.handleChangeInput }
          />
          <Button 
            type="primary"
            onClick={ this.handleBtnClick }
          >提交</Button>
        </div>
        <List
          size="large"
          bordered
          dataSource={ this.state.list }
          renderItem={(item, index) => <List.Item onClick={ this.handleItemDelete.bind(this, index) }>{item}</List.Item>}
        />
      </div>
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