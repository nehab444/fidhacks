"use client";

import React from 'react';
import Link from 'next/link';
import './globals.css';

const Home = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center">
      <nav className="w-full bg-gradient-to-b from-white to-blue-100 py-4 px-8 shadow-md flex items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="TotSpot Logo" className="w-10 h-10 mr-2" />
          <div className="text-2xl font-bold text-blue-900">TotSpot</div>
        </div>
      </nav>

      <section className="hero w-full h-screen relative flex flex-col items-center justify-center text-center p-6">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6">
            <span className="typing-text">Find child care <span className="text-blue-500">you can trust</span></span>
          </h1>
          <p className="text-lg md:text-xl text-blue-800 mb-10">
            Empowering motherhood, one tot at a time
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 w-full">
            <Link href="/login">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-lg w-full md:w-auto text-center hover:from-blue-700 hover:to-blue-900 transition duration-300 ease-in-out shadow-lg">
                Find a daycare!
              </div>
            </Link>
          </div>
        </div>

        <div className="absolute top-20 left-16">
          <img src="/giraffe.png" alt="Giraffe Sticker" className="w-16 h-16" />
        </div>
        <div className="absolute top-28 right-28">
          <img src="/balloon.png" alt="Balloon Sticker" className="w-16 h-16" />
        </div>
        <div className="absolute top-80 right-10">
          <img src="/star.png" alt="Star Sticker" className="w-16 h-16" />
        </div>
        <div className="absolute top-60 left-20">
          <img src="/cupcake.webp" alt="Cupcake Sticker" className="w-16 h-16" />
        </div>
        <div className="absolute bottom-20 left-40">
          <img src="/bee.webp" alt="Bee Sticker" className="w-16 h-16" />
        </div>
    
        <div className="absolute bottom-20 right-20">
          <img src="/balloon.png" alt="Balloon Sticker" className="w-16 h-16" />
        </div>
        <div className="absolute bottom-48 left-0">
          <img src="/balloon.png" alt="Balloon Sticker" className="w-16 h-16" />
        </div>
      </section>
    </div>
  );
};

export default Home;
