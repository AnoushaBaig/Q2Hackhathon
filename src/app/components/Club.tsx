import React from 'react';

function Club() {
  return (
    <div className="flex justify-center items-center h-96 bg-gray-100">
      <div className="text-center w-[90%] lg:w-[50%] p-4">
        {/* Heading */}
        <h1 className="text-2xl lg:text-3xl font-bold mb-4">
          Join the club and get the benefits
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 mb-6 text-sm lg:text-base">
          Sign up for our newsletter and receive exclusive offers on new ranges, 
          sales, pop-up stores, and more.
        </p>

        {/* Input Section */}
        <div className="flex items-center bg-white rounded-md shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-gray-100 text-sm outline-none p-3 w-full"
          />
          <button className="bg-[#2A254B] text-white px-5 py-3 text-sm font-medium hover:bg-[#1f1b3d] transition-all">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Club;
