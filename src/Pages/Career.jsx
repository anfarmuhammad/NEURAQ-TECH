// src/pages/Career.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TechButton } from '../Ui/TechButton';
import { X, MapPin, Clock, Heart, Lightbulb, Users, Bolt, Globe, Sprout } from 'lucide-react';


const Career = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    {
      icon: Heart,
      title: "Social Impact",
      description: "Work on projects that directly improve lives, like our Smart Care App for palliative support."
    },
    {
      icon: Lightbulb,
      title: "Growth Opportunities",
      description: "Learn new skills in a supportive environment with hands-on experience."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Join a team that values creativity, innovation, and mutual support."
    },
    {
      icon: Bolt,
      title: "Flexible Commitment",
      description: "Part-time, project-based roles that fit with your schedule."
    },
    {
      icon: Globe,
      title: "Community Focus",
      description: "Work with small businesses and non-profits making real change."
    },
    {
      icon: Sprout,
      title: "Future Potential",
      description: "Opportunity to grow into full-time roles as we expand."
    }
  ];

  const positions = [
    {
      title: "AI Developer",
      type: "Part-time",
      location: "Remote",
      description: "Help develop AI solutions for our social impact projects, including our palliative care application. Ideal for those looking to apply their skills to meaningful problems.",
      tags: ["Python", "Machine Learning", "NLP"]
    },
    {
      title: "Digital Marketing Specialist",
      type: "Part-time",
      location: "Remote",
      description: "Help us spread awareness of our mission and connect with potential partners and communities who could benefit from our solutions.",
      tags: ["Social Media", "Content Creation", "SEO"]
    },
    {
      title: "UI/UX Designer",
      type: "Part-time",
      location: "Remote",
      description: "Create intuitive interfaces for our applications, ensuring accessibility and ease of use for diverse user groups.",
      tags: ["Figma", "User Research", "Prototyping"]
    }
  ];

  const openApplicationModal = (position) => {
    setSelectedPosition(position);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPosition(null);
  };

  const submitApplication = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Compose WhatsApp message
    const message = `*New Application for Neuraq Technologies*\n\n*Position:* ${selectedPosition.title}\n\n${Object.entries(data).map(([key, value]) => `*${key}:* ${value}`).join('\n')}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918089124307?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    closeModal();
  };

  return (
    <div className="min-h-screen bg-dark text-light pt-20">
      {/* Hero Section */}
      <section className="relative py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold font-orbitron mb-6 text-gradient"
          >
            Join Our Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Build meaningful technology that creates social impact
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <TechButton
              variant="primary"
              size="large"
              onClick={() => document.getElementById('open-positions').scrollIntoView({ behavior: 'smooth' })}
            >
              See Open Roles
            </TechButton>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 bg-darker">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 text-gradient">
              Why Join Neuraq?
            </h2>
            <p className="text-xl text-gray-300">
              We're a passionate team building technology with purpose
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card group hover:border-primary/50 transition-all duration-300 p-8 text-center"
              >
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Compensation Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 max-w-4xl mx-auto text-center glass-card p-8 border border-yellow-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Important Note About Compensation</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                As a small startup focused on social impact, we currently offer project-based compensation rather than fixed salaries. Payments depend on the projects we secure. While we may not offer high financial compensation at this stage, we provide valuable experience, networking opportunities, and the chance to work on meaningful projects.
              </p>
              <p>
                If you're mainly focused on financial benefits, this opportunity might not be the right fit. We're building a team driven by passion, purpose, and growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 text-gradient">
              Current Opportunities
            </h2>
            <p className="text-xl text-gray-300">
              Part-time, project-based roles with potential for growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card group hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{position.title}</h3>

                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {position.type}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{position.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {position.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <TechButton
                    variant="primary"
                    size="small"
                    onClick={() => openApplicationModal(position)}
                    className="w-full"
                  >
                    Apply Now
                  </TechButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-darker border border-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold font-orbitron text-gradient">
                    Apply to Join Neuraq
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <p className="text-gray-300 mb-6">
                  Applying for: <span className="text-primary font-semibold">{selectedPosition?.title}</span>
                </p>

                <form onSubmit={submitApplication} className="space-y-6">
                  <input type="hidden" name="position" value={selectedPosition?.title} />

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Your Key Skills *
                    </label>
                    <textarea
                      name="skills"
                      required
                      rows="3"
                      className="w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Why do you want to join Neuraq? *
                    </label>
                    <textarea
                      name="why"
                      required
                      rows="3"
                      className="w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                    ></textarea>
                  </div>

                  <TechButton
                    type="submit"
                    variant="primary"
                    size="large"
                    className="w-full"
                  >
                    Submit Application
                  </TechButton>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Career;