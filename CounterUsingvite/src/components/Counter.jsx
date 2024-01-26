import React from "react";
import { useState } from "react";
import ReactDOM from 'react-dom/client'
function Counter(){
    const [count,setCount] =useState(1);
    function Increase(){
        setCount(count+1);
      }
      function Decrease(){
        setCount(count-1);
      }

      return (
        <>
        <h2>Counter : {count}</h2>
        <button onClick={Increase}>Increase</button>
        <button onClick={Decrease}>Decrease</button>
        </>
      )
}

export default Counter;