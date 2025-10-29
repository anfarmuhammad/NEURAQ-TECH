// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useCounter } from '../Hooks/useCounter';
import { TechButton } from '../Ui/TechButton';
import { Users, Award, Target, Heart } from 'lucide-react';

const About = () => {
  const happyCustomers = useCounter(29);
  const projects = useCounter(147);

  const teamMembers = [
    {
      name: "Mr. Mohammed Shaheen KP",
      role: "CEO & Founder",
      image: "/assets/images/profile-1.svg",
      bio: "A dynamic tech leader and current BS Data Science student at IIT Madras. With strong leadership skills and hands-on experience in software development, Shaheen bridges innovation and execution.",
      tags: ["Founder", "Leadership"],
      social: {
        linkedin: "https://www.linkedin.com/in/shaheenkp/",
        instagram: "https://www.instagram.com/___zcl3_/",
        twitter: "https://x.com/Msk012005"
      }
    },
    {
      name: "Mr. Sajid Kuzhiyengal",
      role: "Managing Director",
      image: "/assets/images/profile-3.svg",
      bio: "22+ years of experience managing successful businesses. Sajid brings deep strategic insight and leadership to the team, combining traditional business acumen with a vision for future technologies.",
      tags: ["Business Strategy", "Vision"],
      social: {
        linkedin: "https://www.linkedin.com/in/sajid-kp-62a005341/",
        instagram: "https://www.instagram.com/sajid.kuzhiyengal/",
        whatsapp: "https://wa.me/919947020307"
      }
    },
    // Add other team members...
  ];

  const values = [
    {
      icon: Target,
      title: "No problem without solution",
      description: "We turn impossible problems into AI-powered solutions effortlessly."
    },
    {
      icon: Heart,
      title: "Social Impact Focus",
      description: "Creating technology that makes a real difference in people's lives."
    }
  ];

  return (
    <div className="min-h-screen bg-dark text-light pt-20">
      {/* Founder Story Section */}
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
                  src="/assets/images/about-1-1.svg" 
                  alt="Shaheen K.P., Founder" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <div className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(57, 255, 20, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(57, 255, 20, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px'
                  }}
                ></div>
              </div>
            </motion.div>

            <motion.div
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
              
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-800">
                <img 
                  src="/assets/images/sin.png" 
                  alt="Shaheen's Signature" 
                  className="h-12"
                />
                <div>
                  <p className="font-semibold">Shaheen K.P.</p>
                  <p className="text-gray-400">Founder & CEO</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HeuLink Initiative Section */}
      <section className="relative py-20 bg-darker">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 text-gradient">
              HeuLink Initiative
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Breaking communication barriers with AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Problem Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card border border-red-500/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-orbitron">The Problem</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "Lack of continuous monitoring and feedback for speech therapy",
                  "Limited access to personalized exercises",
                  "Delayed intervention for speech challenges",
                  "Social anxiety and reduced confidence",
                  "Difficulty with pronunciation in language learning"
                ].map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">{problem}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Solution Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-orbitron">Our Solution</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: "🎤", title: "Continuous Voice Analysis", desc: "Real-time monitoring of speech patterns and disfluencies" },
                  { icon: "🎯", title: "Personalized Exercises", desc: "Tailored activities based on individual speech patterns" },
                  { icon: "🌐", title: "Multilingual Support", desc: "Currently supporting English and Malayalam with more to come" },
                  { icon: "📊", title: "Progress Tracking", desc: "Detailed analytics to monitor improvement over time" }
                ].map((solution, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-2xl">{solution.icon}</span>
                    <div>
                      <h4 className="font-semibold text-white">{solution.title}</h4>
                      <p className="text-gray-400 text-sm">{solution.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12 max-w-4xl mx-auto"
          >
            <p className="text-xl text-gray-300 mb-8">
              We envision a future where communication barriers no longer exist—where every voice, regardless of its challenges, is heard clearly and confidently.
            </p>
            <TechButton variant="primary" size="large">
              Learn More About HeuLink
            </TechButton>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 text-gradient">
              Our Team
            </h2>
            <p className="text-xl text-gray-300">
              The brilliant minds behind our technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card group hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-primary font-orbitron text-sm">{member.role}</p>
                  </div>
                  
                  {/* Social Links */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        className="w-8 h-8 bg-dark/80 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-dark transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-xs font-semibold">
                          {platform === 'linkedin' ? 'in' : platform.charAt(0)}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 mb-4 text-sm">{member.bio}</p>
                
                <div className="flex flex-wrap gap-2">
                  {member.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-darker">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-6 text-gradient">
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
              {values.map((value, index) => (
                <div key={index} className="flex gap-4 glass-card p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.div
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;