import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, signOutUser } = use(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {})
      .catch((err) => {
        toast.warn(err.message);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="w-11/12 mx-auto bg-white navbar p-0">
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
        <NavLink to="/">
          <h2 className="text-lg md:text-2xl font-bold text-blue-900">SkillEx</h2>
        </NavLink>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-3 items-center">
            <div
              className="tooltip tooltip-bottom"
              data-tip={user?.displayName || "user"}
            >
              <img
                className="cursor-pointer w-10 h-10 md:w-12 md:h-12 rounded-full"
                src={user.photoURL}
                alt={user.displayName}
              />
            </div>
            <button
              onClick={handleSignOut}
              className="cursor-pointer text-sm md:text-lg text-white bg-blue-500 px-3 py-3 rounded-md"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link
              to="/signin"
              className="text-white text-xs md:text-md lg:text-lg bg-blue-500 px-2 md:px-4 py-2 rounded-md cursor-pointer"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="text-white text-xs md:text-md lg:text-lg bg-blue-500 px-2 md:px-4 py-2 rounded-md cursor-pointer"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
