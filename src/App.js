import React from 'react';
import './App.css';

function App(props) {
  return (
    <div>
      <h1 className='h1'>Helloooo Ridhu Welcome back !! </h1>
      <>{`I love ${props.brand} cars`}</>
    </div>
  );
}
const myElement = <App brand="Ford"/>
function App1(){
  return(
    <div>
      {myElement}
    </div>
  )
}
export default App1;
