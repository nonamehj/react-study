import React, { useState } from "react";

const UseStateBasics1 = () => {
  // const value = useState("hello react")[0]
  // const func = useState()[1];
  // console.log(value, func)

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClick2 = () => {
    setCount("pants");
  };
  return (
    <div>
      <h2>you clicked {count} times</h2>
      <button type="button" className="btn" onClick={handleClick}>
        count up
      </button>
      <button type="button" className="btn" onClick={handleClick2}>
        change name
      </button>
    </div>
  );
};

export default UseStateBasics1;
