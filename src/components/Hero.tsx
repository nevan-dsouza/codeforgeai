
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Brain, Zap, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
        // Cast the Element to HTMLElement to access the style property
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

        {/* Improved Coding Platform UI */}
        <div className="relative w-full max-w-5xl mx-auto shadow-2xl animate-scale-in rounded-xl overflow-hidden">
          <div className="bg-[#0f172a] rounded-xl overflow-hidden">
            {/* Dark header with navigation */}
            <div className="bg-[#1e293b] h-14 flex items-center px-4 text-white">
              <div className="flex items-center space-x-4">
                <div className="text-blue-400 font-semibold text-lg flex items-center">
                  <Code className="mr-2" size={20} />
                  <span>CodeForge</span>
                </div>
                <div className="hidden md:flex space-x-4 text-gray-300 text-sm">
                  <span className="cursor-pointer hover:text-white">Problems</span>
                  <span className="cursor-pointer hover:text-white">Contests</span>
                  <span className="cursor-pointer hover:text-white">Learn</span>
                  <span className="cursor-pointer hover:text-white">Community</span>
                </div>
              </div>
              <div className="ml-auto flex items-center space-x-2">
                <div className="bg-green-500 text-white px-3 py-1 rounded-md text-xs font-medium flex items-center cursor-pointer">
                  <span>Create Problem</span>
                  <ArrowRight size={12} className="ml-1" />
                </div>
                <div className="text-xs cursor-pointer">Sign In</div>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 h-[450px]">
              {/* Left sidebar with filters */}
              <div className="hidden md:block md:col-span-3 bg-[#1e293b] p-4 text-white">
                <div className="text-lg font-medium mb-3">Filters</div>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Difficulty</div>
                    <div className="flex space-x-2">
                      <div className="px-2 py-1 bg-green-900/30 text-green-400 rounded text-xs">Easy</div>
                      <div className="px-2 py-1 bg-yellow-900/30 text-yellow-400 rounded text-xs">Medium</div>
                      <div className="px-2 py-1 bg-red-900/30 text-red-400 rounded text-xs">Hard</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Categories</div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-sm bg-blue-500/20 border border-blue-500/50"></div>
                        <span className="text-sm">Arrays</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-sm bg-blue-500/20 border border-blue-500/50"></div>
                        <span className="text-sm">Strings</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-sm bg-blue-500/20 border border-blue-500/50"></div>
                        <span className="text-sm">Hash Table</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-sm bg-blue-500/20 border border-blue-500/50"></div>
                        <span className="text-sm">Dynamic Programming</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main content area with problem list */}
              <div className="col-span-1 md:col-span-9 bg-[#0f172a] p-4 text-white overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xl font-medium">Coding Problems</div>
                  <div className="relative">
                    <input type="text" placeholder="Search problems..." className="bg-[#1e293b] text-white text-sm px-3 py-1 rounded-md w-48 border border-slate-700" />
                  </div>
                </div>

                {/* Featured problem card */}
                <Card className="mb-4 bg-gradient-to-r from-blue-950 to-indigo-950 border-blue-900/50 text-white overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-blue-600/30 text-blue-400 text-xs px-2 py-0.5 rounded-full">Featured</span>
                      <span className="bg-green-600/30 text-green-400 text-xs px-2 py-0.5 rounded-full">Easy</span>
                    </div>
                    <div className="text-lg font-medium mb-1">Two Sum</div>
                    <div className="text-sm text-gray-300 mb-3">
                      Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
                    </div>
                    <div className="flex space-x-2 text-xs">
                      <span className="bg-slate-800 px-2 py-1 rounded">arrays</span>
                      <span className="bg-slate-800 px-2 py-1 rounded">hash-table</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent problem list */}
                <div className="space-y-3">
                  <div className="bg-[#1e293b] p-3 rounded-lg border border-slate-700/50 hover:border-blue-500/30 transition-colors cursor-pointer">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-md font-medium">Add Two Numbers</div>
                        <div className="text-xs text-gray-400 line-clamp-1 mt-1">
                          You are given two non-empty linked lists representing two non-negative integers.
                        </div>
                      </div>
                      <div className="bg-yellow-600/30 text-yellow-400 text-xs px-2 py-0.5 rounded-full shrink-0">
                        Medium
                      </div>
                    </div>
                    <div className="mt-2 flex space-x-2 text-xs">
                      <span className="bg-slate-800 px-2 py-0.5 rounded">linked-list</span>
                      <span className="bg-slate-800 px-2 py-0.5 rounded">math</span>
                    </div>
                  </div>
                  
                  <div className="bg-[#1e293b] p-3 rounded-lg border border-slate-700/50 hover:border-blue-500/30 transition-colors cursor-pointer">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-md font-medium">Longest Substring Without Repeating Characters</div>
                        <div className="text-xs text-gray-400 line-clamp-1 mt-1">
                          Given a string s, find the length of the longest substring without repeating characters.
                        </div>
                      </div>
                      <div className="bg-yellow-600/30 text-yellow-400 text-xs px-2 py-0.5 rounded-full shrink-0">
                        Medium
                      </div>
                    </div>
                    <div className="mt-2 flex space-x-2 text-xs">
                      <span className="bg-slate-800 px-2 py-0.5 rounded">hash-table</span>
                      <span className="bg-slate-800 px-2 py-0.5 rounded">string</span>
                      <span className="bg-slate-800 px-2 py-0.5 rounded">sliding-window</span>
                    </div>
                  </div>
                  
                  <div className="bg-[#1e293b] p-3 rounded-lg border border-slate-700/50 hover:border-blue-500/30 transition-colors cursor-pointer">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-md font-medium">Median of Two Sorted Arrays</div>
                        <div className="text-xs text-gray-400 line-clamp-1 mt-1">
                          Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
                        </div>
                      </div>
                      <div className="bg-red-600/30 text-red-400 text-xs px-2 py-0.5 rounded-full shrink-0">
                        Hard
                      </div>
                    </div>
                    <div className="mt-2 flex space-x-2 text-xs">
                      <span className="bg-slate-800 px-2 py-0.5 rounded">array</span>
                      <span className="bg-slate-800 px-2 py-0.5 rounded">binary-search</span>
                      <span className="bg-slate-800 px-2 py-0.5 rounded">divide-and-conquer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute right-4 top-20 glass p-4 rounded-lg shadow-lg border border-white/30 animate-float opacity-90 max-w-[250px] z-20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-sm font-medium">New problem generated and validated</div>
            </div>
          </div>
          
          <div className="absolute left-4 bottom-16 glass p-4 rounded-lg shadow-lg border border-white/30 animate-float opacity-90 max-w-[250px] z-20" style={{ animationDelay: "1s" }}>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="text-sm font-medium">15 test cases automatically generated</div>
            </div>
          </div>

          <div className="absolute right-32 bottom-32 glass p-4 rounded-lg shadow-lg border border-white/30 animate-float opacity-90 max-w-[250px] z-20" style={{ animationDelay: "1.5s" }}>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="text-sm font-medium">Problem difficulty assessed as Medium</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
