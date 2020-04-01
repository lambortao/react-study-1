import React, { Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <Fragment>
        <CSSTransition
          in={ this.state.show }
          timeout={ 1000 }
          classNames="fade"
        >
          <div>这是一段测试内容</div>
        </CSSTransition>
        <button onClick={ this.handleClick }>点击</button>
      </Fragment>
    )
  }

  handleClick() {
    this.setState(() => ({
      show: !this.state.show
    }))
  }
}

export default App;