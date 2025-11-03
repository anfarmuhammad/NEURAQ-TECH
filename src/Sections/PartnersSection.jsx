import React from "react";
import BharatGas  from "../assets/images/2.svg"
import Zieo from "../assets/images/1.svg"
import  EuroMarketing from "../assets/images/3.svg"
import  PalliativeCare from "../assets/images/4.svg"
import  Aljamia from "../assets/images/5.svg"
import   BugHoster from "../assets/images/6.svg"
 




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
            className="relative bg-[#050b16] text-white py-20 overflow-hidden"
        >
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div
                    className="text-center mb-12 animate-fadeIn text-white"
                    data-scroll
                >
                    <h2 className="text-4xl font-bold text-cyan-400 drop-shadow-lg">
                        Our Collaborators
                    </h2>
                    <p className="text-gray-400 text-lg mt-2">
                        Trusted by Industry Kings
                    </p>
                </div>

                {/* Scrolling Logos */}
                <div className="overflow-hidden relative">
                    <div
                        className="flex gap-10 animate-scroll whitespace-nowrap"
                        data-scroll
                    >
                        {/* Original set */}
                        {partners.map((src, index) => (
                            <div
                                key={`p1-${index}`}
                                className="flex-shrink-0 w-40 h-24 flex justify-center items-center bg-[#0a1325] rounded-xl border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                            >
                                <img
                                    src={src}
                                    alt={`Partner ${index + 1}`}
                                    className="object-contain w-24 h-12 opacity-80 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        ))}

                        {/* Duplicate set for seamless loop */}
                        {partners.map((src, index) => (
                            <div
                                key={`p2-${index}`}
                                className="flex-shrink-0 w-40 h-24 flex justify-center items-center bg-[#0a1325] rounded-xl border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                            >
                                <img
                                    src={src}
                                    alt={`Partner ${index + 7}`}
                                    className="object-contain w-24 h-12 opacity-80 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Subtle glowing background effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-transparent via-[#0a1325]/50 to-transparent blur-3xl opacity-30" />
        </section>
    );
}

export default PartnersSection;

