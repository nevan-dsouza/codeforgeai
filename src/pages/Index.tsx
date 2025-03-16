
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AIAgents from '@/components/AIAgents';
import Features from '@/components/Features';
import TargetAudience from '@/components/TargetAudience';
import DemoSection from '@/components/DemoSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Initial loading animation
    const animateOnLoad = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        setTimeout(() => {
          section.classList.add('animate-fade-in');
        }, index * 100);
      });
    };
    
    animateOnLoad();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <AIAgents />
      <Features />
      <TargetAudience />
      <DemoSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
