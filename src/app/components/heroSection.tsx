import React from 'react'
import Header from './header'

function HeroSection() {
  return (
    <section className="text-gray-600 min-h-full  body-font bg-[url('/images/png/hero-img.png')] bg-center bg-cover pb-[20px]">
      <Header/>
  <div className="container mx-auto flex px-5  flex-col w-full h-full">
      <div className='my-[25%] w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 place-item-end '>
    <div className="mx-[40px]">
      <h1 className="title-font sm:text-4xl text-[3rem] mb-4  font-bold text-gray-900">Mixed Tiles
      </h1>
      <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod..</p>
      <div className="flex justify-left">
        <button className="inline-flex text-black border-[1px] border-black py-2 px-6 focus:outline-none hover:bg-gray-600 hover:text-white rounded text-lg">SHOP COLLECTION</button>
       </div>
      </div>
    </div>
   
  
  </div>
  <hr className='border-[black] m-[40px]'/>
  
</section>
  )
}

export default HeroSection