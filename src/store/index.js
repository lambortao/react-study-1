/**
 * 这是 store 就是图书馆管理员
 * 这里需要去获取 reducers 也就是图书存放的册子，然后把册子导入到 store 的 createStore 的函数
 * 那样 store 就能获取到 reducers 了
 */

import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
);

export default store;