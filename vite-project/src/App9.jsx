import useTitle from "./script/useTitle";
import './App.css';
import { useState } from "react";

function Counter(){
  // 긁어왔으면 부족한 부분이 있는데 count / setCount
  const [count, setCount] = useState(0);
  useTitle(`니가 누른 값 >>> ${count}`);
  
  return(
  <>
    <p>값 : {count}</p>
    <button onClick={() => setCount(preCount => preCount + 1)}>count is {count}</button>
  </>);
}

export default Counter;