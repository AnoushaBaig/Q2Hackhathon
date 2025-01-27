// "use client"
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import Link from "next/link";

// function Allproducts() {
//   // Dummy product data
//   const products = [
//     { id: 1, image: "/Parent.png", name: "The Dandy chair" },
//     { id: 2, image: "/Parent (1).png", name: "Rustic Vase Set" },
//     { id: 3, image: "/Parent (2).png", name: "The Silky Vase" },
//     { id: 4, image: "/Photo.png", name: "The Lucy Lamp" },
//     { id: 5, image: "/lamp.png", name: "The Dandy chair" },
//     { id: 6, image: "/white.png", name: "Rustic Vase Set" },
//     { id: 7, image:"/yellow.png", name: "The Silky Vase" },
//     { id: 8, image: "/Parent (3).png", name: "The Lucy Lamp" },
//     { id: 9, image: "/Parent.png", name: "The Dandy chair" },
//     { id: 10, image: "/Parent (1).png", name: "Rustic Vase Set" },
//     { id: 11, image: "/Parent (2).png", name: "The Silky Vase" },
//     { id: 12, image: "/Photo.png", name: "The Lucy Lamp" },
//   ];

//   return (
//     <>
//       <div className="relative flex items-center justify-center w-full lg:w-full">
//         {/* Background Image */}
//         <Image
//           src="/sssc.png"
//           alt="All Products"
//           width={300}
//           height={300}
//           className="w-full h-auto object-cover rounded-md"
//         />

    
//         <div className="absolute w-full h-full flex items-center justify-center">
//           <span className="text-lg lg:text-2xl font-bold text-white lg:absolute lg:top-4 lg:left-4 lg:text-left text-center">
//             All Products
//           </span>
//         </div>
//       </div>

//       <div className="pb-10 px-4 mx-9">
//         <h1 className="text-2xl font-bold mb-2 text-start">Our Products</h1>

      
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="border border-gray-300 rounded-md p-4 shadow-md hover:shadow-2xl transition-shadow duration-500 transform hover:scale-105 hover:border-indigo-500 hover:bg-gray-100"
//             >
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 width={300}
//                 height={300}
//                 className="w-full h-auto object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-110"
//               />
//               <h2 className="text-lg font-medium mt-2 text-center text-gray-700 transition-all duration-300 group-hover:text-indigo-700">
//                 {product.name}
//               </h2>
//             </div>
//           ))}
//         </div>

//         {/* View all Collection Button */}
//         <div className="w-48 flex justify-center items-center px-5 py-3 mt-4 mx-auto bg-indigo-800 text-white rounded-md font-medium hover:bg-sky-700 transition-all">
//           <Link href="/productdetails">View all Collection</Link>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Allproducts;




