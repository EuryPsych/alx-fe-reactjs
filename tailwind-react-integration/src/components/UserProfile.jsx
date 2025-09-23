// src/components/UserProfile.jsx
import React from 'react';

const UserProfile = () => {
  return (
    <div className="bg-gray-100 p-4 sm:p-8 max-w-xs sm:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <div className="text-center">
        <img 
          src="https://via.placeholder.com/150" 
          alt="User Profile" 
          className="rounded-full w-24 h-24 sm:w-36 sm:h-36 mx-auto mb-4"
        />
        <h1 className="text-lg sm:text-xl text-blue-800 font-semibold mb-2">
          John Doe
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Developer at Example Co. Loves to write code and explore new technologies.
        </p>
      </div>
    </div>
  );
};

export default UserProfile;