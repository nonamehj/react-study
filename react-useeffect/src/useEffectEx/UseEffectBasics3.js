import React, { useState, useEffect } from "react";

const UseEffectBasics3 = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <h2>UseEffect ClearUp</h2>
      <div>
        <button className="btn" onClick={() => setToggle(!toggle)}>
          toggle component
        </button>
        {toggle && <RandomComponent />}
      </div>
    </div>
  );
};

// const RandomComponent = () => {
//   useEffect(() => {
//     console.log("this is intersing");
//     const intId = setInterval(() => {
//       console.log("hello from interval");
//     }, 1000);
//     return () => {
//       console.log("useEffect 끝나고 clean up 실행");
//       clearInterval(intId);
//     };
//   }, []);
//   return <h3>hello there</h3>;
// };
const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {};
    window.addEventListener("scroll", someFunc);
    return () => window.removeEventListener("scroll", someFunc);
  }, []);
  return <h3>hello there</h3>;
};

export default UseEffectBasics3;
