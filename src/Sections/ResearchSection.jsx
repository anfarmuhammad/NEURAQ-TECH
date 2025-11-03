// src/Sections/ResearchSection
import React from "react";
import { Brain, Atom, Fingerprint } from "lucide-react";
import Inititive from '../assets/images/inititive.svg'

function ResearchSection() {
  return (
    <section
      id="research"
      className="relative overflow-hidden bg-[#030b17] text-white py-20"
    >
      {/* === Background Image with Parallax-like Effect === */}
      <div
        className="absolute inset-0 bg-[url('assets/images/research-bg.jpg')] bg-cover bg-center bg-fixed opacity-10"
        aria-hidden="true"
      ></div>

      {/* === Tech Overlay === */}
      <div className="absolute inset-0 z-0">
        {/* Circuit Nodes */}
        <div className="absolute w-3 h-3 bg-cyan-400 rounded-full top-[20%] left-[25%] animate-pulse"></div>
        <div className="absolute w-3 h-3 bg-cyan-400 rounded-full top-[50%] left-[70%] animate-pulse"></div>
        <div className="absolute w-3 h-3 bg-cyan-400 rounded-full top-[80%] left-[45%] animate-pulse"></div>
      </div>

      {/* === Main Content === */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        {/* === Image Section === */}
        <div className="flex-1 relative group">
          <div className="relative overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1)_0%,transparent_70%)]"></div>
            <img
              src={Inititive}
              alt="Neuraq Research Lab"
              className="w-full transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400"></div>
        </div>

        {/* === Text Section === */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
            Flagship Initiative
          </h2>
          <p className="text-gray-300 text-lg font-medium">
            Connect | Communicate | Conquer.
          </p>
          <p className="text-gray-400 leading-relaxed">
            To empower individuals across India to achieve confident and clear
            communication through innovative AI-driven speech enhancement
            solutions.
          </p>

          {/* === Highlights === */}
          <div className="mt-6 space-y-6">
            {/* Item 1 */}
            <div className="flex items-start gap-4 bg-cyan-500/5 border border-cyan-400/20 p-4 rounded-xl backdrop-blur-sm hover:bg-cyan-500/10 transition">
              <div className="p-3 bg-cyan-500/10 rounded-lg">
                <Brain className="text-cyan-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Connect</h3>
                <p className="text-gray-400 text-sm">
                  This word speaks to breaking down barriers – the very first
                  step towards inclusion and engagement.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4 bg-cyan-500/5 border border-cyan-400/20 p-4 rounded-xl backdrop-blur-sm hover:bg-cyan-500/10 transition">
              <div className="p-3 bg-cyan-500/10 rounded-lg">
                <Atom className="text-cyan-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Communicate</h3>
                <p className="text-gray-400 text-sm">
                  This is the core function and the ultimate daily goal – the
                  act of effectively exchanging thoughts and information.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4 bg-cyan-500/5 border border-cyan-400/20 p-4 rounded-xl backdrop-blur-sm hover:bg-cyan-500/10 transition">
              <div className="p-3 bg-cyan-500/10 rounded-lg">
                <Fingerprint className="text-cyan-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Conquer</h3>
                <p className="text-gray-400 text-sm">
                  This word signifies achievement, mastery, and overcoming
                  challenges. It's the powerful, aspirational outcome.
                </p>
              </div>
            </div>
          </div>

          {/* === CTA Buttons === */}
          <div className="flex flex-wrap gap-4 pt-8">
            <a
              href="innovation.html"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-cyan-400 bg-cyan-400/10 px-5 py-3 text-cyan-300 transition-all hover:bg-cyan-400 hover:text-black"
            >
              <span>View Research</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            </a>

            <a
              href="innovation.html"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-cyan-400/30 bg-transparent px-5 py-3 text-gray-300 transition-all hover:bg-cyan-400 hover:text-black"
            >
              <span>Current Status</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 group-hover:rotate-90 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* === Binary Code Background === */}
      <div className="absolute bottom-2 w-full text-center opacity-10 text-xs font-mono text-cyan-400 animate-pulse">
        01010010 01100101 01110011 01100101 01100001 01110010 01100011 01101000
        00100000 00100026 00100000 01000100 01100101 01110110 01100101 01101100
        01101111 01110000 01101101 01100101 01101110 01110100
      </div>
    </section>
  );
}

export default ResearchSection;
