// src/pages/Innovation.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Accessibility,
  Languages,
  Calendar,
  FileText,
  Clock,
  Users,
  Mic,
  Brain,
  Wallet,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

import { TechButton } from "../Ui/TechButton";

const Innovation = () => {
  const problems = {
    disabilities: [
      {
        icon: <Calendar className="w-6 h-6 text-[#40f608]" />,
        title: "Episodic Monitoring",
        description:
          "Current therapy is often episodic, leading to relapse between sessions with no continuous feedback mechanism.",
      },
      {
        icon: <FileText className="w-5 h-5 text-[#40f608]" />,
        title: "Generic Exercises",
        description:
          "One-size-fits-all exercises fail to address individual stuttering patterns and disfluencies.",
      },
      {
        icon: <Clock className="w-5 h-5 text-[#40f608]" />,
        title: "Delayed Intervention",
        description:
          "Users often don't recognize the severity of their speech issues until they become significant problems.",
      },
      {
        icon: <Users className="w-5 h-5 text-[#40f608]" />,
        title: "Social Anxiety",
        description:
          "Communication challenges lead to avoidance behaviors, isolation, and reduced confidence.",
      },
    ],
    learners: [
      {
        icon: <Mic className="w-5 h-5 text-[#40f608]" />,
        title: "Pronunciation Challenges",
        description:
          "Traditional learning lacks real-time, precise feedback on spoken output and accent.",
      },
      {
        icon: <Brain className="w-5 h-5 text-[#40f608]" />,
        title: "Unidentified Weaknesses",
        description:
          "Learners struggle to pinpoint specific speech errors, such as vowel sounds or intonation.",
      },
      {
        icon: <Wallet className="w-5 h-5 text-[#40f608]" />,
        title: "Cost Barriers",
        description:
          "Professional tutors are expensive and often unavailable for consistent practice.",
      },
      {
        icon: <AlertTriangle className="w-5 h-5 text-[#40f608]" />,
        title: "Fear of Mistakes",
        description:
          "Anxiety about errors hinders practice and fluency development.",
      },
    ],
  };

  const roadmap = [
    {
      date: "July 2025",
      title: "Pitching Completed",
      description:
        "Successfully presented HeuLink to investors and stakeholders on July 18.",
      status: "completed",
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* ---------------- The Problem We Solve ---------------- */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.header
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#39ff14] to-[#07deee] bg-clip-text text-transparent">
              The Problem We Solve
            </h2>
            <p className="text-gray-400 text-xl font-semibold font-orbitron mt-3">
              Addressing critical gaps in speech therapy and <br /> language learning
            </p>
          </motion.header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Column: Disabilities */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#0F0F0F] rounded-xl border border-gray-800 p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-8">
                <Accessibility className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold">
                  For Individuals with Speech Disabilities
                </h3>
              </div>

              <div className="space-y-6">
                {problems.disabilities.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="border-t border-gray-800 pt-4 first:border-t-0 first:pt-0"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-[#2DFFAB]/10 p-3 rounded-full">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-white text-xl font-bold mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-100 text-lg font-semibold font-orbitron leading-snug">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Learners */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#0F0F0F] rounded-xl border border-gray-800 p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-8">
                <Languages className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold">For Language Learners</h3>
              </div>

              <div className="space-y-6">
                {problems.learners.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="border-t border-gray-800 pt-4 first:border-t-0 first:pt-0"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-[#2DFFAB]/10 p-3 rounded-full">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-white text-xl font-bold mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-100 text-lg font-semibold font-orbitron leading-snug">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- Project Roadmap ---------------- */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#39ff14] to-[#07deee] bg-clip-text text-transparent">
              Project Roadmap
            </h2>
            <p className="text-gray-400 text-xl font-semibold font-orbitron mt-3">
              Our journey to revolutionize speech technology
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-800" />

            {roadmap.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex gap-8 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      item.status === "completed" ? "bg-green-500" : "bg-[#2DFFAB]"
                    }`}
                  >
                    {item.status === "completed" ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                      <Clock className="w-5 h-5 text-white" />
                    )}
                  </div>
                </div>

                <div
                  className={`glass-card flex-1 p-6 border-l-4 bg-[#111]/60 backdrop-blur-md rounded-2xl shadow-lg border ${
                    item.status === "completed"
                      ? "border-green-500"
                      : "border-[#2DFFAB]"
                  }`}
                >
                  <div className="text-gray-100 font-orbitron mb-2">
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-100 text-lg font-semibold font-orbitron leading-snug">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Join the Speech Revolution ---------------- */}
      <section className="relative py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-[#111]/60 backdrop-blur-md border border-gray-800 p-12 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-100">
              Join the Speech Revolution
            </h2>
            <p className="text-gray-300 text-xl font-semibold font-orbitron mb-8">
              Be part of our journey to transform how the world communicates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TechButton variant="secondary" size="large">
                Request Demo
              </TechButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Innovation;
