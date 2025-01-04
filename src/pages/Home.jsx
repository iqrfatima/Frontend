import React from 'react'
import { Navbar } from '@/mycomponents/navbar'
import { CardCarousel } from '@/mycomponents/cardcarousel'
import AutoCarousel from '@/mycomponents/autocarousel'

const Home = () => {
  return (
    <>
      {/* Render Navbar */}
      {/* <Navbar /> */}
      <Navbar/>
      {/* Auto Carousel Component - Positioned above CardCarousel */}
      <AutoCarousel />
  
      {/* Center CardCarousel in the middle of the body */}
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col space-y-3 items-center">
          <CardCarousel />
        </div>
      </div>
    </>
  );
}

export default Home
