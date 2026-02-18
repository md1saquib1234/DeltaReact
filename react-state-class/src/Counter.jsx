import {useState} from "react";

function init() {
  console.log("init was executed")
  return Math.random();
}

export default function Counter() {
 let [stateVariable, setStateVariable] = useState(10);
 let [count, setCount] = useState(init); //Initialization
 console.log("Component was rendered!");
//  console.log(`count = ${count}`)

 let incCount = () => {
  setCount((currCount) => {
    return currCount + 1;
  }); 
  setCount((currCount) => {
    return currCount + 1;
  });
  setCount((currCount) => {
    return currCount + 1;
  });
  // setCount(25);
 };
 

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  )
}