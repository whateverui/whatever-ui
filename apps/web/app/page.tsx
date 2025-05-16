"use client";

import { Infinity } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 bg-black -z-20"></div>

      <main className="relative min-h-screen text-white px-4 sm:px-6 md:px-8 overflow-hidden">
        {/* Background Blur Glow */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 223, 99, 0.6) 0%, transparent 70%)",
            filter: "blur(200px)",
            opacity: 0.8,
            pointerEvents: "none",
          }}
        ></div>

        {/* Navbar */}
        <nav className="w-full max-w-7xl mx-auto py-6 flex items-center justify-between px-2 sm:px-0">
          <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600/90">
            whatever
          </div>
          <div className="space-x-4 sm:space-x-6 hidden md:flex">
            <a href="#features" className="text-gray-300 hover:text-white transition">
              Features
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition">
              About
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">
              Contact
            </a>
          </div>
          <button className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition">
            Get Started
          </button>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mt-16 sm:mt-20 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 px-2 sm:px-0 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
            Haan ji Vibe Coder 😁
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-xl px-2 sm:px-0 mb-10 leading-relaxed">
            After hours of vibing with code, even AI’s like,<br />
            <span className="block mt-2 mb-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-orange-300 font-semibold italic">
              “Bhai, let the human fix this.”
            </span>
            Don’t worry, I got you — humans still run this vibe!
          </p>





          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center px-2 sm:px-0">
            <button className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Try for Free
            </button>
            <button className="border border-orange-400 text-orange-300 px-6 py-3 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition">
              Learn More
            </button>
          </div>

          {/* SVG defs */}
          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient id="infinityGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#ec4899" floodOpacity="0.7" />
                <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#8b5cf6" floodOpacity="0.5" />
              </filter>
            </defs>
          </svg>

          <Infinity
            size={Math.min(window.innerWidth * 0.8, 600)} // clamp size based on viewport width
            stroke="url(#infinityGradient)"
            strokeWidth={3}
            className=" mx-auto"
            style={{ filter: "url(#glow)", maxWidth: '100%', height: 'auto' }}
          />



        </section>

        {/* Footer */}
        <footer className="mt-24 text-center text-gray-500 text-xl py-6">
          © {new Date().getFullYear()} whatever.codes. All rights reserved.
        </footer>
      </main>
    </>
  );
}
