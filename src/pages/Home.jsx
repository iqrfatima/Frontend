import React from 'react'
import { Navbar } from '@/mycomponents/navbar'
import { CardCarousel } from '@/mycomponents/cardcarousel'
import AutoCarousel from '@/mycomponents/autocarousel'
import Footer from '@/mycomponents/footer'

const Home = () => {
  return (
    <>
      {/* Render Navbar */}
      <Navbar />
      
      {/* Main Content Wrapper */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* AutoCarousel */}
        <div className="w-full">
          <AutoCarousel />
        </div>
  
        {/* Spacing between Carousels */}
        <div className="h-9"></div> {/* Adjust the height here if needed */}
  
        {/* CardCarousel */}
        <div className="w-full max-w-6xl">
          <CardCarousel />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home
