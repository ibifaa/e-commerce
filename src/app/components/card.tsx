import React from "react";
// import styled from 'styled-components';

interface CardProps {
  src: string;
  price: number;
  name: string;
}

function Card({ src, price, name }: CardProps) {
  const backgroundImageStyle = `url(${src})`;
  return (
    <div className="card">
      <div
        className="h-[400px]  bg-center bg-cover bg-no-repeat border border-black"
        style={{ backgroundImage: backgroundImageStyle }}
      >
        <div className="mt-4 flex justify-between">
          <button className=" mx-[20px] py-[2px] m-auto px-[10px] border border-black bg-[white] text-[1rem]">
            NEW
          </button>
          <div className="mx-[20px]">
            <img
              src="/images/svg/pseudo.svg"
              className="my-[10px]"
              alt="icon"
            />
            <img src="/images/svg/quick-view.svg.svg" alt="eye icon" />
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white  w-[100%] border-black  border-r-[1px]  border-l-[1px]  border-b-[1px] flex justify-between font-medium text-[1rem] text-[black]">
          <div className="p-2">
            <p className="font-medium text-[1rem] text-[black">{name}</p>
            <p>
              <span>$</span> {price}
            </p>
          </div>
          <div className="border-black border-l-[1px] flex justify-center items-center  p-[20px]">
            <img src="images/svg/cart.svg" alt="cart icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
