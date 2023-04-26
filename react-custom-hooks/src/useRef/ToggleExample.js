import React from "react";
import { useState } from "react";
import useToggle from "./useToggle";

const ToggleExample = () => {
  const { show, toggle } = useToggle(true);

  return (
    <div>
      <h2>Toggle custom hook</h2>
      <button className="btn" onClick={toggle}>
        toggle
      </button>
      {show && <h4>show stuff</h4>}
    </div>
  );
};

export default ToggleExample;
