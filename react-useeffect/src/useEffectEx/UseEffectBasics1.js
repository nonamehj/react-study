import React, { useEffect, useState } from "react";

const useEffectBasics1 = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const sayHello = () => {
    console.log("hello react");
    // setValue(value + 1);
    //무한루프 빠짐 sayHello 호출 state 렌더링 반복
  };
  sayHello();

  useEffect(() => {
    console.log("useEffect 의존성배열 없을때 클릭시 호출");
  });
  useEffect(() => {
    console.log("useEffect 초기에만 호출");
  }, []);
  useEffect(() => {
    console.log("secondValue값이 변경될때마다 useEffect 실행 ");
  }, [secondValue]);
  return (
    <div>
      <h2>UseEffect Basics</h2>
      <h3>value : {value}</h3>
      <button className="btn" onClick={() => setValue(value + 1)}>
        클릭하면 렌더링발생
      </button>
      <h3>value : {secondValue}</h3>
      <button className="btn" onClick={() => setSecondValue(secondValue + 1)}>
        value 클릭할때만 실행
      </button>
    </div>
  );
};

export default useEffectBasics1;
