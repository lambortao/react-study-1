import React from 'react';
import PropTypes from 'prop-types';

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

TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  index: PropTypes.number,
  handleDelItem: PropTypes.func
}

TodoItem.defaurtPrpos = {
  content: 'ssss'
}

export default TodoItem