import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";
const Navbar = () => {
  const auth = useAuth();

  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      {!auth.user && (<NavLink to="/login">Login</NavLink>)}
    </nav>
  );
};

export default Navbar;
