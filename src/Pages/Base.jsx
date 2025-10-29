// src/pages/Base.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { TechButton } from '../Ui/TechButton';
import { ExternalLink } from 'lucide-react';

const Base = () => {
  const products = [
    {
      title: "Smart Care App",
      category: "Health Application",
      description: "The Future of Care in Your Hand",
      image: "/assets/images/pro-1.svg",
      badge: "Featured",
      link: "https://care.neuraq.in/",
      tags: []
    },
    {
      title: "TBGS Track",
      category: "Company Management Software",
      description: "We've developed their entire company management system",
      image: "/assets/images/pro-2.svg",
      badge: null,
      link: "#",
      tags: []
    },
    {
      title: "Academic Website",
      category: "Education Platform",
      description: "Level up your Academy in Digital World",
      image: "/assets/images/pro-4.svg",
      badge: "New",
      link: "https://najmulhuda.com/",
      tags: []
    },
    {
      title: "Resort Website",
      category: "Hospitality",
      description: "Level up your Digital World",
      image: "/assets/images/pro-5.svg",
      badge: null,
      link: "",
      tags: []
    },
    {
      title: "Euro Marketing",
      category: "Business Website",
      description: "Level up your Digital World",
      image: "/assets/images/pro-6.svg",
      badge: null,
      link: "https://euromarketing.in/",
      tags: []
    },
    {
      title: "Portfolio Website",
      category: "Personal Portfolio",
      description: "Level up your Digital World",
      image: "/assets/images/pro-7.svg",
      badge: null,
      link: "https://arunjithperambra.in/",
      tags: []
    }
  ];

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
            Our Innovations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Cutting-edge solutions transforming digital identity
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card group hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 right-4 bg-gradient-primary text-dark px-3 py-1 rounded-full text-xs font-bold font-orbitron uppercase">
                      {product.badge}
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                      <p className="text-gray-300 text-sm">{product.description}</p>
                      {product.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {product.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="px-2 py-1 bg-primary/20 text-primary text-xs rounded border border-primary/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{product.category}</p>
                  
                  <TechButton
                    variant="primary"
                    size="small"
                    icon={ExternalLink}
                    href={product.link}
                    className="w-full"
                  >
                    View Details
                  </TechButton>
                </div>
              </motion.div>
            ))}
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
              Connect for Revolution
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <TechButton
                variant="primary"
                size="large"
                href="https://wa.me/918089124307?text=I'm%20interested%20to%20the%20Collaborate"
              >
                Connect Us
              </TechButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Base;