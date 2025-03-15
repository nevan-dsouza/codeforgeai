
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
    // Smooth scroll functionality for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      });
    });
    
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
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () {
          // Empty function as this is just for cleanup
        });
      });
    };
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
