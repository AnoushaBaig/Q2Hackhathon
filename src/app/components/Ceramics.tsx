"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { arr } from '../Product/Utils/productdata';

function Ceramics() {
  return (
    <div>
      <div className="pb-10 px-4 mx-auto max-w-screen-xl">
        <h1 className="text-2xl font-bold mb-6 text-start">New Ceramics</h1>
        
        {/* Grid Container with Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {arr.map((product) => (
            <div
              key={product.id}
              className="bg-[#F5F5F5] p-6 flex flex-col items-center rounded-md shadow-sm cursor-pointer transition-all"
            >
              <Link href={`/productdetails/${product.id}`}>
                <div className="relative w-full h-full group"> {/* Added 'group' for hover effects */}
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-75"
                  />
                  {/* Optional: Add overlay or text inside the image on hover */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-all duration-300 rounded-md text-white flex justify-center items-center font-bold">
                    Touch Me
                  </div>
                </div>
              </Link>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold hover:text-indigo-600 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-sm font-medium text-gray-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Collection Button */}
        <div className="w-full flex justify-center items-center px-5 py-3 mt-8 bg-indigo-800 text-white rounded-md font-medium hover:bg-indigo-700 transition-all max-w-xs mx-auto">
          <Link href="/Collection">View All Collection</Link>
        </div>
      </div>
    </div>
  );
}

export default Ceramics;
