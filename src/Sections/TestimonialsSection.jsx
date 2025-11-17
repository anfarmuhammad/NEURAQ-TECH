import React from "react";
import { Quote } from "lucide-react";
import team1 from "../assets/images/t1.jpg";
import team2 from "../assets/images/t-2.jpg";
import team3 from "../assets/images/t3.jpg";

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
    <section id="testimonials" className="relative py-20 bg-black/95 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#39FF14]">Trusted Zone</h2>
          <p className="font-orbitron text-lg mt-2">What they say about us?</p>
        </div>

        {/* Testimonials Grid */}
        <div className="flex justify-center">
          <div className="grid w-[85%] md:grid-cols-3 gap-12 place-items-center">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-8 
                          flex flex-col justify-between min-h-[380px] shadow-xl hover:shadow-2xl 
                          hover:-translate-y-2 transition-all duration-500 max-w-md w-full"
              >
                {/* Floating glow dots */}
                <div className="absolute top-6 right-8 w-2 h-2 bg-white/40 blur-sm rounded-full"></div>
                <div className="absolute bottom-12 left-10 w-2 h-2 bg-white/40 blur-sm rounded-full"></div>

                {/* Quote Text */}
                <Quote className="text-gray-300 mb-4" size={30} />
                <p className="text-gray-300 leading-relaxed font-orbitron text-lg border-l-2 border-[#39FF14] pl-4 italic">
                  {t.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border border-[#39FF14]/40"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{t.name}</h4>
                    <p className="font-orbitron text-sm text-gray-400">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
