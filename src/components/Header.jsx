import React from "react";
import logo from "../assets/chef-claude-icon.png";

const Header = () => {
  return (
    <>
      <header className="custom-header">
        <img src={logo} alt="Chef Claude Logo" />
        <h1>Chef Claude</h1>
      </header>
    </>
  );
};

export default Header;
