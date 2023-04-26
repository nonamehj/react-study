import React from "react";
import { data } from "../data";
import { useState } from "react";
const UseStateBasics2 = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const clearItem = () => {
    setPeople([]);
  };

  return (
    <div>
      <h2>UseState Array Example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h5>{name}</h5>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button type="button" onClick={clearItem}>
        all remove
      </button>
    </div>
  );
};

export default UseStateBasics2;
