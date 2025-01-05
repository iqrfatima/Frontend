import React from 'react'
import { Navbar } from '@/mycomponents/navbar'
import { CardCarousel } from '@/mycomponents/cardcarousel'
import AutoCarousel from '@/mycomponents/autocarousel'
import Footer from '@/mycomponents/footer'
import agriweb from '../assets/agriweb.jpg'

const Home = () => {
  return (
    <>
      {/* Render Navbar */}
      <Navbar />
      
      {/* Main Content Wrapper */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* AutoCarousel */}
        <div className="w-full items-center justify-center">
          {/* <AutoCarousel /> */}
          <img
                src={agriweb}// Replace with your image path
                alt="Background"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white">
                <h1 className="text-8xl text-transparent bg-gradient-to-r from-blue-300 to-blue-600 text-left pl-10 bg-clip-text">AgriGuard</h1>
                <p className="mt-4 font-semibold text-2xl text-white">: Empowering Farmers with AI</p>
            </div>
          {/* <img src={agriweb}/>
          agricard
           */}
          {/* <h1 className="text-black text-4xl font-bold uppercase bg-black/50 px-4 py-2 rounded-lg">
      Agriguard
    </h1> */}
    
          
        </div>
  
        {/* Spacing between Carousels */}
        <div className="h-9"></div> {/* Adjust the height here if needed */}
           

        <div className="w-full max-w-6xl">
          <CardCarousel />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home
