import React, { createContext, useContext, useState } from "react";
import NavLinks from "./NavLinks";
export const NavbarContext = createContext();

// globalContext 전역context
export const useAppContext = () => {
  return useContext(NavbarContext);
};

const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" });
  const logout = () => {
    setUser(null);
  };
  return (
    // value 값에 props 전달
    <NavbarContext.Provider value={{ user, logout }}>
      <h2>React Context</h2>
      <NavLinks />
    </NavbarContext.Provider>
  );
};

export default Navbar;
