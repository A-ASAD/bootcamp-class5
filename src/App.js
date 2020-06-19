import React from 'react';
import Parent from './parent';
import Child from './child';
import globalContext from './context';

function App() {
  const state = React.useState(40);
  return(
    <globalContext.Provider value={state}>
      <div style={{"text-align":"center", "backgroundColor": "aqua", "borderRadius":10}}>
      <p>Hello</p>
      <h1>This is a simple react app using Context.</h1>
      <Parent></Parent>
      <Child></Child>
      </div>
    </globalContext.Provider>
  );
}

export default App;
