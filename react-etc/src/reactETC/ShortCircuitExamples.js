import React from "react";
import { useState } from "react";

const ShortCircuitExamples = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div>
      <h2>Short Circuit Examples</h2>
      <h3>{text || "default value"}</h3>
      {text && (
        <div>
          <h2>whatever return </h2>
          <h2>{name}</h2>
        </div>
      )}
      {user && <SomeComponet name={user.name} />}
      <h3 style={{ margin: "1rem 0" }}>Ternary Operator</h3>
      <button className="btn">{isEditing ? "edit" : "add"}</button>
      {user ? (
        <div>
          <h4>hello there user {user.name}</h4>
        </div>
      ) : (
        <div>
          <h4>please login</h4>
        </div>
      )}
    </div>
  );
};

const SomeComponet = ({ name }) => {
  return (
    <div>
      {
        <div>
          <h2>whatever return </h2>
          <h2>{name}</h2>
        </div>
      }
    </div>
  );
};

export default ShortCircuitExamples;
