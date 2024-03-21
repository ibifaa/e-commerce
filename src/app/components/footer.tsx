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
      <div className="flex justify-between">
        <div className="flex gap-[10px] items-center">
          <p>&copy; </p>
          <p>
            <img src="images/svg/a.svg" alt="" />
          </p>
          <p>2023 ALL RIGHTS RESERVED</p>
        </div>
        <p>ENG | FR| SKR</p>
      </div>

      <div className="bg-black">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2020 Tailblocks —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @knyttneve
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
