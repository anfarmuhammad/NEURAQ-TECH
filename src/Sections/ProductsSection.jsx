import React from "react";
import Pro1 from '../assets/images/pro-1.svg'
import Pro2 from '../assets/images/pro-2.svg'
import Pro3 from '../assets/images/pro-3.svg'

function ProductsSection() {
  return (
    <section
      id="products"
      className="products-section relative py-20 bg-[#050b1a] text-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          data-scroll
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white tracking-wide">
            Our Innovations
          </h2>
          <p className="text-gray-400 text-lg">
            Cutting-edge solutions transforming digital identity
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Product 1 */}
          <div
            className="product-card relative bg-[#0b1324] border border-gray-800 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            data-scroll
          >
            <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src={Pro1}
                alt="Smart Care App"
                className="w-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-indigo-600/20 text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full">
                Featured
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition-all duration-500 flex items-center justify-center text-center p-4">
                <div>
                  <h3 className="text-xl font-bold text-indigo-400">
                    Smart Care App
                  </h3>
                  <p className="text-gray-300 mt-2">
                    The Future of Care in Your Hand
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-1">Smart Care App</h3>
              <p className="text-gray-400 mb-4">Health Application</p>
              <a
                href="https://care.neuraq.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full border border-indigo-500 text-indigo-400 hover:bg-indigo-600/20 transition-all duration-300"
              >
                <span>View Details</span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12H19M12 5L19 12L12 19" />
                </svg>
              </a>
            </div>

            {/* Circuit Nodes */}
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-indigo-500 rounded-full animate-ping" />
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-indigo-500 rounded-full animate-pulse" />
          </div>

          {/* Product 2 */}
          <div
            className="product-card relative bg-[#0b1324] border border-gray-800 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            data-scroll
          >
            <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src={Pro2}
                alt="TBGS Track"
                className="w-full object-cover"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition-all duration-500 flex items-center justify-center text-center p-4">
                <div>
                  <h3 className="text-xl font-bold text-cyan-400">TBGS Track</h3>
                  <p className="text-gray-300 mt-2">
                    We’ve developed their entire company management system
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-1">TBGS Track</h3>
              <p className="text-gray-400 mb-4">
                Company Management Software
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-600/20 transition-all duration-300"
              >
                <span>View Details</span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12H19M12 5L19 12L12 19" />
                </svg>
              </a>
            </div>

            <div className="absolute -top-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
          </div>

          {/* Product 3 */}
          <div
            className="product-card relative bg-[#0b1324] border border-gray-800 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            data-scroll
          >
            <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src={Pro3}
                alt="Accadamic Website"
                className="w-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-pink-600/20 text-pink-400 text-xs font-semibold px-3 py-1 rounded-full">
                New
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition-all duration-500 flex items-center justify-center text-center p-4">
                <div>
                  <h3 className="text-xl font-bold text-pink-400">
                    Accadamic Website
                  </h3>
                  <p className="text-gray-300 mt-2">
                    Level up your Academy in Digital World.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-1">Accadamic Website</h3>
              <p className="text-gray-400 mb-4">
                Level up your Academy in Digital World.
              </p>
              <a
                href="https://najmulhuda.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full border border-pink-500 text-pink-400 hover:bg-pink-600/20 transition-all duration-300"
              >
                <span>View Details</span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12H19M12 5L19 12L12 19" />
                </svg>
              </a>
            </div>

            <div className="absolute -top-2 -right-2 w-3 h-3 bg-pink-400 rounded-full animate-ping" />
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-pink-400 rounded-full animate-pulse" />
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-14">
          <a
            href="base.html"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-indigo-500 text-indigo-400 hover:bg-indigo-600/20 transition-all duration-300"
          >
            <span>View All</span>
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12H19M12 5L19 12L12 19" />
            </svg>
          </a>
        </div>
      </div>

      {/* Binary Background */}
      <div className="absolute bottom-0 w-full text-center text-green-400 opacity-10 animate-pulse">
        <span className="text-xs md:text-sm">
          01010000 01110010 01101111 01100100 01110101 01100011 01110100 01110011
          00100000 00100110 00100000 01010000 01110010 01101111 01101010 01100101
          01100011 01110100 01110011
        </span>
      </div>
    </section>
  );
}

export default ProductsSection;

