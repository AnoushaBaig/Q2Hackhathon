"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaAlignJustify, FaHeart, FaSearch, FaShoppingCart } from 'react-icons/fa';


function Header() {
  const [open, setOpen] = useState(false); // State to toggle menu

  return (
    <header className="border-y-2 font-bold bg-neutral-100">
      {/* Top Section: Search Bar & Icons */}
      <div className="flex justify-between items-center px-6 py-3 bg-white">
        <div className="flex items-center bg- rounded-md w-[50%] lg:w-[30%]">
          {/* <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-gray-200 text-sm outline-none p-2 w-full rounded-md"
          /> */}
          < FaSearch className="text-gray-500 mx-2" />
        </div>

        {/* Wishlist and Cart Icons */}
        <div className="flex items-center space-x-4">
          <Link href="/#" className="text-gray-600 hover:text-black">
            <FaHeart className="w-6 h-6" />
          </Link>
          <Link href="/Cart" className="text-gray-600 hover:text-black">
            <FaShoppingCart className="w-6 h-6" />
          </Link>
          
          <button
            className="text-gray-600 hover:text-black md:hidden"
            onClick={() => setOpen(!open)}
          >
            < FaAlignJustify className="w-6 h-6" />
          </button>
        </div>
      </div>

      
      <div className="flex justify-center items-center bg-white ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
          Avion
        </h1>
      </div>

      {/* Navbar */}
      <nav
        className={`${
          open ? "block" : "hidden"
        } md:flex justify-center bg-white py-2`}
      >
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 text-sm md:text-base lg:text-lg text-gray-600">
          <li className="hover:text-black">
            <Link href="/">Plant pots</Link>
          </li>
          <li className="hover:text-black">
            <Link href="/">Ceramics</Link>
          </li>
          <li className="hover:text-black">
            <Link href="/">Tables</Link>
          </li>
          <li className="hover:text-black">
            <Link href="/">Chairs</Link>
          </li>
          <li className="hover:text-black">
            <Link href="/">Crockery</Link>
          </li>
          <li className="hover:text-black">
            <Link href="/">Tableware</Link>
          </li>
          <li className="hover:text-black">
            <Link href="/Collection">Product</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
