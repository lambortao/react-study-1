import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    // 在初始的时候就去绑定this可以提高性能
    this.handleDelItem = this.handleDelItem.bind(this);
  }

  render () {
    return (
      <div 
        onClick={ this.handleDelItem }
      >{this.props.content}</div>
    )
  }

  handleDelItem() {
    this.props.handleDelItem(this.props.index);
  }
}

export default TodoItem