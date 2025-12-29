import React from "react";
import "./navbar.css";
import { Link } from "react-router";
import { Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const links = (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"singUp"}>Sing up</Link>
    </>
  );

  return (
    <div className="navbar bg-base-100 rounded-full px-5 w-11/12 mx-auto fixed top-2 left-0 right-0 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
        <a className="text-xl md:text-2xl font-bold">Exclusive</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <label className="input rounded-full hidden md:flex">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
        <Search className="md:hidden"></Search>
        {/* cart icon  */}
        <ShoppingCart></ShoppingCart>
      </div>
    </div>
  );
};

export default Navbar;
