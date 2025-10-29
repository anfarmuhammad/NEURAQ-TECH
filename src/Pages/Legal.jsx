// src/pages/Legal.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Legal = () => {
  const privacySections = [
    {
      title: "1. Introduction",
      content: `Welcome to Neuraq Technologies ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at help@neuraq.in.

This Privacy Policy applies to all information collected through our Services (which, as described above, includes our website), as well as any related services, sales, marketing, or events.`
    },
    {
      title: "2. Information We Collect",
      content: `We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or otherwise when you contact us.

The personal information we collect may include the following:

• Personal Information: Name, email address, phone number, etc.
• Payment Data: We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument.
• Usage Data: Information about how you use our website, products, and services.`
    },
    {
      title: "3. How We Use Your Information",
      content: `We use personal information collected via our website for a variety of business purposes described below:

• To facilitate account creation and logon process
• To send administrative information to you
• To fulfill and manage your orders
• To request feedback
• To protect our Services
• To enforce our terms, conditions, and policies
• For other business purposes, such as data analysis, identifying usage trends, and to evaluate and improve our website, products, services, marketing, and your experience`
    },
    {
      title: "4. Sharing Your Information",
      content: `We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.

We may process or share your data that we hold based on the following legal basis:

• Consent: We may process your data if you have given us specific consent to use your personal information for a specific purpose.
• Legitimate Interests: We may process your data when it is reasonably necessary to achieve our legitimate business interests.
• Performance of a Contract: Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.
• Legal Obligations: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.`
    },
    {
      title: "5. Data Security",
      content: `We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.

We will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk. You should only access the services within a secure environment.`
    },
    {
      title: "6. Your Privacy Rights",
      content: `Depending on your location, you may have certain rights regarding your personal information, including:

• The right to request access and obtain a copy of your personal information
• The right to request rectification or erasure
• The right to restrict the processing of your personal information
• The right to data portability
• The right to withdraw consent

To make such a request, please contact us at help@neuraq.in. We will consider and act upon any request in accordance with applicable data protection laws.`
    },
    {
      title: "7. Updates to This Policy",
      content: `We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible.

We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.`
    },
    {
      title: "8. Contact Us",
      content: `If you have questions or comments about this policy, you may contact our Data Protection Officer (DPO) at:

Neuraq Technologies
Attn: Data Protection Officer
Malappuram, Kerala, India
Email: help@neuraq.in
Phone: +91 808 912 4307`
    }
  ];

  const termsSections = [
    {
      title: "1. Introduction",
      content: `These Terms and Conditions ("Terms") govern your use of the Neuraq Technologies website and services ("Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.`
    },
    {
      title: "2. Intellectual Property",
      content: `The Services and their original content, features, and functionality are and will remain the exclusive property of Neuraq Technologies and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Neuraq Technologies.`
    },
    {
      title: "3. User Accounts",
      content: `When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Services.

You are responsible for safeguarding the password that you use to access the Services and for any activities or actions under your password, whether your password is with our Services or a third-party service.`
    },
    {
      title: "4. Products and Services",
      content: `All descriptions of products or product pricing are subject to change at any time without notice, at our sole discretion. We reserve the right to discontinue any product at any time.

We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.`
    },
    {
      title: "5. Payments and Refunds",
      content: `Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or refund only according to our Refund Policy.

We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order.

Refunds, if applicable, will be processed within 14 business days and credited to the original method of payment.`
    },
    {
      title: "6. User Conduct",
      content: `You agree not to use the Services to:

• Upload or transmit viruses or any other type of malicious code
• Collect or track the personal information of others
• Spam, phish, or engage in unethical marketing
• Interfere with or circumvent the security features of the Services
• Attempt to impersonate another user or person

We reserve the right to terminate your use of the Services for violating any of the prohibited uses.`
    },
    {
      title: "7. Limitation of Liability",
      content: `In no event shall Neuraq Technologies, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:

• Your access to or use of or inability to access or use the Services
• Any conduct or content of any third party on the Services
• Any content obtained from the Services
• Unauthorized access, use or alteration of your transmissions or content`
    },
    {
      title: "8. Governing Law",
      content: `These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.

Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.`
    },
    {
      title: "9. Changes to Terms",
      content: `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.

By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Services.`
    },
    {
      title: "10. Contact Us",
      content: `If you have any questions about these Terms, please contact us:

Neuraq Technologies
Malappuram, Kerala, India
Email: legal@neuraqtech.com
Phone: +91 808 912 4307`
    }
  ];

  return (
    <div className="min-h-screen bg-dark text-light pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Privacy Policy */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-center mb-4 text-gradient">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-center mb-12">
            Last updated: May 25, 2025
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            {privacySections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8"
              >
                <h2 className="text-2xl font-bold font-orbitron mb-4 text-primary">
                  {section.title}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Terms & Conditions */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-center mb-4 text-gradient">
            Terms & Conditions
          </h1>
          <p className="text-gray-400 text-center mb-12">
            Last updated: May 25, 2025
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            {termsSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8"
              >
                <h2 className="text-2xl font-bold font-orbitron mb-4 text-primary">
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