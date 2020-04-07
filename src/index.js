import React from 'react';
import ReactDOM from 'react-dom';
import ReactRedux from './react-redux-dom'
import { Provider } from 'react-redux';
import store from './react-redux-dom/store';

const App = (
  // Provider 是 react-redux 提供的核心 API，他可以直接连接store，意思是说在 Provider 内部的组件都能获取到 store 里面的数据了。
  <Provider store={store} >
    <ReactRedux />
  </Provider>
);

ReactDOM.render(
  App,
  document.getElementById('root')
);
