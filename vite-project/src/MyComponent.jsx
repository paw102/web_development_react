import { useContext } from "react";
// 이 안에 import React 또한 있을것임
import AuthContext from "./AuthContext";

function MyComponent(){
  const authContext = useContext(AuthContext);

  return (
    <>
      Welcome {authContext} 😀
    </>
  );
}

export default MyComponent;