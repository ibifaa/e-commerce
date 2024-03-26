import React from "react";
import Card from "./card";
import Image from "next/image";

function Content() {
  let cardData = [
    {
      src: "/images/png/tilesOne.png",
      price: 300,
      name: "Black Jacket",
      status: "NEW",
    },

    {
      src: "images/png/product-new-img-1.jpg.png",
      price: 300,
      name: "Leather Jacket",
      status: "",
    },

    {
      src: "images/png/Main-product-list-3.jpg.png",
      price: 220,
      name: "BLACK OUTFIT",
      status: "SALE",
    },
    {
      src: "/images/png/Main-product-list-4.jpg.png",
      price: 120,
      name: "Black Jacket",
      status: "",
    },

    {
      src: "images/png/product-new-img-1.jpg.png",
      price: 220,
      name: "BLACK OUTFIT",
      status: "",
    },
    {
      src: "/images/png/Main-product-list-2.jpg.png",
      price: 300,
      name: "OIK JACKETS",
      status: "",
    },

    {
      src: "/images/png/Main-product-list-7.jpg.png",
      price: 600,
      name: "BIEGE T-SHIRT",
      status: "",
    },
    {
      src: "/images/png/Main-product-list-8.jpg.png",
      price: 45,
      name: "black hat",
      status: "SOLD",
    },
  ];

  let imageData = [
    "/images/png/div.qodef-e (1).png",
    "/images/png/div.qodef-e (2).png",
    "/images/png/div.qodef-e (3).png",
    "/images/png/div.qodef-e (4).png",
    "/images/png/div.qodef-e (5).png",
    "/images/png/div.qodef-e (1).png",
    "/images/png/div.qodef-e (2).png",
    "/images/png/div.qodef-e (2).png",
  ];

  let offeringData = [
    {
      src: "/images/svg/svg (1).svg",
      offer: "Fast Delivery",
    },

    {
      src: "/images/svg/svg (2).svg",
      offer: "Free Returns",
    },

    {
      src: "/images/svg/Frame.svg",
      offer: "Secured Checkout",
    },
    {
      src: "/images/svg/svg (3).svg",
      offer: "Order Tracking",
    },
  ];

  return (
    <section className=" body-font text-black w-full my-[50px]">
      <p className="text-center w-[90%] sm:w-[60%] m-auto text-[29px] leading-[39px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </p>

      <div className="container py-24 mx-auto  font-medium w-[90%] m-auto">
        <nav className="flex justify-between my-[20px]">
          <div className="flex gap-[30px] text-[12px] leading-[15px]">
            {" "}
            <a> ALL PRODUCTS </a>
            <a>LIFESTYLE </a>
            <a>BRAND</a>
            <a>OUTWEAR</a>
          </div>

          <div>
            <select>
              <option value="">FILTER</option>
            </select>
          </div>
        </nav>
        <div className="grid lg:grid-cols-4 sm:grid-cols-1">
          {cardData.map((item, index) => (
            <Card
              key={index}
              src={item.src}
              price={item.price}
              name={item.name}
              status={item.status}
            />
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1  py-[50px] w-full ">
        <div className="bg-[url('/images/png/home-image.png')] bg-[length:100%_100%] bg-top p-[10%] bg-no-repeat flex justify-center items-center w-full sm:h-[600px] h-[500px]">
          <div className="m-auto pt-[10px]">
            <p className="text-black font-bold text-[1.3rem] text-center py-[10px]">
              MAN
            </p>
            <button className="inline-flex text-black border-[1px] border-black py-1 px-4 focus:outline-none hover:bg-gray-600 hover:text-white rounded">
              SHOP COLLECTION
            </button>
          </div>
        </div>

        <div className="bg-[url('/images/png/main-home-category-img-5.jpg.png')] bg-[length:100%_100%] bg-center-top p-[10%] bg-no-repeat  flex justify-center items-center w-full sm:h-[600px] h-[500px]">
          <div className="m-auto sm:pt-[10px]">
            <p className="text-black font-bold text-[1.3rem] text-center py-[10px]">
              WOMAN
            </p>
            <button className="inline-flex text-black border-[1px] border-black py-1 px-4 focus:outline-none hover:bg-gray-600 hover:text-white rounded">
              SHOP COLLECTION
            </button>
          </div>
        </div>
      </div>

      <div className="m-auto h-[600px] sm:h-[300px] ">
        <div className="">
          <img
            src="images/svg/svg.qodef-svg--quote-testimonials.svg"
            className="m-auto my-[20px]"
            alt="icon"
          />
          <p className="text-[20px] sm:text-[29px] sm:w-[60%] w-[90%] text-center leading-[30px] sm:leading-[50px] m-auto my-[20px]">
            Accusantium doloremque laudantium, totam rem aperiam. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem.
          </p>
        </div>
        <div className="flex sm:gap-[30px] gap-[10px] flex-wrap justify-center  sm:my-[20px]">
          <img
            src="images/svg/Video-clients-img-2.png.svg"
            alt="botique icon"
          />
          <img src="images/svg/Video-clients-img-5.png.svg" alt="icon" />
          <img src="images/svg/div.qodef-e-inner.svg" alt="company logo" />
          <img src="images/svg/Video-clients-img-2.png.svg" alt="logo" />
          <img src="images/svg/Video-clients-img-3.png.svg" alt="logo" />
        </div>
      </div>

      <div className="bg-[url('/images/png/div.elementor-background-overlay.png')] bg-top bg-auto bg-contain sm:bg-cover bg-no-repeat sm:w-[90%] m-auto sm:my-[50px] h-[180px] sm:h-[500px]">
        <div className="text-center text-white font-bold m-auto pt-[15%] sm:pt-[18%]">
          <h4 className="text-[2rem] text-center ml-[10px]">
            ONYX <span>x</span> THE FLOW
          </h4>
          <button className="underline my-[10px] text-[0.7rem] text-center">
            READ MORE
          </button>
        </div>
      </div>

      <div className="my-[50px]">
        <div className="text-center my-[40px]">
          <h3 className="text-[35px] leading-[42px]">Read Our Blog Posts</h3>
          <p className="sm:text-[18px] sm:w-[30%] w-[40%] leading-[22px] text-center m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing ectetur elit, sed
            do eiusmod.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-[10px] place-content-center gap-[20px]">
          <div>
            <div className=" bg-[url('/images/png/Blog-list-img-1.jpg.png')] bg-top bg-auto  m-auto  h-[500px]">
              <button className=" bg-white text-black border-black border-[1px] p-[4px] m-[10px]">
                SEPTEMBER 29, 2022
              </button>
            </div>
            <div className="text-center">
              <p className="text-[16px] leading-[16px] my-[10px]">
                FASION <span className="font-bold text-[1.5rem] ">|</span>{" "}
                INSPIRATION
              </p>
              <hr className="w-[80%] border-black border-[1px] m-auto my-[10px]" />
              <p className="leading-[33px] text-[24px]">
                Top 10 Winter Essentials For 2022 You Should Try
              </p>
              <button className="leading-[18px] text-[12px] underline font-bold my-[20px] pointer">
                READ MORE
              </button>
            </div>
          </div>

          <div>
            <div className=" bg-[url('/images/png/Blog-list-img-2.jpg.png')] bg-top bg-auto h-[550px] m-auto">
              <button className=" bg-white text-black border-black border-[1px] p-[4px] m-[10px]">
                SEPTEMBER 29, 2022
              </button>
            </div>
            <div className="text-center">
              <p className="text-[16px] leading-[16px] my-[10px]">
                FASION <span className="font-bold text-[1.5rem] ">|</span>{" "}
                INSPIRATION
              </p>
              <hr className="w-[80%] border-black border-[1px] m-auto my-[10px]" />
              <p className="leading-[33px] text-[24px]">
                The Complete Communication Skills Master Class For Work
              </p>
              <button className="leading-[18px] text-[12px] underline font-bold my-[20px] pointer">
                READ MORE
              </button>
            </div>
          </div>

          <div>
            <div className=" bg-[url('/images/png/Blog-list-img-3.jpg.png')] bg-top bg-auto  m-auto h-[500px] ">
              <button className=" bg-white text-black border-black border-[1px] p-[4px] m-[10px]">
                SEPTEMBER 29, 2022
              </button>
            </div>
            <div className="text-center">
              <p className="text-[16px] leading-[16px] my-[10px]">
                FASION <span className="font-bold text-[1.5rem] ">|</span>{" "}
                INSPIRATION
              </p>
              <hr className="w-[80%] border-black border-[1px] m-auto my-[10px]" />
              <p className="leading-[33px] text-[24px]">
                The Complete Communication Skills Master Class For Work
              </p>
              <button className="leading-[18px] text-[12px] underline font-bold my-[20px] pointer">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('/images/png/elementor.png')] w-[100%] h-[381px] bg-no-repeat bg-center bg-contain text-center m-auto">
        <div className="pt-[8%]">
          <p className="w-[95%] sm:w-[40%]  m-auto sm:text-[35px] text-[20px]  leading-[25px] sm:leading-[42px]  mb-[10px]">
            Sing up to our newsletter for all the latest news & discounts.
          </p>
          <div className="auto flex justify-center">
            <form
              action=""
              className="flex justify-between w-[30%] items-center my-[10px]"
            >
              <input
                type="text"
                placeholder="E-mail address"
                className="bg-transparent text-black"
              />
              <img src="images/svg/Frame (1).svg" alt="arrow icon" />
            </form>
          </div>
          <hr className="w-[30%] border-black border-[1px] m-auto" />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-[30px] my-[50px]">
        <div className="">
          <img src="/images/png/main-home-image-4-1.jpg.png" alt="" />
        </div>

        <div className="">
          <img src="/images/png/div.qodef-m-image.png" alt="" />
        </div>

        <div className="my-[25%] w-[100%] px-[30px]">
          <div className="mx-[10px]">
            <p className="mb-8 leading-relaxed text-[35px] leading-[35px] my-[20px]">
              Meet The Artists Behind The Corsen Maria & Sophia
            </p>
            <p className="text-[18px] leading-[22px] my-[20px]">
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna.
            </p>
            <div className="flex justify-left">
              <button className="inline-flex text-black border-[1px] border-black py-2 px-6 focus:outline-none hover:bg-gray-600 hover:text-white rounded text-lg my-[20px]">
                SHOP COLLECTION
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="px-[30px]">
          <p>Instagram</p>
          <p>Follow us on @qodeinteractive</p>
        </div>

        <div className="sm:flex gap-5 p-3 overflow-auto grid grid-cols-2">
          {imageData.map((item, index) => (
            <div key={index} className="min-w-[200px]">
              <Image
                width={200}
                height={200}
                src={item}
                className="w-full"
                alt="picture"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-4 sm:grid-cols-1 border-t-[1px] border-b-[1px] border-black h-[100px] my-[20px]">
        {offeringData.map((item, index) => (
          <div
            key={index}
            className="flex gap-[10px] items-center border-r-[1px] border-black justify-center"
          >
            <img src={item.src} alt="icon" />
            <p className="text-[13px] leading-[18px]">{item.offer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Content;
