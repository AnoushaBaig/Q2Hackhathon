import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-center h-screen bg-white my-8 mx-9">
      {/* Left Content */}
      <div className="flex-1 text-black px-6 py-12 md:py-20 flex flex-col justify-center items-start">
        <h1 className="text-2xl md:text-4xl lg:text-2xl font-normal leading-tight mb-6">
          From a studio in London to a global brand with over 400 outlets
        </h1>
        <p className="text-sm md:text-base lg:text-xl leading-relaxed mb-4">
          When we started Avion, the idea was simple. Make high quality
          furniture affordable and available for the mass market.
        </p>
        <p className="text-sm md:text-base lg:text-xl leading-relaxed mb-6">
          Handmade, and lovingly crafted furniture and homeware is what we
          live, breathe, and design so our Chelsea boutique became the hotbed
          for the London interior design community.
        </p>
        <button className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-200">
          Get in touch
        </button>
      </div>

      {/* Right Content */}
      <div className="flex-1 flex justify-center items-center bg-white">
        <Image
          src="/Image.png" // Replace with your image path
          alt="Modern Chair"
          width={570}
          height={400}
          className="object-contain"
        />
      </div>
    </section>
  );
}

export default HeroSection;
