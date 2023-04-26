import React from "react";
import UseContainer from "./UseContainer";

const NavLinks = ({ user, logout }) => {
  return (
    <div className="nav-conainer">
      <ul className="nav-links">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>
      <UseContainer user={user} logout={logout} />
    </div>
  );
};

export default NavLinks;
