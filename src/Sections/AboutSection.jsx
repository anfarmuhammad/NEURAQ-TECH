import React from "react";
import { Shield } from "lucide-react";
import HomeAb from "../assets/images/homeab.svg";


function AboutSection() {
  return (
    <section className="relative overflow-hidden text-white py-20 backdrop-blur-xl  dark:bg-black/95">

      {/* === Animated Tech Overlay === */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-cyan-400/20"></div>
        <div className="absolute left-1/2 top-0 h-full w-px bg-cyan-400/20"></div>

        {/* Pulsing Nodes */}
        <div className="absolute w-3 h-3 bg-cyan-400 rounded-full top-[20%] left-[30%] animate-pulse"></div>
        <div className="absolute w-3 h-3 bg-cyan-400 rounded-full top-[50%] left-[70%] animate-pulse"></div>
        <div className="absolute w-3 h-3 bg-cyan-400 rounded-full top-[80%] left-[40%] animate-pulse"></div>
      </div>

      {/* === Main Content === */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">

        {/* === Text Section === */}
        <div className="flex-1 space-y-6">
          <div>
            <span className="inline-block bg-cyan-500/10 text-cyan-400 px-4 py-1 rounded-full text-sm tracking-widest uppercase">
              About Us
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Redefining Your Identity
          </h2>

          <p className="text-gray-300 leading-relaxed">
            At <span className="text-cyan-400 font-semibold">Neuraq Technologies</span>,
            we specialize in AI-powered digital identity solutions designed to help
            individuals and small businesses establish secure online identities at
            affordable prices. Our mission is to make advanced digital tools accessible
            and practical for everyone, empowering growth and security in the digital world.
          </p>

          <p className="text-gray-400">
            We are committed to developing inclusive AI that breaks communication
            barriers for people with disabilities. Our ongoing research in speaking AI
            and our flagship product, <span className="text-cyan-400 font-semibold">Neuraq Smart Care</span>,
            for the healthcare sector, reflects our dedication to creating innovative
            solutions that make the digital future more accessible for all.
          </p>

          {/* === Metrics === */}
          <div className="flex gap-10 pt-4">
            <div>
              <h3 className="text-4xl font-bold text-cyan-400">29+</h3>
              <p className="text-gray-400 text-sm">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-cyan-400">147+</h3>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>
          </div>

          {/* === Core Values === */}
          <div className="mt-8 flex items-start gap-4 bg-cyan-500/5 border border-cyan-400/20 rounded-xl p-4 backdrop-blur-sm">
            <div className="p-3 bg-cyan-500/10 rounded-lg">
              <Shield className="text-cyan-400 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">No problem without solution</h3>
              <p className="text-gray-400 text-sm">
                We turn impossible problems into AI-powered solutions effortlessly.
              </p>
            </div>
          </div>

          {/* === CTA Buttons === */}
          <div className="flex flex-wrap gap-4 pt-8">
            <a
              href="about.html"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-cyan-400 bg-cyan-400/10 px-5 py-3 text-cyan-300 transition-all hover:bg-cyan-400 hover:text-black"
            >
              <span>View Our Brand Story</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </a>

            <a
              href="about.html"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-cyan-400/30 bg-transparent px-5 py-3 text-gray-300 transition-all hover:bg-cyan-400 hover:text-black"
            >
              <span>Meet The Team</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </a>
          </div>
        </div>

        {/* === Image Section === */}
        <div className="flex-1 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,255,255,0.2)]">
            <img
              src={HomeAb}
              alt="Illustration of Neuraq Technologies Lab"
              className="w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/10 via-transparent to-transparent"></div>
          </div>

          {/* Frame Decorations */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400"></div>
        </div>
      </div>

      {/* === Binary Background === */}

    </section>
  );
}

export default AboutSection;
