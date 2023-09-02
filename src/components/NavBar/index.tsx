import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const navLinkStyles = ({ isActive }: { isActive: boolean }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    //   textDecoration: isActive ? "none" : "underline",
    backgroundColor: isActive ? "#666" : "#333"
    };
  };

  return (
    <nav className="navbar">
        <NavLink className="nav-link" style={navLinkStyles} to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" style={navLinkStyles} to="statistic">
          Statistic
        </NavLink>
        <NavLink className="nav-link" style={navLinkStyles} to="setUp">
          SetUp
        </NavLink>
        <NavLink className="nav-link" style={navLinkStyles} to="login">
          LoginSingUp
        </NavLink>
    </nav>
  );
};
