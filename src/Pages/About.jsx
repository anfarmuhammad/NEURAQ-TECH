// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { useCounter } from "../Hooks/useCounter";
import { TechButton } from "../Ui/TechButton";
import { Heart, Target } from "lucide-react";
import Profile from "../assets/images/profile-1.svg";
import Signature from "../assets/images/sin.png";
import News from "../assets/images/blog-2.svg"
import Award from "../assets/images/HAND.svg"
import { FaTrophy } from "react-icons/fa";
import Profile1 from "../assets/images/profile-1.svg"
import Profile2 from "../assets/images/profile-2.svg"
import Profile3 from "../assets/images/profile-3.svg"
import Profile4 from "../assets/images/profile-4.svg"
import Profile5 from "../assets/images/profile-6.svg"
import Profile6 from "../assets/images/profile-5.svg"
import Profile7 from "../assets/images/profile-7.svg"
import Profile8 from "../assets/images/profile-9.svg"
import Profile9 from "../assets/images/profile-8.svg"



const About = () => {
  const happyCustomers = useCounter(29);
  const projects = useCounter(147);

  const teamMembers = [
    {
      name: "Mr. Shaheen K.P",
      role: "Founder & CEO",
      image: Profile1,
      bio: "Visionary leader with a passion for socially impactful technology and inclusive innovation.",
      tags: ["Founder", "Leadership"],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Mr. Sajid Kuzhiyengal",
      role: "Managing Director",
      image: Profile2,
      bio: "Brings 22+ years of business leadership and a forward-thinking approach to technology.",
      tags: ["Business Strategy", "Vision"],
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Mr. Mohammed Ashik",
      role: "Senior Developer",
      image: Profile3,
      bio: "Full-stack developer specializing in accessible user interfaces.",
      tags: ["Developer", "Full-Stack"],
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Mr. Mohammed Anfar M",
      role: "Developer",
      image: Profile4,
      bio: "Full-stack developer specializing in accessible user interfaces.",
      tags: ["Developer"],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Mr. Irshad Ali",
      role: "Graphic Designer",
      image: Profile5,
      bio: "Designs that speak louder than words – bringing Neuraq’s vision to life.",
      tags: ["Design", "Creative"],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Mr. Minhaj",
      role: "Media Wing",
      image: Profile6,
      bio: "Creative force behind the lens, capturing Neuraq’s journey through every frame.",
      tags: ["Media", "Creative"],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Mr. Nishanth VM",
      role: "Developer (Intern)",
      image: Profile7,
      bio: "",
      tags: ["Intern", "Developer"],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Mr. Srikanth Dwarapureddy",
      role: "Developer (Intern)",
      image: Profile8,
      bio: "",
      tags: ["Intern", "Developer"],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Mr. Rajkumar R",
      role: "Developer (Intern)",
      image: Profile9,
      bio: "",
      tags: ["Intern", "Developer"],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];


  return (
    <main className="min-h-screen bg-black text-light pt-20">
      {/* Founder Story */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
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
                    backgroundImage: `
                      linear-gradient(rgba(57, 255, 20, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(57, 255, 20, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "30px 30px",
                  }}
                />
              </div>
            </motion.div>

            <motion.article
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 text-gradient">
                The Unyielding Spirit of Neuraq
              </h1>
              <blockquote className="text-xl italic text-gray-300 mb-6 border-l-4 border-primary pl-4">
                "Neuraq is more than a company—it's a living testament to what belief can achieve. Belief in technology. Belief in purpose."
              </blockquote>
              <div className="space-y-4 text-gray-300">
                <p>
                  In the luminous dawn of 2024, a bold and visionary 19-year-old, Shaheen K.P., embarked on a transformative journey that would give birth to Neuraq Technologies. What began as a youthful dream soon evolved into a vibrant digital movement, driven by a belief in technology's power not just to innovate, but to uplift.
                </p>
                <p>
                  His journey, marked by thoughtful pauses and quiet resilience, echoes a deeper truth: that strength is often sculpted not by the absence of obstacles, but by the unwavering pursuit of vision despite them.
                </p>
              </div>

              <footer className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-800">
                <img
                  src={Signature}
                  alt="Shaheen K.P. signature"
                  className="h-12"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold">Shaheen K.P.</p>
                  <p className="text-gray-400">Founder & CEO</p>
                </div>
              </footer>
            </motion.article>
          </div>
        </div>
      </section>

      {/* HeuLink Initiative */}
      <section className="relative py-20 bg-darker overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 text-gradient">
              HeuLink Initiative
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Breaking communication barriers with AI
            </p>
          </motion.header>

          {/* Problem / Solution Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Problem Card */}
            <motion.section
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card border border-red-500/20 p-8 rounded-2xl"
              aria-labelledby="problem-title"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-400" />
                </div>
                <h3 id="problem-title" className="text-2xl font-orbitron text-white">
                  The Problem
                </h3>
              </div>

              <ul className="space-y-4 list-disc list-inside text-gray-300">
                {[
                  "Lack of continuous monitoring and feedback for speech therapy",
                  "Limited access to personalized exercises",
                  "Delayed intervention for speech challenges",
                  "Social anxiety and reduced confidence",
                  "Difficulty with pronunciation in language learning",
                ].map((problem, idx) => (
                  <li key={idx}>{problem}</li>
                ))}
              </ul>
            </motion.section>

            {/* Solution Card */}
            <motion.section
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card border border-primary/20 p-8 rounded-2xl"
              aria-labelledby="solution-title"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 id="solution-title" className="text-2xl font-orbitron text-white">
                  Our Solution
                </h3>
              </div>

              <div className="space-y-5">
                {[
                  {
                    icon: "🎤",
                    title: "Continuous Voice Analysis",
                    desc: "Real-time monitoring of speech patterns and disfluencies",
                  },
                  {
                    icon: "🎯",
                    title: "Personalized Exercises",
                    desc: "Tailored activities based on individual speech patterns",
                  },
                  {
                    icon: "🌐",
                    title: "Multilingual Support",
                    desc: "Currently supporting English and Malayalam with more to come",
                  },
                  {
                    icon: "📊",
                    title: "Progress Tracking",
                    desc: "Detailed analytics to monitor improvement over time",
                  },
                ].map(({ icon, title, desc }, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-2xl" aria-hidden="true">
                      {icon}
                    </span>
                    <div>
                      <h4 className="font-semibold text-white">{title}</h4>
                      <p className="text-gray-400 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16 max-w-4xl mx-auto"
          >
            <p className="text-xl text-gray-300 mb-8">
              We envision a future where communication barriers no longer exist—
              where every voice, regardless of its challenges, is heard clearly
              and confidently.
            </p>
            <TechButton variant="primary" size="large">
              Learn More About HeuLink
            </TechButton>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative py-20 bg-darker">
        <div className="container mx-auto px-4">
          <motion.header
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 text-gradient">
              Our Impact
            </h2>
            <p className="text-xl text-gray-300">Technology with purpose</p>
          </motion.header>

          <div className="grid gap-16">
            {/* Impact Story */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-10 items-center"
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={News}
                  alt="Palliative Care App"
                  className="w-full h-auto"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-3xl font-semibold text-white mb-4">
                  Smart Care App
                </h3>
                <p className="text-gray-300 mb-4">
                  Developed in collaboration with Makkaraparamba Palliative Care, this intuitive solution supports caregivers and medical professionals in managing patients more effectively.
                </p>
                <p className="text-gray-400 text-sm">
                  The app's unveiling at the 'Arike' event was graced by Mr. Muhammad Musthafa and Dr. P. Unneen, underscoring its significance in healthcare innovation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Award section */}
      <section className="w-full min-h-screen bg-black text-white py-20 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-green-400 tracking-wide mb-3">
          Recognition
        </h2>
        <p className="text-gray-400 text-lg mb-16">
          Celebrating our achievements
        </p>

        {/* Content Box */}
        <div className="max-w-6xl w-full bg-[#111] border border-gray-800 rounded-3xl p-10 flex items-center gap-10 
            lg:flex-row flex-col transition-all duration-300">

          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full flex items-center justify-center">
              <FaTrophy className="text-5xl text-white" />
            </div>

            <h3 className="text-3xl font-bold">
              Promising Startup Award 2025
            </h3>

            <p className="text-xl font-semibold text-gray-300">
              Promising Kerala Entrepreneurs Awards
            </p>

            <p className="text-gray-500">
              July 5, 2025 | Kochi, Kerala
            </p>

            <p className="text-gray-400 leading-relaxed">
              This recognition celebrates innovation, resilience, and the
              entrepreneurial spirit. We’re proud to stand among Kerala’s most
              inspiring startups. For us at Neuraq, this award is more than a
              symbol. It reflects countless hours of effort, problem-solving,
              and belief in our mission.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full flex justify-center">
            <img
              src={Award}
              alt="Award Ceremony"
              className="rounded-2xl shadow-[0_0_40px_rgba(0,255,200,0.25)] w-full object-cover max-h-[430px]"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 bg-black" aria-labelledby="team-heading">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2
              id="team-heading"
              className="text-4xl font-bold font-orbitron mb-3 text-green-400"
            >
              Our Team
            </h2>
            <p className="text-gray-400 text-lg">
              The brilliant minds behind our technology
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#0d0d0d] rounded-xl border border-gray-800 shadow-lg text-center overflow-hidden w-full max-w-sm"
              >
                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />

                {/* Text */}
                <div className="px-6 py-6">
                  <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                  <p className="text-green-400 text-sm mb-3 font-orbitron">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Stats Section
      <section className="relative py-20 bg-darker" aria-labelledby="impact-heading">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 id="impact-heading" className="text-3xl md:text-4xl font-bold font-orbitron mb-6 text-gradient">
                Our Impact in Numbers
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Measuring our progress and the value we've delivered to our clients and community.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold font-orbitron text-gradient mb-2">
                    {happyCustomers}+
                  </div>
                  <div className="text-gray-400">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold font-orbitron text-gradient mb-2">
                    {projects}+
                  </div>
                  <div className="text-gray-400">Projects</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {values.map(({ icon: Icon, title, description }, index) => (
                <section key={index} className="flex gap-4 glass-card p-6" aria-label={title}>
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                    <p className="text-gray-300">{description}</p>
                  </div>
                </section>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative text-white py-20 text-center">
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
            <TechButton variant="primary" size="large" href="/career">
              View Career Opportunities
            </TechButton>
          </motion.section>
        </div>
      </section>
    </main>
  );
};

export default About;
