// src/pages/Base.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Pro1 from "../assets/images/pro-1.svg";
import Pro2 from "../assets/images/pro-2.svg";
import Pro3 from "../assets/images/pro-3.svg";
import Pro5 from "../assets/images/pro-5.svg";
import Pro6 from "../assets/images/pro-6.svg";
import Pro7 from "../assets/images/pro-7.svg";

const Base = () => {
  const products = [
    {
      title: "Smart Care App",
      category: "Health Application",
      description: "The Future of Care in Your Hand",
      image: Pro1,
      badge: "Featured",
      link: "https://care.neuraq.in/",
      buttonColor: "#39ff14",
    },
    {
      title: "TBGS Track",
      category: "Company Management Software",
      description: "We've developed their entire management system",
      image: Pro2,
      badge: null,
      link: "#",
      buttonColor: "#39ff14",
    },
    {
      title: "Academic Website",
      category: "Education Platform",
      description: "Level up your Academy in Digital World",
      image: Pro3,
      badge: "New",
      link: "https://najmulhuda.com/",
      buttonColor: "#39ff14",
    },
    {
      title: "Resort Website",
      category: "Hospitality",
      description: "Level up your Digital World",
      image: Pro5,
      badge: null,
      link: "",
      buttonColor: "#39ff14",
    },
    {
      title: "Euro Marketing",
      category: "Business Website",
      description: "Level up your Digital World",
      image: Pro6,
      badge: null,
      link: "https://euromarketing.in/",
      buttonColor: "#39ff14",
    },
    {
      title: "Portfolio Website",
      category: "Personal Portfolio",
      description: "Level up your Digital World",
      image: Pro7,
      badge: null,
      link: "https://arunjithperambra.in/",
      buttonColor: "#39ff14",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">

      {/* HERO TITLE */}
      <section className="text-center py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#39ff14] to-[#22ce33] bg-clip-text text-transparent">
            Our Innovations
          </h1><br />
          <p className="font-orbitron text-lg mt-4 text-white">
            Cutting-edge solutions transforming digital identity
          </p>
        </div>
      </section>

      {/* PRODUCTS GRID (EXACT SAME STYLE) */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <div className="grid w-[85%] md:grid-cols-3 gap-12 place-items-center">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative bg-white/5 border border-gray-800 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 product-card max-w-sm w-full"
                >

                  {/* IMAGE + BADGE + OVERLAY */}
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full object-cover"
                    />

                    {/* BADGE SAME AS ORIGINAL */}
                    {product.badge && (
                      <div
                        className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-to-r from-[#39ff14] to-[#00f2fe] text-black font-orbitron text-[0.75rem] font-bold shadow-[0_0_12px_rgba(57,255,20,0.45)]"
                      >
                        {product.badge}
                      </div>
                    )}

                    {/* HOVER OVERLAY */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition-all duration-500 flex items-center justify-center text-center p-4">
                      <div>
                        <h3 className="text-xl font-extrabold">
                          {product.title}
                        </h3>
                        <p className="font-orbitron text-sm mt-2">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT + BUTTON */}
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold">{product.title}</h3>
                    <p className="text-gray-200 font-orbitron text-sm mb-4">
                      {product.category}
                    </p>

                    {/* NEON BUTTON EXACT MATCH */}
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-orbitron text-sm transition-all duration-300 group hover:shadow-[0_0_18px_var(--btn-color)]"
                      style={{
                        "--btn-color": product.buttonColor,
                        borderColor: product.buttonColor,
                        color: product.buttonColor,
                        borderStyle: "solid",
                        borderWidth: "1.5px",
                      }}
                    >
                      <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
                        View Details
                        <svg
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12H19M12 5L19 12L12 19" />
                        </svg>
                      </span>

                      <span
                        className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-30 transition-all duration-500"
                        style={{ background: product.buttonColor }}
                      ></span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BOTTOM SECTION */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto bg-white/5 border border-gray-800 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 ">
              Connect for Revolution
            </h2><br />

            <a
              href="https://wa.me/918089124307?text=I'm%20interested%20to%20the%20Collaborate"
              className="relative inline-flex items-center gap-3 px-10 py-4 rounded-full
              overflow-hidden group
              bg-gradient-to-r from-[#39ff14] to-[#00f2fe]
              text-black font-semibold tracking-wide
              shadow-[0_0_18px_rgba(0,255,200,0.35)]
              transition-transform duration-300 hover:scale-[1.03]"
            >
              Connect Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Base;
