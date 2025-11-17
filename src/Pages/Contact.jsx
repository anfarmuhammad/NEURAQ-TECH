// src/pages/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const contactMethods = [
    {
      icon: MapPin,
      title: 'Headquarters',
      details: 'Makkaraparamba\nMalappuram, PIN 676507\nKerala',
      link: null,
    },
    {
      icon: Phone,
      title: 'Phone Support',
      details: '+91 808 9124 307\nMonday-Friday, 9am-6pm PST',
      link: null,
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'help.neuraq.in',
      link: 'mailto:help.neuraq.in',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: '+91 808 9124 307\n24/7 quick support',
      link: 'https://wa.me/918157980307',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/mqakegjd', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-emerald-500 text-light">

      {/* Hero Section */}
      <section
        className="
          py-30 text-center
          bg-gradient-to-r from-[#39ff14] to-[#00f2fe]
          text-black font-semibold
          bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]
          bg-cover bg-center bg-repeat
          opacity-90
        ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Let's Build the Future Together
          </h2>
          <p className="text-lg md:text-2xl font-medium max-w-3xl mx-auto">
            Connect with our team to explore how Neuraq can revolutionize your digital identity solutions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative bg-black py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl bg-white/20 p-8"
            >
              <h2 className="text-4xl font-bold mb-6 text-gradient">
                Our Contact Channels
              </h2>
              <p className="text-gray-300 mb-8">
                We're available through multiple channels to ensure you can reach us conveniently.
              </p>

              <div className="space-y-6 text-white">
                {contactMethods.map((method, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-4 group hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 bg-green-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <method.icon className="w-6 h-6 text-[#39ff14]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                      {method.link ? (
                        <a
                          href={method.link}
                          className="text-blue-400 hover:text-primary transition-colors whitespace-pre-line"
                          target="_blank"
                          rel="noopener noreferrer"
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
                      aria-label={`Follow us on ${social}`}
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
              className="rounded-2xl bg-white/20 p-8"
            >
              <h2 className="text-4xl font-bold mb-6 text-gradient">
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
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full bg-white/5 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full bg-white/5 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="w-full bg-white/5 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    className="w-full bg-white/5 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    className="w-full bg-white/5 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors resize-vertical"
                  />
                </div>

                <button
                  type="submit"
                  className="
                    relative inline-flex items-center justify-center gap-3
                    px-8 py-4 rounded-2xl
                    bg-gradient-to-r from-[#39ff14] to-[#00f2fe]
                    text-black font-semibold tracking-wide
                    shadow-[0_0_18px_rgba(0,255,200,0.35)]
                    transition-transform duration-300 hover:scale-[1.03]
                    overflow-hidden group
                  "
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Send Message
                    <Send className="w-5 h-5" />
                  </span>
                  <span
                    className="
                      absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left
                      bg-white/20 transition-transform duration-500 ease-out
                    "
                  />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="
          relative py-12 sm:py-16 md:py-20 lg:py-20
          bg-gradient-to-r from-[#39ff14] to-[#00f2fe]
          text-black font-semibold
          overflow-hidden
        "
      >
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg sm:max-w-2xl md:max-w-5xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
              Ready for Digital Transformation?
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 leading-relaxed max-w-xs sm:max-w-xl md:max-w-2xl mx-auto">
              Schedule a personalized consultation with our experts to discuss your specific needs.
            </p>

            <a
              href="https://wa.me/918089124307?text=Book%20a%20meeting%20with%20Neuraq"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center gap-3
                max-w-xs sm:max-w-sm md:max-w-md
                px-5 py-3 sm:px-8 sm:py-4
                rounded-2xl
                bg-gradient-to-r from-[#020a00] to-[#011617]
                text-white font-bold tracking-wide
                shadow-[0_0_18px_rgba(0,255,200,0.35)]
                transition-transform duration-300
                hover:scale-[1.03]
                overflow-hidden group
                mx-auto
              "
            >
              <span className="relative z-10 flex items-center gap-3">
                Book a Discovery Call
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.04 2C6.59 2 2.21 6.37 2.21 11.82c0 2.08.62 4.02 1.79 5.72L2 22l4.63-1.94c1.6.88 3.41 1.35 5.34 1.35 5.45 0 9.83-4.38 9.83-9.83C21.8 6.37 17.49 2 12.04 2zm0 17.84c-1.69 0-3.34-.45-4.77-1.31l-.34-.2-2.74 1.15.58-2.86-.18-.29c-1.1-1.6-1.69-3.47-1.69-5.33 0-4.77 3.88-8.65 8.65-8.65s8.65 3.88 8.65 8.65-3.88 8.64-8.66 8.64zm4.71-6.22c-.26-.13-1.53-.76-1.77-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.02-.15.17-.3.2-.56.07-.26-.13-1.09-.4-2.07-1.28-.77-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.8-1.92-.21-.5-.43-.44-.58-.45-.15-.02-.32-.02-.49-.02-.17 0-.45.06-.68.32-.24.26-.9.88-.9 2.14 0 1.26.92 2.47 1.05 2.64.13.17 1.81 2.87 4.42 4.02 2.61 1.15 2.61.77 3.09.72.48-.04 1.53-.62 1.75-1.22.22-.6.22-1.12.15-1.22-.07-.1-.24-.17-.5-.3z" />
                </svg>
              </span>

              <span className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
