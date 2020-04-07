import React from 'react';
import {
  changeInputValue,
  addInputList,
  deleteListItem
} from './todo-redux/actionCreate';
import { getInitList } from './todo-redux/networkRequest';
import { connect } from 'react-redux';
import store from './store';

class TodoList extends React.Component {
  
  componentDidMount() {
    const action = getInitList();
    store.dispatch(action);
  }

  render() {
    return (
      <div>
        <div>
          <input 
            type="text" 
            value={ this.props.inputValue } 
            onChange={ this.props.handleInputChange }
          />
          <button onClick={ this.props.handleBtnCLick }>提交</button>
        </div>
        <ul>
          {
            this.props.list.map((item, index) => <li onClick={ () => this.props.handleDeleteList(index) } key={ index }>{ item }</li>)
          }
        </ul>
      </div>
    )
  }
}

/**
 * 把 store 里面的数据映射到组件的 props 里面
 * @param {*} state store 中的数据 
 */
const mapStateToProps = (state) => {
  return {
    inputValue: state.todo.inputValue,
    list: state.todo.list
  }
}

/**
 * store.dispatch 
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = changeInputValue(e.target.value);
      dispatch(action);
    },
    handleBtnCLick() {
      const action = addInputList();
      dispatch(action);
    },
    handleDeleteList(index) {
      const action = deleteListItem(index);
      dispatch(action);
    }
  }
}

// 使用 connect 方法让 todolist 组件和 store 做链接，mapStateToProps 是他们的映射关系，mapDispatchToProps 是记录组件如何修改 props 的数据
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);