import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return <nav>
    <NavLink to="/home">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <NavLink to="/products">Products</NavLink>
    <NavLink to="/users">Users</NavLink>
  </nav>;
};

export default Navbar;
