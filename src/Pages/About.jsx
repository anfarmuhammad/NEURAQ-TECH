// src/pages/About.jsx
import React from "react";
import { useCounter } from "../Hooks/useCounter";
import { Link } from "react-router-dom";
import {
  MicOff,
  UserCheck,
  Timer,
  UserMinus,
  Type,
  Mic,
  Target,
  Languages,
  BarChart2,
} from "lucide-react";
import { motion } from "framer-motion";
import Profile from "../assets/images/profile-1.svg";
import Signature from "../assets/images/sin.png";
import News from "../assets/images/blog-2.svg";
import Award from "../assets/images/HAND.svg";
import { FaTrophy } from "react-icons/fa";
import Profile1 from "../assets/images/profile-1.svg";
import Profile2 from "../assets/images/profile-2.svg";
import Profile3 from "../assets/images/profile-3.svg";
import Profile4 from "../assets/images/profile-4.sg.jpeg";
import Profile5 from "../assets/images/profile-6.svg";
import Profile6 from "../assets/images/profile-5.svg";
import Profile7 from "../assets/images/profile-7.svg";
import Profile8 from "../assets/images/profile-9.svg";
import Profile9 from "../assets/images/profile-8.svg";

const teamMembers = [
  {
    name: "Mr. Shaheen K.P",
    role: "Founder & CEO",
    image: Profile1,
    bio: "Visionary leader with a passion for socially impactful technology and inclusive innovation.",
    tags: ["Founder", "Leadership"],
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Mr. Sajid Kuzhiyengal",
    role: "Managing Director",
    image: Profile2,
    bio: "Brings 22+ years of business leadership and a forward-thinking approach to technology.",
    tags: ["Business Strategy", "Vision"],
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Mr. Mohammed Ashik",
    role: "Senior Developer",
    image: Profile3,
    bio: "Full-stack developer specializing in accessible user interfaces.",
    tags: ["Developer", "Full-Stack"],
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Mr. Mohammed Anfar M",
    role: "Developer",
    image: Profile4,
    bio: "Full-stack developer specializing in accessible user interfaces.",
    tags: ["Developer"],
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Mr. Irshad Ali",
    role: "Graphic Designer",
    image: Profile5,
    bio: "Designs that speak louder than words – bringing Neuraq’s vision to life.",
    tags: ["Design", "Creative"],
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Mr. Minhaj",
    role: "Media Wing",
    image: Profile6,
    bio: "Creative force behind the lens, capturing Neuraq’s journey through every frame.",
    tags: ["Media", "Creative"],
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Mr. Nishanth VM",
    role: "Developer (Intern)",
    image: Profile7,
    bio: "",
    tags: ["Intern", "Developer"],
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Mr. Srikanth Dwarapureddy",
    role: "Developer (Intern)",
    image: Profile8,
    bio: "",
    tags: ["Intern", "Developer"],
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Mr. Rajkumar R",
    role: "Developer (Intern)",
    image: Profile9,
    bio: "",
    tags: ["Intern", "Developer"],
    social: { linkedin: "#", twitter: "#" },
  },
];

const heuProblems = [
  {
    icon: <UserCheck className="w-6 h-6 text-gray-400" />,
    title: "Lack of Monitoring",
    text: "Lack of continuous monitoring and feedback for speech therapy",
  },
  {
    icon: <Target className="w-6 h-6 text-gray-400" />,
    title: "Limited Personalization",
    text: "Limited access to personalized exercises",
  },
  {
    icon: <Timer className="w-6 h-6 text-gray-400" />,
    title: "Delayed Intervention",
    text: "Delayed intervention for speech challenges",
  },
  {
    icon: <UserMinus className="w-6 h-6 text-gray-400" />,
    title: "Confidence Issues",
    text: "Social anxiety and reduced confidence",
  },
  {
    icon: <Type className="w-6 h-6 text-gray-400" />,
    title: "Continuous Voice Analysis",
    text: "Difficulty with pronunciation in language learning",
  },
];

const heuSolution = [
  {
    icon: <Mic className="w-6 h-6 text-gray-300" />,
    title: "Continuous Voice Analysis",
    desc: "Real-time monitoring of speech patterns and disfluencies",
  },
  {
    icon: <Target className="w-6 h-6 text-gray-300" />,
    title: "Personalized Exercises",
    desc: "Tailored activities based on individual speech patterns",
  },
  {
    icon: <Languages className="w-6 h-6 text-gray-300" />,
    title: "Multilingual Support",
    desc: "Supports English and Malayalam with more to come",
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-gray-300" />,
    title: "Progress Tracking",
    desc: "Detailed analytics to monitor improvement over time",
  },
];

const About = () => {
  const happyCustomers = useCounter(29);
  const projects = useCounter(147);

  return (
    <main className="min-h-screen bg-black text-light pt-20">
      {/* Founder Story */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto  w-[90%] flex items-center justify-center px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-12 w-[90%] items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl bg-amber-500 h-full overflow-hidden shadow-2xl">
                <img
                  src={Profile}
                  alt="Shaheen K.P., Founder"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 pointer-events-none" />
                <div
                  className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(57, 255, 20, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 20, 0.1) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
              </div>
            </motion.div>
            <motion.article
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                The Unyielding Spirit of Neuraq
              </h1>
              <blockquote className="text-xl font-orbitron font-bold leading-relaxed text-white mb-6 border-l-4 border-primary pl-4">
                "Neuraq is more than a company—it's a living testament to what belief can achieve. Belief in technology. Belief in purpose."
              </blockquote>
              <div className="space-y-4 font-orbitron text-[1.2rem] leading-relaxed text-gray-200">
                <p>
                  In the luminous dawn of 2024, a bold and visionary 19-year-old, Shaheen K.P., embarked on a transformative journey that would give birth to Neuraq Technologies. What began as a youthful dream soon evolved into a vibrant digital movement, driven by a belief in technology's power not just to innovate, but to uplift.
                </p>
                <p>
                  His journey, marked by thoughtful pauses and quiet resilience, echoes a deeper truth: that strength is often sculpted not by the absence of obstacles, but by the unwavering pursuit of vision despite them.
                </p>
              </div>
              <footer className="flex items-center  gap-4 mt-8 pt-6 border-t border-gray-800">
                <img
                  src={Signature}
                  alt="Shaheen K.P. signature"
                  className="h-12"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold font-orbitron text-gray-200 leading-relaxed">
                    Shaheen K.P.
                  </p>
                  <p className="text-gray-300 font-orbitron leading-relaxed">
                    Founder & CEO
                  </p>
                </div>
              </footer>
            </motion.article>
          </div>
        </div>
      </section>

      {/* HeuLink Initiative */}
      <section className="relative py-20 bg-white/5 text-white overflow-hidden">
        <div className="container  w-[90%] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#39ff14] to-[#07deee] bg-clip-text text-transparent">
              HeuLink Initiative
            </h1>
            <br />
            <p className="text-gray-300 text-xl font-semibold font-orbitron mt-2">
              Breaking communication barriers with AI
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#200C0C]/60 backdrop-blur-xl border border-red-500/25 rounded-2xl p-10"
            >
              <div className="flex flex-col items-center text-center mb-8">
                <MicOff className="w-12 h-12 text-red-400 mb-4" />
                <h3 className="text-2xl font-extrabold text-white">The Problem</h3>
              </div>
              <div className="space-y-6 font-semibold font-orbitron">
                {heuProblems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="text-gray-400 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#071C1C]/60 backdrop-blur-xl border border-cyan-400/25 rounded-2xl p-10"
            >
              <div className="flex flex-col items-center text-center mb-8">
                <Mic className="w-12 h-12 text-cyan-300 mb-4" />
                <h3 className="text-2xl font-extrabold text-white">Our Solution</h3>
              </div>
              <div className="space-y-6 font-semibold font-orbitron">
                {heuSolution.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          {/* CTA */}
          <div className="text-center max-w-3xl mx-auto mt-16">
            <p className="text-white text-xl font-semibold font-orbitron mb-6">
              We envision a future where communication barriers no longer exist—where every voice, regardless of its challenges, is heard clearly and confidently.
            </p>
            <button
              className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden group
              bg-gradient-to-r from-[#39ff14] font-extrabold to-[#00f2fe] text-black tracking-wide font-orbitron
              shadow-[0_0_18px_rgba(0,255,200,0.35)] transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="relative z-10 text-white flex items-center gap-3">
                Learn More About HeuLink →
              </span>

              <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left 
                  bg-white/25 transition-transform duration-500 ease-out"></span>
            </button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative py-20 bg-darker">
        <div className="container w-[80%] mx-auto px-4">
          <motion.header
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#39ff14] to-[#07deee] bg-clip-text text-transparent">
              Our Impact
            </h2>
            <br />
            <p className="text-gray-300 text-xl font-semibold font-orbitron">Technology with purpose</p>
          </motion.header>
          <div className="grid gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-10 items-center"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={News} alt="Palliative Care App" className="w-full h-auto" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white mb-4">
                  Smart Care App
                </h3>
                <p className="text-white font-semibold font-orbitron mb-4">
                  Developed in collaboration with Makkaraparamba Palliative Care, this intuitive solution supports caregivers and medical professionals in managing patients more effectively, enhancing quality of life for those in need.
                </p>
                <p className="text-white font-semibold font-orbitron">
                  The app's unveiling at the 'Arike' event was graced by Mr. Muhammad Musthafa and Dr. P. Unneen, underscoring its significance in healthcare innovation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Award section */}
      <section className="w-full min-h-screen bg-white/5 text-white py-20 flex flex-col items-center">
        <h2 className="text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#39ff14] to-[#07deee] bg-clip-text text-transparent">
          Recognition
        </h2>
        <br />
        <p className="font-semibold text-gray-300 font-orbitron mb-16">
          Celebrating our achievements
        </p>
        <div className="max-w-6xl w-full bg-[#111] border border-gray-800 rounded-3xl p-10 flex items-center gap-10 lg:flex-row flex-col">
          <div className="flex-1 flex flex-col gap-3">
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full flex items-center justify-center">
              <FaTrophy className="text-5xl text-white" />
            </div>
            <h3 className="text-3xl font-extrabold">Promising Startup Award 2025</h3>
            <p className="text-xl font-semibold text-gray-300 font-orbitron">
              Promising Kerala Entrepreneurs Awards
            </p>
            <p className="text-gray-400 font-semibold font-orbitron">
              July 5, 2025 | Kochi, Kerala
            </p>
            <p className="font-semibold text-gray-300 font-orbitron leading-relaxed">
              This recognition celebrates innovation, resilience, and the entrepreneurial spirit. We’re proud to stand among Kerala’s most inspiring startups. For us at Neuraq, this award is more than a symbol. It reflects countless hours of effort, problem-solving, and belief in our mission.
            </p>
          </div>
          <div className="flex-1 w-full flex justify-center">
            <img src={Award} alt="Award Ceremony" className="rounded-2xl shadow-[0_0_40px_rgba(0,255,200,0.25)] w-full object-cover max-h-[430px]" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        className="relative py-20 bg-black"
        aria-labelledby="team-heading"
      >
        <div className="container  w-[78%] mx-auto px-4">
          <div className="text-center  mb-14">
            <h2
              id="team-heading"
              className="text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#39ff14] to-[#07deee] bg-clip-text text-transparent"
            >
              Our Team
            </h2>
            <br />
            <p className="text-gray-300 text-xl font-semibold font-orbitron">
              The brilliant minds behind our technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#0d0d0d] rounded-xl border text-center overflow-hidden w-full max-w-sm"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="px-6 py-6">
                  <h3 className="text-white font-bold text-lg">{member.name}</h3>
                  <p className="text-white text-sm font-semibold mb-3 font-orbitron">{member.role}</p>
                  <p className="text-gray-100 text-sm font-orbitron leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative text-white bg-white/5 border-b-1 py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-orbitron mb-4">
              Join Our Mission
            </h3>
            <p className="text-gray-300 mb-8">
              We're always looking for passionate individuals to join our team.
            </p>
            <Link
              to="/career"
              className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden group
              bg-gradient-to-r from-[#39ff14]  to-[#00f2fe] text-black  tracking-wide font-orbitron
              shadow-[0_0_18px_rgba(0,255,200,0.35)] transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="relative z-10 text-white flex font-bold items-center gap-3">
                View Career Opportunities →
              </span>

              <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left 
                  bg-white/25 transition-transform duration-500 ease-out"></span>
            </Link>
          </motion.section>
        </div>
      </section>
    </main>
  );
};

export default About;
