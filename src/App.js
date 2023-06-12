import React, { useState } from "react";
import "./App.css";

function App(){
//Always put State at the beginning of the component
const [count, setCount] = useState(0)
let color = count > 0 ? "green" : count<0 ?"red": "black";
//=> this is the advanced code we suppose to write instead below (line 8-16)


// if (count > 0) {
//  color = "green";
// }
// if (count < 0){
//   color = "red";
// }
//  if (count === 0){
//  color = "black";
// }
//Above is beginner coding

const increment = () => setCount(count + 1)
const resetCount = () => setCount(0)
const decrement = () => setCount(count - 1)

return(
      <div class="container">
  <h1>Counter</h1>
  <span style={{color}} id="value">{count}</span>

<div class="btn-group">
  <button onClick={decrement} class="btn btn-decrease">DECREASE</button>
  <button onClick={resetCount} class="btn btn-reset">RESET</button>
  <button onClick={increment} class="btn btn-increase">INCREASE</button>
</div>
</div>
    )
}

export default App
;

/****************************************/
// Javascript Vanilla codes as Imperative Programming
/* ReactJs codes as Declarative Programming, only needs to focus on the function , the UI will adjust accordingly */
