// src/Sections/NewsSection.jsx
import React from "react";
import BlogOne from "../assets/images/blog-1.svg";
import BlogTwo from "../assets/images/blog-2.svg";

function NewsSection() {
  const articles = [
    {
      category: "Award",
      date: "July 5, 2025",
      title: "Neuraq Technologies Shines at Promising Kerala Entrepreneurs Awards 2025",
      image: BlogOne,
      alt: "Neuraq Technology Award Event",
      badge: "Promising Kerala Entrepreneurs Awards 2025!",
      badgeClasses: "absolute bottom-2 left-3 bg-black/90 text-xs text-white px-3 py-1 rounded",
      paragraphs: [
        `On July 5, 2025, at Kochi’s Gokulam Park, Neuraq Technologies was honored with the Promising Startup Award at the Promising Kerala Entrepreneurs Awards. This recognition celebrates innovation, resilience, and the entrepreneurial spirit—and we’re proud to stand among Kerala’s most inspiring startups.`,
        `For us at Neuraq, this award is more than a symbol—it's a powerful validation of the hard work, sleepless nights, and unwavering belief in our mission. It reinforces that our technology solutions are not just innovative, but meaningful and relevant in today’s rapidly evolving world.`,
        `We extend our heartfelt thanks to our team, supporters, and community. This milestone energizes us to continue building with clarity, purpose, and a deep commitment to impact.`,
      ],
      categoryClasses: "bg-indigo-600/20 font-orbitron text-sm leading-relaxed text-white px-3 py-1 rounded-full",
    },
    {
      category: "Technology",
      date: "May 18, 2025",
      title: "Neuraq Technologies Launches Mobile App for Palliative Care",
      image: BlogTwo,
      alt: "Neuraq Quantum Computer Visualization",
      badge: "Launches Smart Healthcare App",
      badgeClasses: "absolute bottom-2 left-3 bg-black/90 text-xs text-white px-3 py-1 rounded",
      paragraphs: [
        `Though the app was introduced at a palliative care event—"Arike," hosted by Makkaraparamba Palliative—its functionality goes far beyond palliative support. It is built to serve the entire medical ecosystem, offering features that simplify communication, streamline patient tracking, and reduce the operational burden on healthcare professionals.`,
        `The official launch was attended by notable personalities including Dr. P. Unni, with the ceremony conducted by Muhammad Musthafa Tharayil, MD of Tharayil Business Group. During the same event, our development team received a memento of appreciation from Makkaraparamba Palliative—recognizing our technological contribution to healthcare.`,
        `This app represents a significant leap forward in making palliative care more accessible and efficient. By reducing paperwork and administrative tasks, we're enabling healthcare providers to focus on what truly matters — compassionate patient care.`,
      ],
      categoryClasses: "bg-pink-600/20 font-orbitron text-sm leading-relaxed text-white px-3 py-1 rounded-full",
    },
  ];

  return (
    <section
      id="news-section"
      className="news-column-section relative py-20 bg-black text-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-[#39ff14] to-[#22ce33] bg-clip-text text-transparent">
            Latest Articles
          </h2>
          <p className="text-white text-lg mt-4">
            Insights, stories and ideas from our team
          </p>
        </div>

        {/* News Columns */}
        <div className="grid md:grid-cols-2 gap-10">
          {articles.map((article, idx) => (
            <article
              key={idx}
              className={`news-article p-6 rounded-2xl border ${idx === 0 ? "border-gray-800" : "border-gray-700"} bg-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-xl`}
              data-scroll
            >
              <div className="flex items-center justify-between mb-3 text-sm text-gray-400">
                <span className={article.categoryClasses}>{article.category}</span>
                <span>{article.date}</span>
              </div>

              <h3 className="text-2xl font-extrabold mb-4 text-white">
                {article.title}
              </h3>

              <div className="relative mb-5">
                <img
                  src={article.image}
                  alt={article.alt}
                  className="w-full rounded-xl border border-gray-700"
                />
                <div className={article.badgeClasses}>
                  {article.badge}
                </div>
              </div>

              <div className="font-orbitron text-sm leading-relaxed text-white space-y-3 text-justify">
                {article.paragraphs.map((p, pi) => (
                  <p key={pi}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
