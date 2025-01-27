import Image from "next/image";
import Link from "next/link";
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
        <Link href={`/AllProducts`}> View Collection </Link>
        </button> 
      </div>
    </div>
  );
};

export default Pagetwo;


// import Image from 'next/image';

// interface ProductCardProps {
//   imageSrc: string;
//   title: string;
//   price: string | number;
//   large?: boolean;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, price}) => {
//   return (
//     <div className= "flex flex-col items-start gap-4 h-[400px] relative">
//       {/* Image Section */}
//       <div className= "relative md:h-[300px] w-full bg-gray-100 hidden md:block">
//         <Image src={imageSrc} alt={title} fill className="object-cover" />
//       </div>
//       {/* Text Section */}
//       <div className="flex flex-col items-start gap-2 md:block">
//         <h4 className="font-clash text-[20px] font-normal text-[#2A254B] leading-[140%]">
//           {title}
//         </h4>
//         <p className="font-satoshi text-[18px] font-normal text-[#2A254B] leading-[150%]">
//           £{price}
//         </p>
//       </div>
//     </div>
//   );
// };

// const ListingsTwo = () => {
//   return (
//     <div className="w-full max-w-[1440px] mx-auto px-4 py-8 bg-white">
//       {/* Section Title */}
//       <h2 className="text-[32px] font-normal text-[#2A254B] leading-[140%] mb-6">
//         Our Popular Products
//       </h2>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-4 gap-8">
//         {/* Large Card */}
//         <div className="col-span-2">
//           <ProductCard
//             imageSrc="/sofa.png"
//             title="The Poplar Suede Sofa"
//             price="980"
//             large
//           />
//         </div>

//         {/* Small Cards */}
//         <div className="col-span-1">
//           <ProductCard imageSrc="/img1.png" title="The Dandy Chair" price="250" />
//         </div>
//         <div className="col-span-1">
//           <ProductCard imageSrc="/chair.png" title="The Dark Chair" price="250" />
//         </div>
//       </div>

//       {/* View More Button */}
//       <div className="mt-8 flex justify-center">
//         <button className="px-8 py-4 bg-gray-100 text-[16px] font-normal text-[#2A254B]">
//           View collection
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ListingsTwo;