import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigator = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigator("/dashboard");
  };
  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <h5>login</h5>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            value={name}
            id="name"
            className="form-input"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            value={email}
            id="email"
            className="form-input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn">Logins</button>
      </form>
    </section>
  );
};

export default Login;
