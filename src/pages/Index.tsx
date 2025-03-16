
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AIAgents from '@/components/AIAgents';
import Features from '@/components/Features';
import TargetAudience from '@/components/TargetAudience';
import DemoSection from '@/components/DemoSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <section id="how-it-works">
        <AIAgents />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="our-solution">
        <TargetAudience />
      </section>
      <section id="demo">
        <DemoSection />
      </section>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
