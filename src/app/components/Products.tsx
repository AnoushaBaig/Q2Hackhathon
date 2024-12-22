import Image from "next/image";
import React from "react";

const Pagetwo = () => {
  return (
    <div className="border-b py-12 px-3">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6 text-start">Our Popular Products</h1>

      {/* Horizontal Scrollable Section */}
      <div className="w-full flex overflow-x-auto gap-4 py-8 scrollbar-hide">
        {/* Product Images */}
        <div className="flex-shrink-0">
          <Image src="/sofa.png" alt="Sofa" width={700} height={700} className="rounded-lg" />
        </div>
        <div className="flex-shrink-0">
          <Image src="/Parent.png" alt="Parent" width={400} height={300} className="rounded-lg" />
        </div>
        <div className="flex-shrink-0">
          <Image src="/Parent (1).png" alt="Parent 1" width={400} height={300} className="rounded-lg" />
        </div>
        <div className="flex-shrink-0">
          <Image src="/Parent (2).png" alt="Parent 2" width={400} height={300} className="rounded-lg" />
        </div>
        <div className="flex-shrink-0">
          <Image src="/Photo.png" alt="Photo" width={400} height={300} className="rounded-lg" />
        </div>
      </div>

      {/* View All Products Button */}
      <div className="w-full flex justify-center">
        {/* <button className="px-5 py-3 text-white bg-[#F9F9F9] rounded-sm text-base mt-10">

          View All Products
        </button> */}
        <button className="px-5 py-3 mt-4 bg-indigo-800 text-white rounded-md font-medium hover:bg-indigo-700 transition-all">
          View Collection
        </button> 
      </div>
    </div>
  );
};

export default Pagetwo;
