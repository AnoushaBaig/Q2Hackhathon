import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-center bg-white my-8 mx-4 md:mx-9 overflow-x-hidden">
      {/* Left Content */}
      <div className="flex-1 bg-[#2A254B] text-white px-6 py-12 md:py-20 flex flex-col justify-center items-start">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-normal leading-tight mb-6">
          The furniture brand for the future, with timeless designs
        </h1>
        <button className="px-4 py-2 mt-11 bg-[#F9F9F926] text-white rounded-md hover:bg-indigo-700">
          View collection
        </button>
        <p className="mt-auto text-sm md:text-base lg:text-xl leading-relaxed">
          A new era in eco-friendly furniture with Avelon, the French luxury retail
          brand with nice fonts, tasteful colors, and a beautiful way to display
          things digitally using modern web technologies.
        </p>
      </div>

      {/* Right Content (Image) */}
      <div className="flex-1 w-full md:w-[570px] flex justify-center md:justify-end bg-white">
        <Image
          src="/right Image.png" // Replace with your image path
          alt="Modern Chair"
          width={570}
          height={400}
          className="object-contain w-full h-auto"
        />
      </div>
    </section>
  );
}

export default HeroSection;
