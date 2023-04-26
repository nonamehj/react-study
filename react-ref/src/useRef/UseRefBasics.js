import React, { useState, useRef, useEffect } from "react";

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef();
  const isMounted = useRef(false);
  // console.log(refContainer);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value;
    console.log("ref : ", name);
  };
  useEffect(() => {
    refContainer.current.focus();
  }, []);
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
  }, [value]);
  return (
    <div>
      <h2>Use Ref Basics</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            ref={refContainer}
            type="text"
            id="name"
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h3>value : {value}</h3>
      <button onClick={() => setValue(value + 1)}>increase</button>
    </div>
  );
};

export default UseRefBasics;
