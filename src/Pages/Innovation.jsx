// src/pages/Innovation.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { TechButton } from '../Ui/TechButton';
import { CheckCircle, Clock, Target, Users, Code, Brain } from 'lucide-react';

const Innovation = () => {
  const problems = {
    disabilities: [
      {
        icon: "📅",
        title: "Episodic Monitoring",
        description: "Current therapy is often episodic, leading to relapse between sessions with no continuous feedback mechanism."
      },
      {
        icon: "📝",
        title: "Generic Exercises",
        description: "One-size-fits-all exercises fail to address individual stuttering patterns and disfluencies."
      },
      {
        icon: "⏰",
        title: "Delayed Intervention",
        description: "Users often don't recognize the severity of their speech issues until they become significant problems."
      },
      {
        icon: "😔",
        title: "Social Anxiety",
        description: "Communication challenges lead to avoidance behaviors, isolation, and reduced confidence."
      }
    ],
    learners: [
      {
        icon: "🗣️",
        title: "Pronunciation Challenges",
        description: "Traditional learning lacks real-time, precise feedback on spoken output and accent."
      },
      {
        icon: "🔍",
        title: "Unidentified Weaknesses",
        description: "Learners struggle to pinpoint specific speech errors (vowel sounds, intonation)."
      },
      {
        icon: "💰",
        title: "Cost Barriers",
        description: "Professional tutors are expensive and often unavailable for consistent practice."
      },
      {
        icon: "😨",
        title: "Fear of Mistakes",
        description: "Anxiety about errors hinders practice and fluency development."
      }
    ]
  };

  const roadmap = [
    {
      date: "July 2025",
      title: "Pitching Completed",
      description: "Successfully presented HeuLink to investors and stakeholders on July 18",
      status: "completed"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-light pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold font-orbitron mb-6 text-gradient"
          >
            HeuLink Initiative
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Connect | Communicate | Conquer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="inline-flex items-center gap-2 glass-card px-6 py-3"
          >
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-orbitron">Active Development</span>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-20 bg-darker">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 text-gradient">
              The Problem We Solve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Addressing critical gaps in speech therapy and language learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* For Individuals with Speech Disabilities */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-orbitron">For Individuals with Speech Disabilities</h3>
              </div>
              
              <div className="space-y-6">
                {problems.disabilities.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <span className="text-2xl flex-shrink-0">{problem.icon}</span>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{problem.title}</h4>
                      <p className="text-gray-400 text-sm">{problem.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* For Language Learners */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-orbitron">For Language Learners</h3>
              </div>
              
              <div className="space-y-6">
                {problems.learners.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <span className="text-2xl flex-shrink-0">{problem.icon}</span>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{problem.title}</h4>
                      <p className="text-gray-400 text-sm">{problem.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 text-gradient">
              Project Roadmap
            </h2>
            <p className="text-xl text-gray-300">
              Our journey to revolutionize speech technology
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-800"></div>
              
              {roadmap.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex gap-8 mb-12 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      item.status === 'completed' 
                        ? 'bg-green-500' 
                        : 'bg-primary'
                    }`}>
                      {item.status === 'completed' ? (
                        <CheckCircle className="w-5 h-5 text-white" />
                      ) : (
                        <Clock className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`glass-card flex-1 p-6 border-l-4 ${
                    item.status === 'completed' 
                      ? 'border-green-500' 
                      : 'border-primary'
                  }`}>
                    <div className="text-primary font-orbitron mb-2">{item.date}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-darker">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto glass-card p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 text-gradient">
              Join the Speech Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of our journey to transform how the world communicates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TechButton 
                variant="primary" 
                size="large"
                href="https://wa.me/918089124307?text=I'm%20interested%20to%20join%20the%20innovation%20part"
              >
                Partner With Us
              </TechButton>
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