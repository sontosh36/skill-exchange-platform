import React from "react";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 p-0 shadow-sm mt-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to='/'>
            <img className="w-12 h-12 rounded-full" src="https://i.ibb.co.com/Ng60xSsn/skillswap.jpg" alt="" />
        </NavLink>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
       
          <div className="flex gap-3">
            <Link to='/signin' className="text-white bg-blue-500 px-4 py-2 rounded-md cursor-pointer">Sign In</Link>
            <Link to='/signup' className="text-white bg-blue-500 px-4 py-2 rounded-md cursor-pointer">Sign Up</Link>
          </div>
        
      </div>
    </div>
  );
};

export default NavBar;
