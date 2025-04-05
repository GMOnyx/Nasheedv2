import React from 'react';
import { Play, Headphones, Music, Download, Heart, Users } from 'lucide-react';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Updated import

function App() {
  return (
    <HelmetProvider> {/* Wrap the entire app in HelmetProvider */}
      {/* Helmet manages the page title and metadata */}
      <Helmet>
        <title>Nasheed</title>
        <meta name="description" content="Enjoy pure nasheeds with no ads or distractions." />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
      </Helmet>

      {/* Your main app content */}
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
                  Try the web player
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

        {/* Why We Built Nasheed Section */}
        <section id="why" className="py-16 md:py-24 bg-emerald-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why We Built Nasheed</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our journey began with a simple frustration that many Muslims face daily.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The YouTube Problem</h3>
                  <p className="text-gray-600">
                    Trying to listen to nasheeds on YouTube means being constantly interrupted by music ads that go against Islamic values. 
                    Every interruption breaks your spiritual connection and forces you to hear content you're actively trying to avoid.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The Spotify Dilemma</h3>
                  <p className="text-gray-600">
                    While Spotify offers some nasheeds, they're mixed with music advertisements and their algorithm often suggests non-Islamic content. 
                    It's not a platform built with Muslim listeners in mind. Listening to nasheed on spotify is akin to searching for zamzam in a wine cellar. Why tempt yourself?
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The Scattered Internet</h3>
                  <p className="text-gray-600">
                    Finding quality nasheeds shouldn't mean searching across dozens of websites, downloading from shady sources, or streaming from 
                    platforms that aren't built for us. It's time-consuming and frustrating.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Solution</h3>
                <p className="text-gray-600 mb-6">
                  We built Nasheed to solve these problems once and for all. Our platform offers:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-2 rounded-full mt-1">
                      <Play size={16} className="text-emerald-600" />
                    </div>
                    <span className="ml-4 text-gray-600">
                      A dedicated space for Islamic content only
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-2 rounded-full mt-1">
                      <Play size={16} className="text-emerald-600" />
                    </div>
                    <span className="ml-4 text-gray-600">
                      Zero music advertisements or inappropriate content
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-2 rounded-full mt-1">
                      <Play size={16} className="text-emerald-600" />
                    </div>
                    <span className="ml-4 text-gray-600">
                      Centralized access to thousands of nasheeds
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-2 rounded-full mt-1">
                      <Play size={16} className="text-emerald-600" />
                    </div>
                    <span className="ml-4 text-gray-600">
                      Carefully curated content that respects Islamic values
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Nasheed?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our platform is designed by Muslims for Muslims, offering features that enhance your spiritual journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-emerald-50 p-8 rounded-xl">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Music size={28} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">100% Halal Content</h3>
                <p className="text-gray-600">
                  Our platform is dedicated to Islamic nasheeds, and we carefully curate all content making sure it aligns with Islamic values.
                </p>
              </div>
              
              <div className="bg-emerald-50 p-8 rounded-xl">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Headphones size={28} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">No more Haram Ads</h3>
                <p className="text-gray-600">
                  Enough getting your nasheed experience interrupted by haram.
                </p>
              </div>
              
              <div className="bg-emerald-50 p-8 rounded-xl">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Download size={28} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Free to Use</h3>
                <p className="text-gray-600">
                  Access our entire library of nasheeds without any subscription fees or hidden charges.
                </p>
              </div>
              
              <div className="bg-emerald-50 p-8 rounded-xl">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users size={28} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Features</h3>
                <p className="text-gray-600">
                  Connect with like-minded listeners, share playlists, and discover new nasheeds together.
                </p>
              </div>
              
              <div className="bg-emerald-50 p-8 rounded-xl">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Play size={28} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Extensive Library</h3>
                <p className="text-gray-600">
                  Access thousands of nasheeds from various artists, traditions, and languages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Build With Us Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Build With Us</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                For muslims by muslims. And we mean that. If you have any insights or advice don't hesitate to hit the talk to the founders button and build with us.
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 mt-6">
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeYVkKBokx2AeLtNCRhZxstPfpbqfZYln4zu5F2Z6WjfwYHmQ/viewform?usp=header" 
                     className="flex items-center justify-center bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors">
                    Try the web player
                  </a>
                  <a href="mailto:Abdarrahman2345@gmail.com" 
                     className="flex items-center justify-center bg-white text-emerald-600 border border-emerald-600 px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors">
                    Talk to the Founders
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <a href="#">
                  <img 
                    src="/nasheed-logo.svg" 
                    alt="Nasheed Logo" 
                    className="h-14 mb-4 invert"
                  />
                </a>
                <p className="text-gray-400 mb-4">
                  The premier platform for Islamic nasheeds, providing a halal alternative to music streaming services.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                  <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                  <li><a href="#why" className="text-gray-400 hover:text-white transition-colors">Why Nasheed</a></li>
                  <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Build With Us</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><a href="mailto:Abdarrahman2345@gmail.com" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Nasheed. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;
