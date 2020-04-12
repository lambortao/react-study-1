import React, { useReducer } from 'react';

function countReducer(state, action) {
  switch(action.type) {
    case 'add':
      return state + 1;

    case 'minus':
      return state - 1;

    default:
      return state;
  }
}


function MyHooks() {
  const [count, dispatchCount] = useReducer(countReducer, 0);
  return <div onClick={ () => dispatchCount({ type: 'minus' }) }>{ count }</div>
}

export default MyHooks;