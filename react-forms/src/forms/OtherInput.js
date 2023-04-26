import React, { useState } from "react";

const frameworks = ["react", "angular", "vue", "svelte"];
const OtherInput = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("react");
  const handleShipping = (e) => {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  };
  const handleFramework = (e) => {
    setFramework(e.target.value);
  };
  return (
    <div>
      <h2>Other Inputs</h2>
      <form>
        <div className="form-row">
          <label
            htmlFor="shipping"
            className="form-label"
            style={{ textAlign: "left" }}
          >
            Free Shipping
          </label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={handleShipping}
          />
        </div>
        <div className="form-row">
          <label
            htmlFor="framework"
            className="form-label"
            style={{ textAlign: "left" }}
          >
            Framework
          </label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={handleFramework}
          >
            {frameworks.map((framework) => {
              return <option key={framework}>{framework}</option>;
            })}
          </select>
        </div>
        <button type="button" className="btn btn-block">
          sumit
        </button>
      </form>
    </div>
  );
};

export default OtherInput;
