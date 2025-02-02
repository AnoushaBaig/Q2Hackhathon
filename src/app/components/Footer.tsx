import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2A254B] text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        {/* Footer Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
          {/* Menu Section */}
          <div>
            <h2 className="font-medium text-xl">Menu</h2>
            <ul className="mt-4 space-y-3 text-zinc-200 font-light cursor-pointer">
              <li>New Arrivals</li>
              <li>Best Sellers</li>
              <li>Recently Viewed</li>
              <li>Popular This Week</li>
              <Link href='/AllProducts'>
              <li>All Product</li></Link>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h2 className="font-medium text-xl">Categories</h2>
            <ul className="mt-4 space-y-3 text-zinc-200 font-light cursor-pointer">
              <li>Crockery</li>
              <li>Furniture</li>
              <li>HomeWare</li>
              <li>Plant Pots</li>
              <li>Chairs</li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h2 className="font-medium text-xl">Our Company</h2>
            <ul className="mt-4 space-y-3 text-zinc-200 font-light cursor-pointer">
              <li>About Us</li>
              <li>Vacancies</li>
              <Link href='/myaccount'>
              <li>Contact us</li></Link>
              <li>Privacy</li>
              <li>Return Policy</li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h2 className="font-medium text-xl">Contact us</h2>
            <p className="mt-4 text-zinc-200 font-light">Join our mailing list</p>
            <div className="mt-4 flex items-center border border-white rounded">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black text-white p-2 flex-grow outline-dotted rounded-lg"
              />
              <button className="p-2">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-4 flex space-x-4 justify-center sm:justify-start">
          <Link href={'https://www.linkedin.com/in/anousha-baig-021a832b6/'}>
          <FaLinkedinIn /> </Link>
          <Link href={'https://www.linkedin.com/in/anousha-baig-021a832b6/'}>
          <FaTwitter /></Link>
           <Link href={'https://www.instagram.com/baig_anousha/'}>

          <FaInstagram /></Link>
          <Link href={'https://www.linkedin.com/in/anousha-baig-021a832b6/'}>
          <FaFacebook /> </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-start border-t border-zinc-800 text-white">
        <p className="py-6">© Copyright 2022 Avion LTD</p>
      </div>
    </footer>
  );
};

export default Footer;
