import React from "react";
import { Shield } from "lucide-react";
import { ArrowRight, Users } from "lucide-react";
import HomeAb from "../assets/images/homeab.svg";

function AboutSection() {
  return (
    <section className="relative overflow-hidden text-white py-20 backdrop-blur-xl dark:bg-black/95">

      {/* === Main Content === */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-14">

        {/* === Text Section === */}
        <div className="flex-1 space-y-6">
          <span className="inline-block bg-cyan-500/10 text-white px-4 py-1 rounded-full text-sm font-orbitron text-[1.1rem] leading-relaxed tracking-widest uppercase">
            About Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight  bg-gradient-to-r from-[#39ff14] to-[#22ce33]
               bg-clip-text text-transparent ">
            Redefining Your  Identity
          </h2>

          <p className="font-orbitron text-[1.2rem] leading-relaxed mb-8 text-gray-200">
            At <span className="text-[#39ff14] font-semibold">Neuraq Technologies</span>, we specialize in
            AI-powered digital identity solutions designed to help individuals and small businesses establish
            secure online identities at affordable prices. Our mission is to make advanced digital tools
            accessible and practical for everyone, empowering growth and security in the digital world.
          </p>

          <p className="font-orbitron text-[1.2rem] leading-relaxed mb-8 text-gray-200">
            We are committed to developing inclusive AI that breaks communication barriers for people with
            disabilities. Our ongoing research and flagship product
            <span className="text-[#39ff14] font-semibold"> Neuraq </span>
            Smart Care for the healthcare sector, reflect our dedication to creating innovative solutions that make the
            digital future more accessible for all.
          </p>

          {/* === Metrics === */}
          <div className="flex gap-10 pt-4">
            <div>
              <h3 className="text-4xl text-[#39ff14] font-extrabold">29+</h3>
              <p className="text-white font-orbitron text-[1rem] leading-relaxed text-sm">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-4xl text-[#39ff14] font-extrabold">147+</h3>
              <p className="text-white font-orbitron text-[1rem] leading-relaxed text-sm">Projects</p>
            </div>
          </div>

          {/* === Values Card === */}
          <div className="mt-8 flex items-start gap-4 ">
            <div className="p-3 bg-cyan-500/10 rounded-full">
              <Shield className="text-whit font-extrabold w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold">No problem without solution</h3>
              <p className="text-gray-300 font-orbitron text-[1rem] leading-relaxed text-sm">
                We turn impossible problems into AI-powered <br></br> solutions effortlessly.
              </p>
            </div>
          </div>

          {/* === CTA Buttons === */}
          <div className="flex flex-wrap gap-6 pt-8 font-orbitron">

            {/* Gradient Button with Cover Hover */}
            <a
              href="about.html"
              className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full
               overflow-hidden group
               bg-gradient-to-r from-[#39ff14] to-[#00f2fe]
               text-black font-semibold tracking-wide
               shadow-[0_0_18px_rgba(0,255,200,0.35)]
               transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="relative z-10 flex items-center gap-3">
                VIEW OUR BRAND STORY
                <ArrowRight className="w-5 h-5" />
              </span>

              {/* sliding overlay */}
              <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left
              bg-white/25 transition-transform duration-500 ease-out"></span>
            </a>

            {/* Outline Button with Cover Hover */}
            <a
              href="team.html"
              className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full
               border border-[#ffffff50] text-gray-200
               overflow-hidden group
               transition-all duration-300 hover:scale-[1.03]
               hover:border-[#39ff14] hover:text-[#39ff14]"
            >
              <span className="relative z-10 flex items-center gap-3">
                MEET THE TEAM
                <Users className="w-5 h-5" />
              </span>

              {/* sliding neon overlay */}
              <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left
              bg-[#39ff1415] transition-transform duration-500 ease-out
              shadow-[0_0_25px_#39ff14]"></span>
            </a>

          </div>

        </div>

        {/* === Image Section (With Perfect Corners) === */}
        <div className="flex-1 relative flex justify-center items-center">

          {/* Image Wrapper */}
          <div className="relative w-[80%] h-[80%] flex justify-center items-center">
            <img
              src={HomeAb}
              alt="Illustration of Neuraq Technologies Lab"
              className="w-full h-full rounded-2xl  "
            />

            {/* Corner Frames */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-cyan-400"></div>
            <div className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 border-cyan-400"></div>
            <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b-2 border-l-2 border-cyan-400"></div>
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-cyan-400"></div>

          </div>
        </div>

      </div>
    </section>
  );
}
export default AboutSection;
