import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [cart] = useCart();
  const defaultShopCategory = "pizza";

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out user:", error);
      });
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2 bg-black/30! text-white w-40 z-10 rounded-box backdrop-blur-md">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link to={`/shop/${defaultShopCategory}`}>Shop</Link>
        {/* <Link to="/shop">Shop</Link> */}
      </li>
      {
        user && (
           <li>
        <Link to="/dashboard/mycart">
          <button className="btn bg-transparent border-0 text-white p-0 mt-[-10px]">
            <FaCartShopping /> <div className="badge badge-sm badge-warning shadow-none border-0">{cart?.length || 0}</div>
          </button>
        </Link>
        {/* <Link to="/shop">Shop</Link> */}
      </li>
        )
      }
     
    </>
  );
 
  return (
    <div className="navbar fixed max-w-7xl z-10 bg-black/30 text-white shadow-sm">
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
            className="menu menu-sm dropdown-content bg-black/30! text-white rounded-box z-50 mt-3 w-52 p-2 shadow backdrop-blur-md"
          >
            {/* <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li> */}
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100 w-40 z-1">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li> */}
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            {user.email}{" "}
            <button onClick={handleSignOut} className="btn mx-5">
              Logout
            </button>
          </>
        ) : (
          <>
            {" "}
            <Link to="/login" className="btn mr-5">
              Login
            </Link>
            <Link to="/registration" className="btn">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
