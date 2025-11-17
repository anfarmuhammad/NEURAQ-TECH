// src/pages/Legal.jsx
import React from "react";
import { motion } from "framer-motion";

const Legal = () => {
  const privacySections = [
    {
      title: "1. Introduction",
      content: `Welcome to Neuraq Technologies ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at help@neuraq.in.

This Privacy Policy applies to all information collected through our Services (which, as described above, includes our website), as well as any related services, sales, marketing, or events.`,
    },
    {
      title: "2. Information We Collect",
      content: `We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or otherwise when you contact us.

The personal information we collect may include the following:

• Personal Information: Name, email address, phone number, etc.
• Payment Data: We may collect data necessary to process your payment.
• Usage Data: Information about how you use our website, products, and services.`,
    },
    {
      title: "3. How We Use Your Information",
      content: `We use personal information collected via our website for a variety of business purposes:

• To create accounts
• To send administrative information
• To fulfill and manage orders
• To request feedback
• To protect our services
• For analytics and improvement`,
    },
    {
      title: "4. Sharing Your Information",
      content: `We only share information with your consent, to comply with laws, provide services, protect your rights, or fulfill business obligations.`,
    },
    {
      title: "5. Data Security",
      content: `We employ security measures to protect personal information, but no online transmission is completely secure.`,
    },
    {
      title: "6. Your Privacy Rights",
      content: `You may have the right to access, correct, delete, restrict, or object to the processing of your personal data.`,
    },
    {
      title: "7. Updates to This Policy",
      content: `We may update this Privacy Policy periodically. Please review it regularly.`,
    },
    {
      title: "8. Contact Us",
      content: `Neuraq Technologies
Malappuram, Kerala, India
Email: help@neuraq.in
Phone: +91 808 912 4307`,
    },
  ];

  const termsSections = [
    {
      title: "1. Introduction",
      content: `These Terms govern your use of the Neuraq Technologies website and services.`,
    },
    {
      title: "2. Intellectual Property",
      content: `All content and trademarks belong to Neuraq Technologies.`,
    },
    {
      title: "3. User Accounts",
      content: `You must provide accurate information when creating an account.`,
    },
    {
      title: "4. Products and Services",
      content: `Product descriptions and prices may change without notice.`,
    },
    {
      title: "5. Payments and Refunds",
      content: `Refunds, if applicable, will be processed within 14 business days.`,
    },
    {
      title: "6. User Conduct",
      content: `You agree not to misuse our services in any way.`,
    },
    {
      title: "7. Limitation of Liability",
      content: `Neuraq Technologies is not responsible for indirect or consequential damages.`,
    },
    {
      title: "8. Governing Law",
      content: `These Terms are governed by the laws of India.`,
    },
    {
      title: "9. Changes to Terms",
      content: `We may modify these Terms at any time.`,
    },
    {
      title: "10. Contact Us",
      content: `Neuraq Technologies
Malappuram, Kerala
Email: legal@neuraqtech.com
Phone: +91 808 912 4307`,
    },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_#1e2d19_55%,_black_100%)] text-white pt-20 pb-20 font-orbitron">
      <div className="container mx-auto px-4 py-10">

        {/* PRIVACY POLICY */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#31de12] ">
            Privacy Policy
          </h1>

          <p className="text-gray-300 text-center mt-2 mb-12">
            Last updated: May 25, 2025
          </p>

          <div className="space-y-10 max-w-4xl mx-auto">
            {privacySections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="
                  bg-[#1b221d]/80 
                   
                  rounded-xl 
                  p-8 
                  backdrop-blur-md 
                  shadow-[0_0_12px_#27ff179a,0_8px_32px_rgba(31,62,31,0.25)]
                "
              >
                <h2 className="text-2xl font-bold text-[#41fa4a]  mb-4">
                  {section.title}
                </h2>

                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* TERMS & CONDITIONS */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#38ff17] ">
            Terms & Conditions
          </h1>

          <p className="text-gray-300 text-center mt-2 mb-12">
            Last updated: May 25, 2025
          </p>

          <div className="space-y-10 max-w-4xl mx-auto">
            {termsSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="
                  bg-[#1b221d]/80 
                  border border-[#17ff62] 
                  rounded-xl 
                  p-8 
                  backdrop-blur-md 
                  shadow-[0_0_12px_#27ff179a,0_8px_32px_rgba(31,62,31,0.25)]
                "
              >
                <h2 className="text-2xl font-bold text-[#41fa4a]  mb-4">
                  {section.title}
                </h2>

                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Legal;
