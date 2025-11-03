import React from "react";
import BlogOne from '../assets/images/blog-1.svg'
import BlogTwo from '../assets/images/blog-2.svg'


function NewsSection() {
  return (
    <section
      id="news-section"
      className="news-column-section relative py-20 bg-[#050b1a] text-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 tracking-wide">
            Latest Articles
          </h2>
          <p className="text-gray-400 text-lg">
            Insights, stories and ideas from our team
          </p>
        </div>

        {/* News Columns */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Article 1 */}
          <article
            className="news-article bg-[#0b1324] p-6 rounded-2xl border border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            data-scroll
          >
            <div className="flex items-center justify-between mb-3 text-sm text-gray-400">
              <span className="bg-indigo-600/20 text-indigo-400 px-3 py-1 rounded-full">
                Award
              </span>
              <span>July 5, 2025</span>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Neuraq Technologies Shines at Promising Kerala Entrepreneurs Awards
              2025
            </h3>

            <div className="relative mb-5">
              <img
                src={BlogOne}
                alt="Neural network visualization"
                className="w-full rounded-xl border border-gray-700"
              />
              <div className="absolute bottom-2 left-3 bg-black/70 text-xs text-gray-300 px-3 py-1 rounded">
                Promising Kerala Entrepreneurs Awards 2025!
              </div>
            </div>

            <div className="text-gray-300 space-y-3 text-justify">
              <p>
                On July 5, 2025, at Kochi’s Gokulam Park, Neuraq Technologies was
                honored with the Promising Startup Award at the Promising Kerala
                Entrepreneurs Awards. This recognition celebrates innovation,
                resilience, and the entrepreneurial spirit—and we’re proud to
                stand among Kerala’s most inspiring startups.
              </p>
              <p>
                For us at Neuraq, this award is more than a symbol—it's a powerful
                validation of the hard work, sleepless nights, and unwavering
                belief in our mission. It reinforces that our technology solutions
                are not just innovative, but meaningful and relevant in today’s
                rapidly evolving world.
              </p>
              <p>
                We extend our heartfelt thanks to our team, supporters, and
                community. This milestone energizes us to continue building with
                clarity, purpose, and a deep commitment to impact.
              </p>
            </div>
          </article>

          {/* Article 2 */}
          <article
            className="news-article bg-[#0b1324] p-6 rounded-2xl border border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            data-scroll
          >
            <div className="flex items-center justify-between mb-3 text-sm text-gray-400">
              <span className="bg-pink-600/20 text-pink-400 px-3 py-1 rounded-full">
                Technology
              </span>
              <span>May 18, 2025</span>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Neuraq Technologies Launches Mobile App for Palliative Care
            </h3>

            <div className="relative mb-5">
              <img
                src={BlogTwo}
                alt="Quantum computer"
                className="w-full rounded-xl border border-gray-700"
              />
              <div className="absolute bottom-2 left-3 bg-black/70 text-xs text-gray-300 px-3 py-1 rounded">
                Launches Smart Healthcare App
              </div>
            </div>

            <div className="text-gray-300 space-y-3 text-justify">
              <p>
                Though the app was introduced at a palliative care event—"Arike,"
                hosted by Makkaraparamba Palliative—its functionality goes far
                beyond palliative support. It is built to serve the entire medical
                ecosystem, offering features that simplify communication, streamline
                patient tracking, and reduce the operational burden on healthcare
                professionals.
              </p>
              <p>
                The official launch was attended by notable personalities including
                Dr. P. Unni, with the ceremony conducted by Muhammad Musthafa
                Tharayil, MD of Tharayil Business Group. During the same event, our
                development team received a memento of appreciation from
                Makkaraparamba Palliative—recognizing our technological contribution
                to healthcare.
              </p>
              <p>
                This app represents a significant leap forward in making palliative
                care more accessible and efficient. By reducing paperwork and
                administrative tasks, we're enabling healthcare providers to focus
                on what truly matters — compassionate patient care.
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* Binary Background Effect */}
      <div className="absolute bottom-0 w-full overflow-hidden text-center opacity-10 text-green-400 animate-pulse">
        <span className="text-xs md:text-sm">
          01001110 01100101 01110101 01110010 01100001 01110001 00100000 01010100
          01100101 01100011 01101000 01101110 01101111 01101100 01101111 01100111
          01101001 01100101 01110011
        </span>
      </div>
    </section>
  );
}

export default NewsSection;
