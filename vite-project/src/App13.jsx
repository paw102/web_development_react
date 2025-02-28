import { useState, useRef } from "react";
import './App.css'

// 매번 export default 하기 귀찮으니 바로 작성하는 방법 또한 말함

export default function App() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);

  return (
  <div className="App">
    <button onClick={()=> setStateCount(preCount => preCount +1)}>
      State Button
    </button>
    <br /><br /><br />
    <button onClick={() => refCount.current += 1}>
      Ref Button
    </button>
    <br /><br /><br />
    <div>useState Count : {stateCount}</div>
    <div>useRef Count : {refCount.current}</div>
  </div>
  );
}