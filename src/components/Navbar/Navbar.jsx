import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ContextProvider } from "../../Provider/Provider";

const Navbar = () => {
  const { user,setUser } = useContext(ContextProvider);
  const navigate = useNavigate();
  const userData = user?.data?.user;
  const link = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li>
        <NavLink to={"/registration"}>Registration</NavLink>
      </li>
      <li>
        <NavLink to={"/courses"}>Post Courses</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">{`Login Email: ${user? userData?.email: "Empty"}`}</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        <span className="mr-3">{`User: ${user? userData?.name: "Empty"}`}</span>
        {user ? (
          <button onClick={()=>{setUser(null);navigate("/")}} className="btn btn-success btn-sm">Logout</button>
        ) : (
          <Link to={"/login"} className="btn btn-warning btn-sm">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
