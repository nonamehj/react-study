import React, { useState } from "react";

const UseStateBasics3 = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 15,
    hobby: "read books",
  });
  const displayPerson = () => {
    // setPerson({ name: "john", age: 19, hobby: "scream at the computer" });
    // setPerson('hello react-world') 하면 person안에 다 사라짐
    setPerson({ ...person, name: "susan" });
  };
  // const [name, setName] = useState("peter");
  // const [age, setAge] = useState(15);
  // const [hobby, setHobby] = useState("computer game");

  // const displayPerson = () => {
  //   setName("john");
  //   setAge(19);
  //   setHobby("scream at the computer");
  // };
  return (
    <div>
      <h2>UseState Object Example</h2>
      <h5>{person.name}</h5>
      <h5>{person.age}</h5>
      <h5>Enjoys : {person.hobby}</h5>
      <button className="btn" onClick={displayPerson}>
        show me
      </button>
    </div>
  );
};

export default UseStateBasics3;
