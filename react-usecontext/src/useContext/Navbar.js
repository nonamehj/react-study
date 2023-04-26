import React, { createContext, useState } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

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
