import React, { useReducer, useRef } from 'react';

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
  const divRef = useRef();
  console.log(divRef);
  const [count, dispatchCount] = useReducer(countReducer, 0);
  return <div ref={divRef} onClick={ () => dispatchCount({ type: 'minus' }) }>{ count }</div>
}

export default MyHooks;