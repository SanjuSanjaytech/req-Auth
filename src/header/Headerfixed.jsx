import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';

const Headerfixed = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout()); 
    navigate('/');      
  };

  return (
    <header className='flex justify-between p-4 m-2'>
      <h1 className='text-white font-semibold text-xl'>Authentication</h1>

      <div className='flex space-x-4'>
        {isAuthenticated ? (
          <>
            <span className='text-gray-400 mx-3 my-1'>Welcome User</span>
            <button onClick={handleLogout} className='text-red-400 hover:underline'>
              Logout
            </button>
          </>
        ) : (
          <Link to={'/login'}>
            <h1 className='text-black bg-green-500 px-6 py-2 rounded'>Login</h1>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Headerfixed;
