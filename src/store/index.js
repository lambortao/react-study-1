/**
 * 这是 store 就是图书馆管理员
 * 这里需要去获取 reducers 也就是图书存放的册子，然后把册子导入到 store 的 createStore 的函数
 * 那样 store 就能获取到 reducers 了
 */

import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

// redux-thunk
// import thunk from 'redux-thunk';

// redux-sage
import createSagaMiddleware from 'redux-saga'
import mySaga from './mySaga';
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// redux-thunk
// const enhancer = composeEnhancers( applyMiddleware(thunk));

const enhancer = composeEnhancers( applyMiddleware(sagaMiddleware) );

const store = createStore(
  reducers,
  enhancer
);

sagaMiddleware.run(mySaga)

export default store;