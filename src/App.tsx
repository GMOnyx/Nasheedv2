import React from 'react';
import { Helmet } from "react-helmet";
import { Play, Headphones, Music, Download, Heart, Users } from 'lucide-react';

function App() {
  return (
    <>
      {/* Helmet manages the page title and metadata */}
      <Helmet>
        <title>Nasheed - Listen Without Distractions</title>
        <meta name="description" content="Enjoy pure nasheeds with no ads or distractions." />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="#" className="block">
                <img 
                  src="/nasheed-logo.svg" 
                  alt="Nasheed Logo" 
                  className="h-16 mr-4"
                />
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors">Features</a>
              <a href="#why" className="text-gray-700 hover:text-emerald-600 transition-colors">Why Nasheed</a>
              <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 transition-colors">Build With Us</a>
            </div>
            <div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeYVkKBokx2AeLtNCRhZxstPfpbqfZYln4zu5F2Z6WjfwYHmQ/viewform?usp=header" 
                className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Start Your <span className="text-emerald-600">Music-Free</span> Journey with Nasheed
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Nasheed is the first platform dedicated exclusively to Islamic nasheeds. 
                Enjoy a wide collection of content completely free, with no music ads 
                to interrupt your experience.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeYVkKBokx2AeLtNCRhZxstPfpbqfZYln4zu5F2Z6WjfwYHmQ/viewform?usp=header" 
                  className="flex items-center justify-center bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors">
                  <Play size={20} className="mr-2" />
                  Register for Beta
                </a>
                <a href="mailto:Abdarrahman2345@gmail.com" 
                  className="flex items-center justify-center bg-white text-emerald-600 border border-emerald-600 px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors">
                  Talk to the Founders
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-emerald-100 rounded-full blur-lg opacity-70"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
