"use client";

import Link from "next/link";
import { useEffect, useState } from "react"
import { FaAlignJustify,  FaShoppingCart } from 'react-icons/fa';
import { BsPersonExclamation } from "react-icons/bs";
import { fetchCategories } from "../../../utils/fechCategories";
import { useCart } from "../../../context/Cart_Context";
import SearchBar from "./Searchbar";

interface Category {
  _id: string;
  name: string;
}

const Header = () => {
  const { cartCount } = useCart(); // cartCount from context
  const [categories, setCategories] = useState<Category[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Fetch categories when the component mounts
  useEffect(() => {
    const getCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    getCategories();
  }, []);

  return (
    <header className="max-w-[1440px] h-[132px] flex flex-col items-center px-10 lg:w-full mx-auto">
      {/* Top Bar */}
      <div className="border-b-[0.5px] border-[#0000004f] h-1/2 w-full mx-auto flex justify-between items-center py-3">
        {/* Left: Search icon */}
        <div className="flex items-center gap-3 lg:flex-1">
          <div className="relative">
            <SearchBar  />
          </div>
        </div>

        {/* Center: Logo */}
        <Link href="/">
          <h1 className=" lg:flex text-black text-2xl font-bold lg:text-4xl">Avion</h1>
        </Link>

        {/* Right: Cart and Profile */}
        <div className="flex gap-3 text-xl lg:flex-1 justify-end relative">
          {/* Shopping Cart Icon */}
          <Link href="/ShoppingBasket" className="relative">
            <FaShoppingCart size={24} />
            {/* Badge for cart quantity */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-indigo-950 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Profile Icon */}
          <Link href="/myaccount">
            <BsPersonExclamation size={24} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu Toggle (Hamburger Menu) */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden flex flex-col font-light cursor-pointer mt-2 justify-center text-right absolute top-4 right-4"
      >
        <FaAlignJustify size={30} className="text-black" />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 right-5 bg-slate-200 shadow-lg p-4 z-50">
          <nav className="flex flex-col gap-4 text-lg text-[#726E8D]">
            <Link
              href="/"
              className="hover:text-[#5a526c]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Link for All Products */}
            <Link
              href="/AllProducts"
              className="hover:text-[#5a526c]"
              onClick={() => setIsOpen(false)}
            >
              All Products
            </Link>

            {/* Dynamically render category links */}
            {categories.map((category) => (
              <Link
                key={category._id}
                href={`/Category/${category._id.toString()}`} // Using [id] instead of slug
                className="hover:text-[#5a526c]"
                onClick={() => setIsOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex w-[675px] justify-between items-center h-1/2 text-[#726E8D] mt-4">
        {/* Link for All Products */}
        <Link
          href="/AllProducts"
          className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm md:text-base font-bold lg:text-lg text-gray-600 hover:text-black"
        >
          All Products
        </Link>

        {/* Dynamically render category links */}
        {categories.map((category) => (
          <Link
            key={category._id}
            href={`/Category/${category._id.toString()}`} // Using [id] instead of slug
            className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16 text-sm md:text-base font-bold lg:text-lg text-gray-600 hover:text-black"
          >
            {category.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
