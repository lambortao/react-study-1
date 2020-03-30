import React, { Fragment } from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      list: []
    }
  }

  render () {
    return (
      <Fragment>
        <div>
          <input 
            type="text"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={ this.handleCLickButton.bind(this) }>新增</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li 
                  key={ index }
                  onClick={this.handleDelItem.bind(this, index)}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleCLickButton() {
    this.setState({
      inputValue: '',
      list: [...this.state.list, this.state.inputValue]
    })
  }

  handleDelItem(index) {
    let list = [...this.state.list];
    list.splice(index, 1);

    this.setState({
      list
    })
  }
}

export default TodoList;