import React from "react";
import team1 from '../assets/images/t1.jpg'
import team2 from '../assets/images/t-2.jpg'
import team3 from '../assets/images/t3.jpg'

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      text: "The Neuraq team brought our vision to life with great attention to detail and a clear understanding of our needs. Their creativity, dedication, and expertise have greatly improved our ability to support patients.",
      image: team1, 
      name: "Mohammed Ali P",
      title: "Secretary - Palliative Care Makkaraparamba",
    },
    {
      id: 2,
      text: "We sincerely appreciate your team's outstanding work on our custom software. Your professionalism, technical skill, and dedication to our needs have been truly impressive.",
      image: team2,
      name: "Vahid Babu K",
      title: "CFA MANAGER - Zeio Pharmaceuticals Pvt.Ltd",
    },
    {
      id: 3,
      text: "The Neuraq team brought our vision to life with great attention to detail and a clear understanding of our needs. Their creativity, dedication, and expertise have greatly improved our ability to support patients.",
      image: team3,
      name: "Fazil Rahman",
      title: "Head - Tharayil Bharat Gas",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative bg-[#050b16] text-white py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16" data-scroll>
          <h2 className="text-4xl font-bold mb-2 text-white">
            Trusted Zone
          </h2>
          <p className="text-gray-400 text-lg">
            What they say about us?
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch animate-slideIn">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative bg-[#0a1325] border border-cyan-500/20 rounded-2xl p-8 w-full md:w-1/3 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              data-scroll
            >
              {/* Quote */}
              <div className="mb-6">
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-cyan-400 mb-4 mx-auto"
                >
                  <path d="M7 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
                <p className="text-gray-300 leading-relaxed italic text-center">
                  {t.text}
                </p>
              </div>

              {/* Author */}
              <div className="flex flex-col items-center mt-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay"></div>
                </div>
                <div className="mt-3 text-center">
                  <h4 className="text-lg font-semibold text-white">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-400">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Binary Background */}
      <div className="absolute bottom-0 left-0 w-full text-center opacity-10 text-cyan-500 text-xs tracking-widest select-none">
        <span>
          01010100 01100101 01110011 01110100 01101001 01101101 01101111
          01101110 01101001 01100001 01101100 01110011
        </span>
      </div>
    </section>

  );
}

export default TestimonialsSection;


