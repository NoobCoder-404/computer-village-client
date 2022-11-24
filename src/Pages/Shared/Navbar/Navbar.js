import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menuItem = (
    <React.Fragment>
      <li>
        <Link to={'/home'}>Home</Link>
      </li>
      <li>
        <Link to={'/products'}>Products</Link>
      </li>
      <li>
        <Link to={'/cart'}>Cart</Link>
      </li>
      <li tabIndex={0}>
        <a className="justify-between">
          User
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </a>
        <ul className="m-3 p-2 shadow-lg w-36 rounded-md">
          <li className="bg-base-200 rounded-t-md">
            <a>Seller</a>
          </li>
          <li className="bg-base-200 rounded-b-md">
            <a>Buyer</a>
          </li>
        </ul>
      </li>
      <li>
        <Link>Log Out</Link>
      </li>
      <li>
        <Link to={'/login'}>Login</Link>
      </li>
      <li>
        <Link to={'/register'}> Register</Link>
      </li>
    </React.Fragment>
  );
  return (
    <div>
      <div className="navbar bg-base-100 flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2  shadow bg-base-100 rounded-box w-52">
              {menuItem}
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost normal-case text-xl">
            Computer Village
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
