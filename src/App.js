import React from 'react';
import './App.css';

function App1(props) {
  return (
    <div>
      <h1 className='h1'>Helloooo Ridhu Welcome back !! </h1>
      <>{`I love ${props.brand} cars`}</>
    </div>
  );
}
const myElement = <App1 brand="Ford"/>
function App(){
  return(
    <div>
      {myElement}
    </div>
  )
}
export default App;
