import React from 'react'
import Image from 'next/image'
 
function Header() {
  return (
    <header className="text-gray-600 body-font mx-[40px]">
  <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
    <div className="lg:flex sm:none title-font justify-center items-center text-black text-[10px] gap-[30px] mb-4 md:mb-0">
     <a>
     <img src="images/svg/logo.svg" className='h-[15px] '  alt="company logo"/>
     </a> 
      <nav className="md:ml-auto flex flex-wrap gap-[10px] items-center justify-center text-black">
      <a className="mr-5 hover:text-gray-900">HOME</a>
      <a className="mr-5 hover:text-gray-900">SHOP</a>
      <a className="mr-5 hover:text-gray-900">PAGES</a>
      <a className="mr-5 hover:text-gray-900">PORTFOLIO</a>
      <a className="mr-5 hover:text-gray-900">BLOG</a>
    </nav>

    </div>
    
    <nav className="md:ml-auto flex flex-wrap items-center text-black text-[10px] justify-center gap-[20px]">
      <div className='flex gap-[5px]'>
      <a className="hover:text-gray-900">SEARCH</a>
        <img src="images/svg/svg.svg" alt="search icon"/>
      </div>

      <div className='flex gap-[5px]'>
      <a className="hover:text-gray-900">CART</a>
      <img src="images/svg/cart.svg" alt="cart icon" />
      <a className="hover:text-gray-900">0</a>
      </div>

      <div className='flex gap-[5px]'>
      <img src="images/svg/wishlist.svg" alt="wishlist icon" />
      <a className="hover:text-gray-900">0</a>
      </div>

      <div>
      <img src="images/svg/user.svg" alt="user icon" />
      </div>
    </nav>
  </div>
  <hr className='border-[black] '/>
</header>
  )
}

export default Header