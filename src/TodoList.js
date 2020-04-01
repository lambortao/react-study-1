import React, { Fragment } from "react";
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCLickButton = this.handleCLickButton.bind(this);
    this.handleDelItem = this.handleDelItem.bind(this);
  }

  render () {
    return (
      <Fragment>
        <div>
          <input 
            type="text"
            className="input"
            value={this.state.inputValue}
            onChange={ this.handleInputChange }
            ref={ (input) => { this.input = input } }
          />
          <button onClick={ this.handleCLickButton }>新增</button>
        </div>
        <ul>
          { this.renderItem() }
        </ul>
      </Fragment>
    )
  }

  renderItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem 
          key={ index }
          content={ item }
          index={ index }
          handleDelItem={ this.handleDelItem }
        />
      )
    })
  }

  handleInputChange(e) {
    const inputValue = this.input.value;
    this.setState(() => ({ inputValue }));
  }

  handleCLickButton() {
    this.setState((prevState) => ({
      inputValue: '',
      list: [...prevState.list, prevState.inputValue]
    }))
  }

  handleDelItem(index) {
    this.setState((prevState) => {
      let list = [...prevState.list];
      list.splice(index, 1);
      return { list }
    })
  }
}

export default TodoList;