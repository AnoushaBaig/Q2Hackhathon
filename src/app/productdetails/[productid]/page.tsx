import React from "react";
import Image from "next/image";
import Detail from "@/app/components/Detail";
import PageIntro from "@/app/components/PageIntro";
import Card from "@/app/components/Card";
import { arr } from "@/app/Product/Utils/productdata";
import Brand from "@/app/components/Brand";

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
