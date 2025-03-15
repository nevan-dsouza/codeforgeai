
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Brain, Zap, Star } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (!heroSection) return;
      
      const scrollPosition = window.scrollY;
      const parallaxElements = heroSection.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || '0.1';
        const yPos = scrollPosition * parseFloat(speed);
        // Fix: Cast the Element to HTMLElement to access the style property
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full underlay-dot opacity-40"></div>
        <div className="absolute -top-10 -left-10 w-60 h-60 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow parallax" data-speed="0.05"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow parallax" data-speed="-0.03"></div>
      </div>

      <div className="container px-6 md:px-12 mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-16 stagger-container">
          <div className="chip bg-primary/10 text-primary mb-6 animate-bounce-in">
            Introducing CodeForge AI
          </div>
          
          <h1 className="font-bold mb-6 max-w-4xl">
            Automatically Generate & Validate
            <span className="gradient-text"> Coding Problems</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-3xl">
            An AI-powered platform that creates high-quality, diverse coding challenges for education, 
            interviews, and self-learning—validated and refined by four specialized AI agents.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Get Started Free
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={18} />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
            <Button size="lg" variant="outline" className="group border-primary/20 hover:border-primary/40">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 group-hover:text-primary transition-colors duration-300">
                Watch Demo
              </span>
            </Button>
          </div>
        </div>

        {/* Stats/Chips */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {[
            { icon: <Code size={18} />, text: "10,000+ Problems Generated" },
            { icon: <Brain size={18} />, text: "4 Specialized AI Agents" },
            { icon: <Zap size={18} />, text: "95% Accuracy Rate" },
            { icon: <Star size={18} />, text: "Used by Top Companies" }
          ].map((item, index) => (
            <div key={index} className="glass rounded-xl p-4 flex items-center justify-center gap-2 text-sm md:text-base animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <span className="text-primary">{item.icon}</span>
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Hero Image */}
        <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl animate-scale-in">
          <div className="aspect-[16/9] bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-3xl glass rounded-lg shadow-lg border border-white/30 overflow-hidden">
                <div className="bg-slate-800 h-12 flex items-center px-4 space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-slate-300">CodeForge AI - Problem Generator</span>
                  </div>
                </div>
                <div className="grid grid-cols-5 h-[400px]">
                  <div className="col-span-1 bg-slate-700 p-4">
                    <div className="space-y-3">
                      <div className="w-full h-8 bg-slate-600 rounded"></div>
                      <div className="w-full h-8 bg-slate-600 rounded"></div>
                      <div className="w-full h-8 bg-slate-600 rounded"></div>
                      <div className="w-full h-8 bg-blue-500 rounded"></div>
                      <div className="w-full h-8 bg-slate-600 rounded"></div>
                    </div>
                  </div>
                  <div className="col-span-4 bg-slate-900 p-6 text-left">
                    <div className="space-y-4">
                      <div className="w-3/4 h-8 bg-slate-700 rounded"></div>
                      <div className="space-y-2">
                        <div className="w-full h-4 bg-slate-700 rounded"></div>
                        <div className="w-full h-4 bg-slate-700 rounded"></div>
                        <div className="w-2/3 h-4 bg-slate-700 rounded"></div>
                      </div>
                      <div className="pt-4">
                        <div className="w-full h-28 bg-slate-800 rounded"></div>
                      </div>
                      <div className="pt-4 space-y-2">
                        <div className="w-full h-4 bg-blue-500/20 rounded"></div>
                        <div className="w-full h-4 bg-blue-500/20 rounded"></div>
                        <div className="w-1/2 h-4 bg-blue-500/20 rounded"></div>
                      </div>
                      <div className="w-32 h-10 bg-blue-500 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -right-12 top-1/4 glass p-4 rounded-lg shadow-lg border border-white/30 animate-float opacity-90">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-sm">Problem verified!</div>
            </div>
          </div>
          
          <div className="absolute -left-8 bottom-1/3 glass p-4 rounded-lg shadow-lg border border-white/30 animate-float opacity-90" style={{ animationDelay: "1s" }}>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="text-sm">10 test cases generated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
