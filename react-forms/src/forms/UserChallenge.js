import React, { useState } from "react";
import { data } from "../data";
const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    // console.log(fakeId);
    const newUser = { id: fakeId, name };
    const updateUsers = [...users, newUser];
    setUsers(updateUsers);
    setName("");
    console.log("submit");
  };
  const removeUser = (id) => {
    const updateUsers = users.filter((person) => person.id !== id);
    setUsers(updateUsers);
  };
  return (
    <div>
      <h2>Add User</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h3>users</h3>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button className="btn" onClick={() => removeUser(user.id)}>
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default UserChallenge;
