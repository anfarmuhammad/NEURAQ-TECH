// src/pages/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TechButton } from '../Ui/TechButton';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const contactMethods = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: "Makkaraparamba\nMalappuram, PIN 676507\nKerala",
      link: null
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: "+91 808 9124 307\nMonday-Friday, 9am-6pm PST",
      link: null
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "help.neuraq.in",
      link: "mailto:help.neuraq.in"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+91 808 9124 307\n24/7 quick support",
      link: "https://wa.me/918157980307"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/mqakegjd', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-black  text-light pt-20">
      {/* Hero Section */}
      <section
        className="
    py-20
    text-center
    text-white
    bg-gradient-to-br from-primary/10 to-accent/10
    bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]
    bg-cover bg-center bg-repeat opacity-90
  "
      >
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold font-orbitron mb-6"
          >
            Let's Build the Future Together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Connect with our team to explore how Neuraq can revolutionize your digital identity solutions.
          </motion.p>
        </div>
      </section>


      {/* Contact Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8"
            >
              <h2 className="text-3xl font-bold font-orbitron mb-6 text-gradient">
                Our Contact Channels
              </h2>
              <p className="text-gray-300 mb-8">
                We're available through multiple channels to ensure you can reach us conveniently.
              </p>

              <div className="space-y-6 text-white">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 group hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                      {method.link ? (
                        <a
                          href={method.link}
                          className="text-gray-300 hover:text-primary transition-colors whitespace-pre-line"
                        >
                          {method.details}
                        </a>
                      ) : (
                        <p className="text-gray-300 whitespace-pre-line">{method.details}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex gap-4 text-white">
                  {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all"
                    >
                      <span className="text-sm font-semibold">{social.charAt(0)}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-8"
            >
              <h2 className="text-3xl font-bold font-orbitron mb-6 text-gradient">
                Send Your Inquiry
              </h2>

              {formStatus === 'success' && (
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6 text-green-400">
                  Thank you! Your message has been sent successfully. We will get back to you soon.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6 text-red-400">
                  Oops! There was a problem sending your message. Please try again later or contact us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-white/5 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-white/5 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full bg-white/5 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full bg-white/5 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="6"
                    className="w-full bg-white/5 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors resize-vertical"
                  ></textarea>
                </div>

                <TechButton
                  type="submit"
                  variant="primary"
                  size="large"
                  icon={Send}
                  className="w-full"
                >
                  Send Message
                </TechButton>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="
    relative text-white py-20
    bg-gradient-to-br from-primary to-accent
    bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]
    bg-cover bg-center bg-repeat
  "
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
              Ready for Digital Transformation?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Schedule a personalized consultation with our experts to discuss your specific needs.
            </p>

            <TechButton
              variant="secondary"
              size="large"
              href="https://wa.me/918089124307?text=Book%20a%20meeting%20with%20Neuraq"
            >
              Book a Discovery Call
            </TechButton>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Contact;