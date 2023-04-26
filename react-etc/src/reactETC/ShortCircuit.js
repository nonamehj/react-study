import React, { useState } from "react";

const ShortCircuit = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");

  const codeExample = text || "hello world";

  return (
    <div>
      <h2>ShortCircuitOverview</h2>
      <h3>Falsy OR : {text || "hello world"}</h3>
      <h3>Falsy AND : {text && "hello world"}</h3>
      <h3>Truthy OR : {name || "hello world"}</h3>
      <h3>Truthy AND : {name && "hello world"}</h3>
      {codeExample}
    </div>
  );
};

export default ShortCircuit;
