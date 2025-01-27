"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./header";

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"]{ 
        _id, 
        name, 
        price, 
        "imageUrl": 
            image.asset->url 
        }`;
        const products = await client.fetch(query);
        setProducts(products);
      } catch (error) {
        setError(error as Error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <header>
        <Navbar />
      </header>
      <div className="container mx-auto px-4 mt-8">
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {products.map((product) => (
            <Link
              key={product._id}
              href={`/AllProducts/${product._id}`}
              className="relative block group w-full max-w-[305px] h-[462px] rounded-lg overflow-hidden transform transition duration-200 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              {/* Product Image */}
              <div className="relative w-full h-[75%] bg-gray-200 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-300 transform group-hover:scale-110"
                />
              </div>
              {/* Product Details */}
              <div className="p-4 flex flex-col gap-2 transition-transform duration-300 group-hover:translate-y-2">
                <h4 className="text-xl font-semibold text-[#2A254B] group-hover:text-[#38626e] transition duration-300">
                  {product.name}
                </h4>
                <p className="text-lg font-medium text-[#2A254B] group-hover:text-[#38626e] transition duration-300">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
