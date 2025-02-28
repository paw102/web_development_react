// 1. useState 를 import

import { useState } from "react";
import './App.css';

// 지금 현재까지는 컴포넌트들을 다 분할했었는데, 다층 구조의 상위 컴포넌트와 하위 컴포넌트로 나누어서 작성하는 방법을 사용 할 예정

// 2. LoginForm 함수 컴포넌트들을 생성, App 도 만들거임

function LoginForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginForm = (event) => {
    event.preventDefault();
    // console.log('로그인 버튼을 클릭함');   => onChange 의 흐름을 증명하기 위한 테스트 코드
    alert(`Id: ${id}\nPassword: ${password}`)
  };

  const handIdInput = (event) => {
    // console.log('아이디를 입력함');
    setId(event.target.value);
  };

  const handlePasswordInput = (event) => {
    // console.log('비번을 입력함');
    setPassword(event.target.value);
  };

  return(
    <form onSubmit={handleLoginForm}>
      <label>
        Id : 
        <input type="text" value={id} placeholder="아이디를 입력하시오." onChange={handIdInput}/>
      </label>
      <label>
        Password : 
        <input type="password" value={password} placeholder="비밀번호를 입력하시오." onChange={handlePasswordInput}/>
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

function App () {
  return (
    <div>
      <LoginForm />
    </div>
  )
}

export default App;