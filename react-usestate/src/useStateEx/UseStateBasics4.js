import React, { useState } from "react";

const UseStateBasics4 = () => {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick = () => {
    setValue(value + 1);
  };
  const handleClick2 = () => {
    setTimeout(() => {
      console.log("클릭한 수만큼 3초뒤 카운트");
      setCount((prev) => prev + 1);
    }, 3000);
  };
  const handleClick3 = () => {
    setTimeout(() => {
      console.log("아무리 클릭해도 1번만 카운트");
      setCount2(count2 + 1);
    }, 3000);
  };

  return (
    <div>
      <h2>UseState "Gotcha"</h2>
      <h3>value : {value}</h3>
      <button className="btn" type="button" onClick={handleClick}>
        클릭 한 만큼 렌더링
      </button>
      <h3>count : {count}</h3>
      <button className="btn" type="button" onClick={handleClick2}>
        클릭 한 수만큼 증가
      </button>
      <h3>count2 : {count2}</h3>
      <button className="btn" type="button" onClick={handleClick3}>
        많이 클릭해도 카운트1만
      </button>
    </div>
  );
};

export default UseStateBasics4;
