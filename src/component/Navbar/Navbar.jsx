import React from 'react';
import { FaRegHeart } from "react-icons/fa6";

const Navbar = () => {

    const Links = <>

        <li><a className='text-base text-white font-medium'>Home</a></li>
        <li><a className='text-base text-white font-medium'>Statistics</a></li>
        <li><a className='text-base text-white font-medium'>Dashboard</a></li>
    </>

    return (
      <div className="navbar bg-[#9538E2] ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {Links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl md:text-2xl text-white font-bold">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {Links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-slate-50 hover:bg-slate-50">
                  <div className="indicator">
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="badge p-1 badge-sm indicator-item">0</span>
                  </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                  </div>
                </div>
              </div>
          </div>
          <div tabIndex={0} role="button" className="btn btn-ghost ml-1 md:ml-5 btn-circle bg-slate-50 hover:bg-slate-50">
                  <div className="indicator ">
                  <FaRegHeart />
                    <span className="badge p-1 badge-sm indicator-item">0</span>
                  </div>
              </div>

        </div>
      </div>
    );
};

export default Navbar;