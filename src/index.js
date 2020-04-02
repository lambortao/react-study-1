import React from 'react';
import ReactDOM from 'react-dom';
import AntdTodoList from './AntdTodo';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <AntdTodoList />
  </React.StrictMode>,
  document.getElementById('root')
);
