import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaMessage,
  FaXTwitter,
} from "react-icons/fa6";

function TeamSection() {
  const teamMembers = [
    {
      name: "Mr. Mohammed Shaheen KP",
      title: "CEO & Founder",
      img: "assets/images/profile-1.svg",
      bio: "A dynamic tech leader and current BS Data Science student at IIT Madras. With strong leadership skills and hands-on experience in software development, Shaheen bridges innovation and execution.",
      tags: ["Founder", "Leadership"],
      social: [
        { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/shaheenkp/" },
        { icon: <FaInstagram />, url: "https://www.instagram.com/___zcl3_/" },
        { icon: <FaXTwitter />, url: "https://x.com/Msk012005" },
      ],
    },
    {
      name: "Mr. Sajid Kuzhiyengal",
      title: "Managing Director",
      img: "assets/images/profile-3.svg",
      bio: "22+ years of experience managing successful businesses. Sajid brings deep strategic insight and leadership to the team, combining traditional business acumen with a vision for future technologies.",
      tags: ["Business Strategy", "Vision"],
      social: [
        { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/sajid-kp-62a005341/" },
        { icon: <FaInstagram />, url: "https://www.instagram.com/sajid.kuzhiyengal/" },
        { icon: <FaMessage />, url: "https://wa.me/919947020307" },
      ],
    },
    {
      name: "Mr. Mohammed Ashik",
      title: "Senior Developer",
      img: "assets/images/profile-2.svg",
      bio: "A senior developer specializing in React, Node.js, Python, and the MERN stack with TypeScript. Ashik leads our product UX and engineering teams, focusing on all our products and software.",
      tags: ["Developer", "Project Lead"],
      social: [
        { icon: <FaLinkedinIn />, url: "#" },
        { icon: <FaInstagram />, url: "#" },
        { icon: <FaEnvelope />, url: "#" },
      ],
    },
  ];

  return (
    <section id="team" className="relative bg-black text-white py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-2 text-cyan-400">Our Visionaries</h2>
          <p className="text-gray-400">
            The brilliant minds shaping the future of digital identity
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative bg-gradient-to-b from-slate-900 to-black rounded-2xl p-6 shadow-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl group">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-4">
                  <div className="flex gap-4">
                    {member.social.map((s, i) => (
                      <a
                        key={i}
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white hover:text-cyan-400 text-lg transition"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-cyan-400">{member.name}</h3>
                <p className="text-gray-400 text-sm">{member.title}</p>
                <p className="mt-4 text-gray-300 text-sm leading-relaxed">{member.bio}</p>

                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {member.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full px-3 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Circuit Effect */}
              <div className="absolute top-2 left-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <div className="absolute bottom-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a
            href="about.html"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-full transition"
          >
            Meet the Full Team
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
      <div className="absolute bottom-0 left-0 w-full text-center text-cyan-600/10 text-xs select-none">
        <span>
          01010100 01100101 01100001 01101101 00100000 01001110 01100101 01110101 01110010 01100001 01110001
        </span>
      </div>
    </section>
  );
}

export default TeamSection;
