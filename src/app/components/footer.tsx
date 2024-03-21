import React from "react";

function Footer() {
  return (
    <footer className="text-black body-font">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-wrap md:text-left text-center grid sm:grid-cols-5 grid-cols-2">
          <div className=" w-full px-4">
            <img
              src="images/svg/logo.svg"
              className="h-[15px] my-[10px]"
              alt="company logo"
            />
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium
            </p>
          </div>

          <div className=" w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              SUPPORT
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Help & Contact Us
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800">Returns & Refunds</a>
              </li>
              <li>
                <a className="hover:text-gray-800">Online Stores</a>
              </li>
              <li>
                <a className="hover:text-gray-800">Privary Policy</a>
              </li>
            </nav>
          </div>

          <div className="w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              COMPANY
            </h2>
            <img src="images/svg/ul.qodef-footer-list.png" alt="icon" />
          </div>

          <div className=" w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              LOCATIONS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="hover:text-gray-800">
                  Vienna, Hansalgasse, Austria
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Berlin, Buschallee, Germany
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800">The Piazza, London, UK</a>
              </li>
            </nav>
          </div>

          <div className="pt-[8%]">
            <p className="m-auto text-[20px] leading-[27px] mb-[10px]">
              Get The Latest News.
            </p>
            <div className="auto flex justify-center">
              <form
                action=""
                className="flex justify-between  items-center my-[10px]"
              >
                <input
                  type="text"
                  placeholder="E-mail address"
                  className="bg-transparent text-black placeholder-black"
                />
                <img src="images/svg/Frame (1).svg" alt="arrow icon" />
              </form>
            </div>
            <hr className="border-black border-[1px] m-auto" />
          </div>
        </div>
      </div>
      <hr className="my-[10px] border-black border-[1px]" />
      <div className="flex justify-between px-[20px]">
        <div className="flex gap-[10px] items-center">
          <p>&copy; </p>
          <p>
            <img src="images/svg/a.svg" alt="" />
          </p>
          <p>2023 ALL RIGHTS RESERVED</p>
        </div>
        <p>ENG | FR | SKR</p>
      </div>
    </footer>
  );
}

export default Footer;
