import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserPage({ setIsAuthenticated }) {
  const navigate = useNavigate();

  function SignOut(e) {
    e.preventDefault();
    setIsAuthenticated(false);
    navigate('/');
  }

  return (
    <div className="flex flex-col items-center bg-black text-white h-screen w-screen">
      <div className="p-10 text-center bg-slate-900 rounded-md mb-8">
        <h1 className="text-3xl font-semibold">
          Welcome, {JSON.parse(localStorage.getItem('name'))}
        </h1>
        <p className="text-xl mt-2">
          Email: {JSON.parse(localStorage.getItem('email'))}
        </p>
      </div>
      <button
        onClick={SignOut}
        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
      >
        Sign Out
      </button>
    </div>
  );
}
