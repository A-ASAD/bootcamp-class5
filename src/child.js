import React from 'react';
import { useContext } from 'react';
import globalContext from './context';

function Child() {
const value = useContext(globalContext);

  return(
      <div>
        <h3>In Child</h3>
        <p>Context Vlaue: {value}</p>
        <div><button onClick={()=>{value[1](value[0]++)}}>Change Value</button></div>
      </div>
  );
}

export default Child;