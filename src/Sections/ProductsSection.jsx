import React from "react";
import Pro1 from "../assets/images/pro-1.svg";
import Pro2 from "../assets/images/pro-2.svg";
import Pro3 from "../assets/images/pro-3.svg";

const products = [
  {
    title: "Smart Care App",
    subtitle: "Health Application",
    image: Pro1,
    badge: {
      show: true,
      label: "Featured",
      style:
        "bg-gradient-to-r  from-[#39ff14] to-[#00f2fe] text-black font-orbitron text-[0.75rem] font-bold shadow-[0_0_12px_rgba(57,255,20,0.45)]",
    },
    description: "The Future of Care in Your Hand",
    link: "https://care.neuraq.in/",
    buttonColor: "#39ff14",
  },
  {
    title: "TBGS Track",
    subtitle: "Company Management Software",
    image: Pro2,
    badge: null,
    description: "We’ve developed their entire company management system",
    link: "#",
    buttonColor: "#39ff14",
  },
  {
    title: "Academic Website",
    subtitle: "Digital Academy Platform",
    image: Pro3,
    badge: {
      show: true,
      label: "New",
      style:
        "bg-gradient-to-r from-[#39ff14] to-[#00f2fe] text-black font-orbitron text-[0.75rem] font-bold shadow-[0_0_12px_rgba(57,255,20,0.45)]",
    },
    description: "Level up your Academy in the Digital World.",
    link: "https://najmulhuda.com/",
    buttonColor: "#39ff14",
  },
];

const ProductsSection = () => {
  return (
    <section
      id="products"
      className="relative py-20 bg-black/95 text-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#39ff14] to-[#22ce33] bg-clip-text text-transparent">
            Our Innovations
          </h2>
          <p className="font-orbitron text-lg mt-4 text-white">
            Cutting-edge solutions transforming digital identity
          </p>
        </div>

        {/* Product Grid */}
        <div className="flex justify-center">
          <div className="grid w-[85%] md:grid-cols-3 gap-12 place-items-center">
            {products.map((product, index) => (
              <div
                key={index}
                className="relative bg-white/5 border border-gray-800 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 product-card"
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full object-cover"
                  />

                  {product.badge?.show && (
                    <div
                      className={`absolute top-3 right-3 px-3 py-1 rounded-full ${product.badge.style}`}
                    >
                      {product.badge.label}
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition-all duration-500 flex items-center justify-center text-center p-4">
                    <div>
                      <h3 className="text-2xl font-extrabold">
                        {product.title}
                      </h3>
                      <p className="font-orbitron text-sm mt-2">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                  <p className="text-gray-200 font-orbitron text-sm mb-4">
                    {product.subtitle}
                  </p>

                  {/* ✅ Improved Neon Hover Button */}
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-orbitron text-sm transition-all duration-300 group hover:shadow-[0_0_18px_var(--btn-color)]"
                    style={{
                      "--btn-color": product.buttonColor,
                      borderColor: product.buttonColor,
                      color: product.buttonColor,
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

                    {/* Smooth glowing background expansion */}
                    <span
                      className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-30 transition-all duration-500"
                      style={{ background: product.buttonColor }}
                    ></span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-14">
          <a
            href="base.html"
            className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full
            overflow-hidden group
            bg-gradient-to-r from-[#39ff14] to-[#00f2fe]
            text-black font-semibold tracking-wide
            shadow-[0_0_18px_rgba(0,255,200,0.35)]
            transition-transform duration-300 hover:scale-[1.03]"
          >
            <span className="relative z-10 flex items-center gap-3">
              View All
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

            {/* Sliding Hover Shine Overlay */}
            <span
              className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left
             bg-white/25 transition-transform duration-500 ease-out"
            ></span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
