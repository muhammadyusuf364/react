import React from "react";
import { useState } from "react";

function Hero() {
  const [count, setCount] = useState(0);
  const [login, setLogin] = useState(false);
  const plas = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  const toggle = ()=>{
    setLogin(!login)
  }
  return (
    <div>
      <dir>{count}</dir>
      <button onClick={plas}>+</button>
      <button onClick={minus}>-</button>

      {login ? <p>login</p> : null}
      <button onClick={toggle}>toggle</button>
    </div>
  );
}

export default Hero;
