import React from "react";
import UseContainer from "./UseContainer";
const NavLinks = () => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>
      <UseContainer />
    </div>
  );
};

export default NavLinks;
