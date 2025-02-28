import { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  console.log('렌더링됨.');
  console.log(`현재 count : ${count}`);
  return(
  <div>
    <p>버튼을 눌러주세여</p>
    <button onClick={() => {
      console.log('--------');
      console.log('📁 버튼 클릭함');
      setCount(preCount => preCount +1);
      console.log(`렌더링 전의 count : ${count}`);
    }}>
      📁
    </button>
    <h3>{count}</h3>
  </div>
  );
}

export default App;