import React from "react";
import "./Header.css";
import logo from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="Logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};
export default Header;
