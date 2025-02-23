import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useEffect, useState } from "react";
 // Ensure this path is correct
import { useCart } from "../../../../context/Cart_Context";
// import SearchBar from "@/components/SearchBar";
import { fetchCategories } from "../../../../utils/fechCategories";

interface Category {
  _id: string;
  name: string;
}

export default function Navbar() {
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
    <header className="w-full h-[80px] bg-white border-b border-gray-200">
    <div className="container mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-16 h-full">
      {/* Left: Logo */}
      <Link href="/" className="text-[#22202E] text-2xl font-semibold">
        Avion
      </Link>
  
      {/* Center: Categories */}
      <nav className="hidden lg:flex flex-1 justify-center items-center gap-8 text-[#726E8D]">
        <Link
          href="/AllProducts"
          className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
        >
          All Products
        </Link>
        {categories.map((category) => (
          <Link
            key={category._id}
            href={`/Category/${category._id.toString()}`}
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            {category.name}
          </Link>
        ))}
        
      </nav>
  
      {/* Right: Search, Cart, and Profile */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="hidden sm:flex relative">
          {/* <faSearchBar /> */}
        </div>
  
        {/* Shopping Cart Icon */}
        <Link href="/ShoppingBasket" className="relative">
          <MdOutlineShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-indigo-950 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
  
        {/* Profile Icon */}
        <Link href="/">
          <CgProfile size={24} />
        </Link>
  
        {/* Hamburger Menu for Mobile */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1 cursor-pointer text-8xl"
        >
          <span className="block w-6 h-1 bg-black"></span>
          <span className="block w-6 h-1 bg-black"></span>
          <span className="block w-6 h-1 bg-black"></span>
        </div>
      </div>
    </div>
  
    {/* Mobile Menu */}
    {isOpen && (
      <div className="lg:hidden absolute top-0 left-0 right-5 bg-slate-200 shadow-lg p-4 z-50 ">
        <nav className="flex flex-col gap-4 text-lg text-[#726E8D]">
          <Link
            href="/AllProducts"
            className="hover:text-[#5a526c]"
            onClick={() => setIsOpen(false)}
          >
            All Products
          </Link>
          {categories.map((category) => (
            <Link
              key={category._id}
              href={`/Category/${category._id.toString()}`}
              className="hover:text-[#5a526c]"
              onClick={() => setIsOpen(false)}
            >
              {category.name}
            </Link>
          ))}
          <Link
            href="/About"
            className="hover:text-[#5a526c]"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <div className="flex flex-col gap-4 mt-4">
            {/* <SearchBar /> */}
            <Link href="/ShoppingBaskets" className="relative flex items-center">
              <MdOutlineShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link href="/About" className="flex items-center">
              <CgProfile size={24} />
            </Link>
          </div>
        </nav>
      </div>
    )}
  </header>  
  );
}