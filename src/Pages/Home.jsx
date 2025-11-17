// src/pages/Home.jsx
import React from 'react';
import { CyberHero } from '../Sections/CyberHero';
import AboutSection from '../Sections/AboutSection';
import ResearchSection from '../Sections/ResearchSection';
import NewsSection from '../Sections/NewsSection';
import ProductsSection from '../Sections/ProductsSection';
import TeamSection from '../Sections/TeamSection';
import TestimonialsSection from '../Sections/TestimonialsSection';
import PartnersSection from '../Sections/PartnersSection';


const Home = () => {
  return (
    <div className="bg-dark text-light">

      <CyberHero />
      <AboutSection />
      <ResearchSection />
      <NewsSection />
      <ProductsSection />
      <TeamSection />
      <TestimonialsSection />
      <PartnersSection />
      
    </div>
  );
};

export default Home;
