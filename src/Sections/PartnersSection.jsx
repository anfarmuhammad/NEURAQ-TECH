//src/Sections/PartnersSection.jsx
import React from "react";
import BharatGas from "../assets/images/2.svg";
import Zieo from "../assets/images/1.svg";
import EuroMarketing from "../assets/images/3.svg";
import PalliativeCare from "../assets/images/4.svg";
import Aljamia from "../assets/images/5.svg";
import BugHoster from "../assets/images/6.svg";

function PartnersSection() {
  const partners = [
    BharatGas,
    Zieo,
    EuroMarketing,
    PalliativeCare,
    Aljamia,
    BugHoster,
  ];

  return (
    <section
      id="partners"
      className="relative bg-black text-white py-28 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#39ff14] to-[#22ce33] bg-clip-text text-transparent drop-shadow-lg">
            Our Collaborators
          </h2>
          <p className="font-orbitron text-lg mt-2 font-light tracking-wide">
            Trusted by Industry Leaders
          </p>
        </div>

        {/* Scrolling Logos */}
        <div className="overflow-hidden relative">
          <div className="flex gap-14 animate-scroll whitespace-nowrap">

            {/* Original Logos */}
            {partners.map((src, i) => (
              <div
                key={`original-${i}`}
                className="flex-shrink-0 w-40 h-24 flex justify-center items-center opacity-70 hover:opacity-100 transition duration-300"
              >
                <img
                  src={src}
                  alt={`Partner logo ${i + 1}`}
                  className="object-contain w-28 h-14"
                />
              </div>
            ))}

            {/* Duplicate Logos for seamless scrolling */}
            {partners.map((src, i) => (
              <div
                key={`copy-${i}`}
                className="flex-shrink-0 w-40 h-24 flex justify-center items-center opacity-70 hover:opacity-100 transition duration-300"
              >
                <img
                  src={src}
                  alt={`Partner logo ${i + 7}`}
                  className="object-contain w-28 h-14"
                />
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Neon Glow Backdrop */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-transparent via-[#001a09]/40 to-transparent blur-3xl opacity-40" />
    </section>
  );
}

export default PartnersSection;
