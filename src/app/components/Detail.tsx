"use client";
import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { useState } from "react";
import Link from "next/link";

type ProductType = {
  title: string;
  image: string;
  price: string;
  id: number;
};

const Detail = ({ product }: { product: ProductType }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      {/* Product Details Section */}
      <div className="flex flex-col md:flex-row md:space-x-8 md:px-10 px-4 py-6">
        <div className="md:w-[50%] lg:w-full">  
           <h1 className="sm:text-2xl text-xl font-medium">{product.title}</h1>
          <span className="text-xl block my-2">£{product.price}</span>
          <h1 className="text-black mt-4">The Description</h1>
        
          <p className="text-sm py-3 border-b-2 border-zinc-300 mb-6">
            A timeless design, with premium materials, features as one of our most popular and iconic pieces.
            The Dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
          </p> 
          <ul>
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>  
         
          {/* Additional Options */}
          <div className="flex items-center py-3 gap-2">
            <span className="text-lg mr-4">Colours:</span>
            <button className="w-4 h-4 rounded-full focus:outline-none focus:ring-1 focus:ring-zinc-800 bg-stone-700"></button>
            <button className="w-4 h-4 rounded-full focus:outline-none focus:ring-1 focus:ring-zinc-800 bg-zinc-500"></button>
          </div>

          <div className="flex items-center py-3 gap-12">
            <span className="text-lg mr-4">Dimention:</span>
            {/* <button className="w-8 h-8 text-xs border-zinc-400 border rounded-sm">XS</button>
            <button className="w-8 h-8 text-xs border-zinc-400 border rounded-sm">S</button>
            <button className="w-8 h-8 text-xs border-zinc-400 border rounded-sm">M</button>
            <button className="w-8 h-8 text-xs border-zinc-400 border rounded-sm">L</button>
            <button className="w-8 h-8 text-xs border-zinc-400 border rounded-sm">XL</button> */}
            <h1 className="w-8 h-8"> Height</h1>
            <h1 className="w-8 h-8"> Weight</h1>
            <h1 className="w-8 h-8"> Depth</h1>

          </div>

          {/* Quantity Selector */}
          <div className="flex flex-wrap items-center py-3 gap-2">
            <div className="flex items-center border border-zinc-400 rounded-md">
              <span
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border-r border-zinc-400 text-lg flex justify-center items-center hover:bg-gray-700 hover:text-white"
              >
                <LuMinus />
              </span>
              <span className="md:px-10 px-8 font-medium">{quantity.toString().padStart(2, "0")}</span>
              <span
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border-l border-zinc-400 text-lg flex justify-center items-center hover:bg-slate-700 hover:text-white"
              >
                <GoPlus />
              </span>
            </div>
            
            <button className="rounded-sm bg-[#2A254B] text-white md:px-8 px-5 sm:py-2 py-3 sm:text-base text-xs">
            <Link href={"/Cart"}>Add to cart</Link>
            </button>
            <span className="w-10 h-10 border border-zinc-400 rounded-md flex justify-center items-center p-2">
                    <Image src={"/heart.png"} alt="" width={100} height={100} className="w-full h-full object-cover" />
                </span>
            </div>

            <div className="flex items-center py-3 gap-2 w-full">
                <div className="w-full border border-zinc-400 rounded-md">
                    <div className="w-full border-b border-zinc-400 flex items-center gap-5 p-4">
                        <div className="w-10 h-10 p-1">
                            <Image src={"/delivery.png"} alt="" width={600} height={600} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base font-medium">Free Delivery</span>
                            <span className="text-sm">Enter your postal code for Delivery Availability</span>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-5 p-4">
                        <div className="w-10 h-10 p-1">
                            <Image src={"/return.png"} alt="" width={600} height={600} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base font-medium">Return Delivery</span>
                            <span className="text-sm">Free 30 Days Delivery Returns. Details</span>
                        </div>
                    </div>
                </div>
                </div>
          </div>
        </div>
      </div>
      
      

        
  )
};

export default Detail;
