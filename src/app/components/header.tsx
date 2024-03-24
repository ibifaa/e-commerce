("useClient");
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-black  sm:mx-[40px]">
      <div className="container flex justify-between m-auto py-[10px] ">
        <div className="sm:flex title-font items-center text-black text-[10px] sm:mb-4 md:mb-0 gap-[30px]">
          <div>
            <Image
              src="/images/svg/logo.svg"
              className="h-[20px] "
              alt="company logo"
              width={60}
              height={60}
            />
          </div>

          <nav className="hidden sm:flex text-[14px]">
            <Link href="/" passHref className="mr-5 hover:text-gray-900">
              HOME{" "}
            </Link>
            <Link href="/page" passHref className="mr-5 hover:text-gray-900">
              SHOP{" "}
            </Link>
            <Link href="/page" passHref className="mr-5 hover:text-gray-900">
              PAGE{" "}
            </Link>
            <Link href="/page" passHref className="mr-5 hover:text-gray-900">
              PORTOFOLIO{" "}
            </Link>
            <Link href="/page" passHref className="mr-5 hover:text-gray-900">
              BLOG{" "}
            </Link>
          </nav>
        </div>

        <nav className="flex flex-wrap items-center text-black text-[14px]">
          <div className="hidden sm:flex  gap-[10px]">
            <div className="flex  gap-[10px] ">
              <a className="hover:text-gray-900">SEARCH</a>
              <Image
                className="sm:flex"
                src="/images/svg/svg.svg"
                alt="search icon"
                width={15}
                height={15}
              />
            </div>

            <div className="flex gap-[10px] text-[14px]">
              <a className="hover:text-gray-900">CART</a>
              <Image
                src="/images/svg/cart.svg"
                alt="cart icon"
                width={15}
                height={15}
              />
              <a className="hover:text-gray-900">0</a>
            </div>

            <div className="flex gap-[10px]">
              <Image
                src="/images/svg/wishlist.svg"
                alt="wishlist icon"
                width={15}
                height={15}
              />
              <a className="hover:text-gray-900">0</a>
            </div>
          </div>

          <div className="flex gap-[10px] justify-center  items-center">
            <Image
              src="/images/svg/user.svg"
              alt="user icon"
              className="pointer"
              width={15}
              height={15}
            />
            <Image
              src="/images/svg/hamburger.svg"
              alt="hamburger"
              className="block sm:hidden"
              width={15}
              height={15}
            />
          </div>
        </nav>
      </div>
      <hr className="border-[black] " />
    </header>
  );
};

export default Header;
