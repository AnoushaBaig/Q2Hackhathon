import React from "react";
import Image from "next/image";

import PageIntro from "@/app/components/PageIntro";
import Card from "@/app/components/Card";
import { arr } from "@/app/Product/Utils/productdata";
import Brand from "@/app/components/Brand";
import Detail from "@/app/components/Detail";

const foryou = [
  {
    title: "The Dandy chair",
    image: "/Parent.png",
    price: 250,
    id: 1,
  },
  {
    title: "Rustic Vase Set",
    image: "/Parent (1).png",
    price: 155,
    id: 2,
  },
  {
    title: "The Silky Vase",
    image: "/Parent (2).png",
    price: 125,
    id: 3,
  },
  {
    title: "The Lucy Lamp",
    image: "/Photo.png",
    price: 399,
    id: 4,
  },
];

type ProductType = {
  title: string;
  image: string;
  price: string;
  id: number;
};


const ProdDetails = ({ params }: { params: { productid: string } }) => {
  const product = arr.find((data: ProductType) => data.id.toString() === params.productid);
 

  // Check if product is found before rendering the details
  if (!product) {
    return <div>Product not found</div>; // Handle the case where product is not found
  }

  return (
    <div className="max-w-[1280px] min-h-[80vh] p-3 m-auto">
      <div className="w-full flex md:flex-row flex-col md:py-12">
        <div className="md:w-3/5 w-full md:flex gap-3">
          <div className="w-full md:hidden block p-6 bg-[#F5F5F5] mb-3">
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 gap-3">
            <span className="w-32 md:h-28 bg-[#F5F5F5] p-4">
              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </span>
            <span className="w-32 md:h-28 bg-[#F5F5F5] p-4">
              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </span>
            <span className="w-32 md:h-28 bg-[#F5F5F5] p-4">
              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </span>
            <span className="w-32 md:h-28 bg-[#F5F5F5] p-4">
              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </span>
          </div>
          <div className="md:w-[500px] md:block hidden p-6 bg-[#F5F5F5]">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={600}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <Detail product={product} />
      </div>

      <PageIntro intro="You may Also like" nav="none" />
      <div className="w-full flex flex-wrap sm:gap-6 gap-3 justify-center my-8 mb-20">
        <Card arr={foryou} />
      </div>
      <Brand/>
    </div>

  );
};

export default ProdDetails;


// import { client } from "@/sanity/lib/client";
// import { product } from "@/sanity/schemaTypes/product";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect } from "react";

// interface ProductData {
//   id: string;
//   title: string;
//   price:number
//   publishedAt: string;
//    description:string,
//   "imageUrl": string;
  
// }

// useEffect(()=>{  
//   const getData= async ()=>{
//     try{
//   const products  =await client.fetch( `*[_type == "product"] {
//     _id,
//     title,
//     price,
//     description,
//    dimention,
//     "imageUrl": image.asset->url
//     features  
//   }`
//   ) 

//   const product =products.find(
//     (item:ProductData) =>item._id === productId
//   )
//   setProductDetails(product)


// } catch(error){
//   console.error("error fetching product:",error)
// }
//   }
//   getData()
  
// } [productId])
//   return (
//     <div className="container mx-auto px-4 py-12 md:px-15">
//       <div className="max-w-6xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
//       <h1 className="text-4xl font-bold mb-8 text-center">Novels Blog</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
//         {product.map((item) => (
//           <div
//             key={item.id}
//             className=" rounded shadow-md p-4 hover:shadow-lg transition-shadow duration-300 group"
//             // className="bg-white rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group/"
//           >
//             {/* Image container with proper overflow control */}
//             <div className=" overflow-hidden rounded-md mb-4">
//               <Image
//                 src={item.imageUrl}
//                 alt={item .title}
//                 width={500}
//                 height={300}
//                 className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
//               />
//             </div>

//             <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
//             <p className="text-sm text-gray-500 mb-4">
//               {new Date(item.publishedAt).toLocaleDateString("en-US", {
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//               })}
//             </p>

//             <div className="card-actions justify-center mt-4">
//               <Link href={`/AllProducts/${product.currentSlug}`}>
//                 {/* <button className="btn bg-gradient-to-r from-teal-900 to-blue-800 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 text-white px-4 py-2 rounded-sm shadow-sm">
//                   Read More
//                 </button> */}

// <button
//   className="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
//   type="submit"
// >
//   ReadMore
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 16 19"
//     className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-gray-700 p-2 rotate-45"
//   >
//     <path
//       className="fill-gray-800 group-hover:fill-gray-800"
//       d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
//     ></path>
//   </svg>
// </button>


//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//       </div>
//     </div>
//   );
// }
