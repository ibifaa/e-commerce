"use client";
import React from "react";
import Header from "./header";

function HeroSection() {
  return (
    <section className="hero-section text-black min-h-full  body-font bg-[url('/images/png/hero-img.png')]  sm:bg-cover sm:bg-center bg-no-repeat px-[20px]">
      <div className="m-auto">
        <Header />
      </div>

      <div className="container mx-auto flex px-5  flex-col w-full h-full">
        <div className="my-[25%] w-full sm:pr-24  flex flex-col sm:items-start sm:text-left mb-16 sm:mb-0 place-item-end ">
          <div className="sm:mx-[40px] mx-[20px]">
            <h1 className="title-font sm:text-4xl text-[3rem] mb-4  font-bold text-center sm:text-left">
              Mixed Tiles
            </h1>
            <p className="mb-8 leading-relaxed text-center sm:text-left">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod..
            </p>
            <div className="flex  sm:justify-left my-[15px] ">
              <button className="inline-flex text-black border-[1px] border-black py-2 px-6 focus:outline-none hover:bg-gray-600 hover:text-white rounded text-lg">
                SHOP COLLECTION
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="sm:border-[black] sm:m-[40px] py-[20px]" />
    </section>
  );
}

export default HeroSection;
