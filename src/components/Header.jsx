import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-slate-900 text-white text-2xl">
      <div className="flex justify-between items-center p-5">
        <NavLink to="/" className="car-head text-3xl">
          #PostEZEN
        </NavLink>
        <div className="flex space-x-8 text-base">
          <NavLink
            to="/SignIn"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow-300 underline'
                : 'hover:text-yellow-300 transition-colors'
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/SignUp"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow-300 underline'
                : 'hover:text-yellow-300 transition-colors'
            }
          >
            Sign up
          </NavLink>
        </div>
      </div>
    </header>
  );
}
