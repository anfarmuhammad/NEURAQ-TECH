import React from "react";
import { motion } from "framer-motion";
import Profile1 from "../assets/images/profile-1.svg";
import Profile2 from "../assets/images/profile-2.svg";
import Profile3 from "../assets/images/profile-3.svg";
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
      img: Profile1,
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
      img: Profile2,
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
      img: Profile3,
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
    <section id="team" className="relative py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#39ff14] to-[#22ce33] bg-clip-text text-transparent">
            Our Visionaries
          </h2>
          <p className="font-orbitron text-lg mt-4 text-white">
            The brilliant minds shaping the future of digital identity
          </p>
        </div>

        {/* Team Grid (Same layout as the product cards) */}
        <div className="flex justify-center">
          <div className="grid w-[85%] md:grid-cols-3 gap-12 place-items-center">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative bg-white/5 border border-gray-800 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Image + Hover Social Overlay */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />

                  <div className="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition-all duration-500 flex items-center justify-center p-4">
                    <div className="flex gap-4 text-xl">
                      {member.social.map((s, i) => (
                        <a
                          key={i}
                          href={s.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white hover:text-[#39ff14] transition"
                        >
                          {s.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold ">{member.name}</h3>
                  <p className="text-gray-200 font-orbitron text-sm mb-3">{member.title}</p>

                  <p className="text-gray-300 font-orbitron text-lg  leading-relaxed mb-4">{member.bio}</p>

                  {/* Tags */}
                  {member.tags && (
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                      {member.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-orbitron rounded-full   bg-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-14">
          <a
            href="about.html"
            className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full
            overflow-hidden group
            bg-gradient-to-r from-[#39ff14] to-[#00f2fe]
            text-black font-semibold tracking-wide
            shadow-[0_0_18px_rgba(0,255,200,0.35)]
            transition-transform duration-300 hover:scale-[1.03]"
          >
            <span className="relative z-10 flex items-center gap-3">
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
            </span>

            {/* Hover Shine Overlay */}
            <span
              className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left
              bg-white/25 transition-transform duration-500 ease-out"
            ></span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default TeamSection;
