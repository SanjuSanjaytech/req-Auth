import React from 'react';

const UserCard = ({ user, onEdit, onDelete, highlight }) => (
  <div
    className={`p-4 rounded shadow text-center transition-all duration-300 ${
      highlight
        ? 'bg-yellow-200 border-2 border-yellow-400 scale-105'
        : 'bg-white'
    }`}
  >
    <img
      src={user.avatar}
      alt={user.first_name}
      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-2"
    />
    <p className="font-medium text-sm sm:text-base">
      {user.first_name} {user.last_name}
    </p>
    <p className="text-xs sm:text-sm text-gray-500">{user.email}</p>
    <div className="mt-2 space-x-2">
      <button
        onClick={onEdit}
        className="px-2 py-1 text-sm bg-yellow-400 rounded cursor-pointer"
      >
        Edit
      </button>
      <button
        onClick={onDelete}
        className="px-2 py-1 text-sm bg-red-500 text-white rounded cursor-pointer"
      >
        Delete
      </button>
    </div>
  </div>
);




export default UserCard;