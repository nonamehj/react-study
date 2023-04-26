import React from "react";

const UseContainer = ({ user, logout }) => {
  return (
    <div className="user-container">
      <h2>Prop Drilling</h2>
      {user ? (
        <>
          <p>hello there, {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};

export default UseContainer;
