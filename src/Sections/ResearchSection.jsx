// src/Sections/ResearchSection.jsx
import React from "react";
import { Brain, Atom, Fingerprint } from "lucide-react";
import Initiative from "../assets/images/inititive.svg";

function ResearchSection() {
  return (
    <section
      id="research"
      className="relative overflow-hidden dark:bg-black/95 text-white py-20"
    >
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Image Section */}
        <div className="flex-1 relative group">
          <img
            src={Initiative}
            alt="Neuraq Research Lab"
            className="w-full max-w-[530px] rounded-2xl h-auto transition-transform duration-700 group-hover:scale-105 mx-auto"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-[#39ff14] to-[#22ce33] bg-clip-text text-transparent">
            Flagship Initiative
          </h2>

          <p className="font-orbitron text-[1.2rem] leading-relaxed font-medium">
            Connect | Communicate | Conquer.
          </p>

          <p className="font-orbitron text-[1.2rem] leading-relaxed">
            To empower individuals across India to achieve confident and clear communication
            through innovative AI-driven speech enhancement solutions.
          </p>

          {/* Highlights */}
          <div className="mt-6 space-y-6">
            {/* Connect */}
            <div className="flex items-start gap-4 p-4">
              <div className="p-3 bg-cyan-500/10 rounded-full">
                <Brain className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold">Connect</h3>
                <p className="font-orbitron text-sm leading-relaxed">
                  This word speaks to breaking down barriers – the very first step toward
                  inclusion and engagement.
                </p>
              </div>
            </div>

            {/* Communicate */}
            <div className="flex items-start gap-4 p-4">
              <div className="p-3 bg-cyan-500/10 rounded-full">
                <Atom className="text-cyan-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold">Communicate</h3>
                <p className="font-orbitron text-sm leading-relaxed">
                  This is the core function and daily goal – the act of effectively exchanging
                  thoughts and information.
                </p>
              </div>
            </div>

            {/* Conquer */}
            <div className="flex items-start gap-4 p-4">
              <div className="p-3 bg-cyan-500/10 rounded-full">
                <Fingerprint className="text-cyan-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold">Conquer</h3>
                <p className="font-orbitron text-sm leading-relaxed">
                  This word signifies achievement, mastery, and overcoming challenges. It
                  represents the aspirational outcome.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 pt-8 font-orbitron">
            {/* Neon Gradient Button */}
            <a
              href="innovation.html"
              className="relative inline-flex items-center gap-3 px-7 py-4 rounded-full
                         overflow-hidden group
                         bg-gradient-to-r from-[#39ff14] to-[#00f2fe]
                         text-black font-semibold tracking-wide
                         shadow-[0_0_18px_rgba(0,255,200,0.35)]
                         transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="relative z-10 flex items-center gap-3">
                View Research
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </span>
              <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left bg-white/25 transition-transform duration-500 ease-out"></span>
            </a>

            {/* Outline Neon Button */}
            <a
              href="innovation.html"
              className="relative inline-flex items-center gap-3 px-7 py-4 rounded-full
                         border border-[#ffffff50] text-gray-200
                         overflow-hidden group
                         transition-all duration-300 hover:scale-[1.03]
                         hover:border-[#39ff14] hover:text-[#39ff14]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Current Status
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 transition-transform group-hover:rotate-90"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </span>
              <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left bg-[#39ff1415] transition-transform duration-500 ease-out shadow-[0_0_25px_#39ff14]"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResearchSection;
