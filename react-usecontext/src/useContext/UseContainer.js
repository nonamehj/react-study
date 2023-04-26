import React, { useContext } from "react";
import { NavbarContext } from "./Navbar";

const UseContainer = () => {
  const { user, logout } = useContext(NavbarContext);

  return (
    <div>
      {user ? (
        <>
          <p>Hello There, {user?.name?.toUpperCase()}</p>
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
