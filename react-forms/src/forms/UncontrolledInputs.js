import React, { useState } from "react";

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    // formData는 배열
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    // console.log("data1", [formData.entries()]);
    // console.log("data2", [...formData.entries()]);
    // const email = formData.get("email");
    // console.log(email);
    // console.log([...formData.entries()]);
    // console.log("target", e.target);
    // console.log("currentTarget", e.currentTarget);
    // 서버에 제출하려는 경우 객체를 원할 가능성이 높음 하는 방법
    const newUser = Object.fromEntries(formData);
    console.log(newUser);
    e.currentTarget.reset();
  };
  return (
    <div>
      <h2>Form Data API</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" id="name" name="name" className="form-input" />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input type="text" id="email" name="email" className="form-input" />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            className="form-input"
          />
        </div>
        <button className="btn btn-block" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default UncontrolledInputs;
