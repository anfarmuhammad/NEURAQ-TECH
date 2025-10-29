// src/pages/Home.jsx
import React from 'react';
import { CyberHero } from '../Sections/CyberHero';
import AboutSection from '../Sections/AboutSection';
import ResearchSection from '../sections/ResearchSection';
import NewsSection from '../sections/NewsSection';
import ProductsSection from '../sections/ProductsSection';
import TeamSection from '../sections/TeamSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import PartnersSection from '../sections/PartnersSection';

// import { PartnersSection } from '../Sections/PartnersSection';

const Home = () => {
  return (
    <div className="bg-dark text-light">
      <CyberHero />
      <AboutSection/>
      <ResearchSection/>
      <NewsSection/>
      <ProductsSection/>
      <TeamSection/>
      <TestimonialsSection/>
      <PartnersSection/>
      
     
      {/* 
      
      
      <PartnersSection />  */}
    </div>
  );
};

export default Home;
