
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  Briefcase, 
  Code, 
  ChevronRight, 
  Check,
  BookOpen,
  Users,
  FileText,
  Network,
  Award,
  GanttChart,
  Search,
  BadgeCheck,
  BarChart
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

const AudienceTab = ({ 
  id, 
  icon, 
  title, 
  description, 
  benefits, 
  mockUI
}: { 
  id: string; 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  benefits: string[]; 
  mockUI: React.ReactNode;
}) => {
  return (
    <TabsContent 
      value={id} 
      className="mt-6 animate-slide-up"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
              <span className="text-primary">{icon}</span>
            </div>
            <h3 className="text-2xl font-medium">For {title}</h3>
          </div>
          
          <p className="text-muted-foreground mb-6">{description}</p>
          
          <ul className="space-y-3 mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <Check className="h-3 w-3 text-green-600" />
                </div>
                <span className="text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <Button className="group">
            <span>Learn More</span>
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
        
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          {mockUI}
        </div>
      </div>
    </TabsContent>
  );
};

const TargetAudience = () => {
  const audiences = [
    {
      id: "educators",
      icon: <GraduationCap size={20} />,
      title: "Educators",
      description: "Transform your coding curriculum with customized problems that align perfectly with your teaching objectives.",
      benefits: [
        "Generate assignment problems tailored to specific learning objectives",
        "Create exam questions with controlled difficulty levels",
        "Automate grading with comprehensive test cases",
        "Provide detailed feedback to students with solution explanations",
        "Scale your course materials effortlessly for any class size"
      ],
      mockUI: (
        <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-slate-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5/6 glass rounded-lg border border-white/30 shadow-lg overflow-hidden">
              {/* Educator UI mockup */}
              <div className="bg-slate-800 h-10 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="ml-4 text-white text-xs">Course Manager</div>
              </div>
              <div className="p-4 bg-white">
                <div className="flex items-center mb-4">
                  <BookOpen size={16} className="text-blue-500 mr-2" />
                  <div className="text-sm font-medium">Data Structures 101</div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <div className="text-xs font-medium">Assignment Generator</div>
                    <div className="text-xs text-blue-500">+ New</div>
                  </div>
                  <div className="p-2 bg-blue-50 rounded-md">
                    <div className="text-xs font-medium mb-1">Assignment #3: Trees</div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>15 problems</span>
                      <span>Due: Oct 15</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-green-50 p-2 rounded text-xs">
                      <div className="font-medium text-green-700">Easy (5)</div>
                    </div>
                    <div className="bg-yellow-50 p-2 rounded text-xs">
                      <div className="font-medium text-yellow-700">Medium (7)</div>
                    </div>
                    <div className="bg-red-50 p-2 rounded text-xs">
                      <div className="font-medium text-red-700">Hard (3)</div>
                    </div>
                    <div className="bg-purple-50 p-2 rounded text-xs">
                      <div className="font-medium text-purple-700">+ Custom</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white text-xs px-3 py-1 rounded">Generate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "recruiters",
      icon: <Briefcase size={20} />,
      title: "Recruiters",
      description: "Streamline your technical interview process with unique, real-world coding challenges to accurately assess candidates.",
      benefits: [
        "Create unique problems for each interview to prevent memorized solutions",
        "Ensure fair assessment with validated problems of consistent difficulty",
        "Generate domain-specific challenges relevant to your open positions",
        "Evaluate candidates against comprehensive test cases automatically",
        "Reduce time spent on interview preparation by 70%"
      ],
      mockUI: (
        <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-slate-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5/6 glass rounded-lg border border-white/30 shadow-lg overflow-hidden">
              {/* Recruiter UI mockup */}
              <div className="bg-slate-800 h-10 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="ml-4 text-white text-xs">Interview Portal</div>
              </div>
              <div className="p-4 bg-white">
                <div className="flex items-center mb-4 justify-between">
                  <div className="flex items-center">
                    <Users size={16} className="text-indigo-500 mr-2" />
                    <div className="text-sm font-medium">Candidate Assessment</div>
                  </div>
                  <div className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">Senior Dev</div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <div className="text-xs font-medium">Interview Challenge Pack</div>
                    <Search size={14} className="text-gray-400" />
                  </div>
                  <div className="flex gap-2 mb-2">
                    <div className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs">Frontend</div>
                    <div className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs">React</div>
                    <div className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs">TypeScript</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 border-l-2 border-indigo-500 bg-indigo-50 rounded-r-md">
                      <div>
                        <div className="text-xs font-medium">UI Component Architecture</div>
                        <div className="text-xs text-gray-500">Medium · 45 min</div>
                      </div>
                      <BadgeCheck size={16} className="text-indigo-500" />
                    </div>
                    <div className="flex items-center justify-between p-2 border-l-2 border-indigo-200 bg-gray-50 rounded-r-md">
                      <div>
                        <div className="text-xs font-medium">API Data Fetching Challenge</div>
                        <div className="text-xs text-gray-500">Hard · 60 min</div>
                      </div>
                      <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-indigo-500 text-white text-xs px-3 py-1 rounded">Send to Candidate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "developers",
      icon: <Code size={20} />,
      title: "Developers",
      description: "Accelerate your growth with personalized challenges that target your skill gaps and expand your programming expertise.",
      benefits: [
        "Practice with problems specifically targeting your skill gaps",
        "Prepare for technical interviews with industry-relevant challenges",
        "Access problems across various domains and complexity levels",
        "Receive detailed explanations and optimal solutions for learning",
        "Track your progress with comprehensive performance analytics"
      ],
      mockUI: (
        <div className="aspect-[4/3] bg-gradient-to-br from-green-50 to-slate-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5/6 glass rounded-lg border border-white/30 shadow-lg overflow-hidden">
              {/* Developer UI mockup */}
              <div className="bg-slate-800 h-10 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="ml-4 text-white text-xs">Developer Dashboard</div>
              </div>
              <div className="p-4 bg-white">
                <div className="flex items-center mb-4">
                  <BarChart size={16} className="text-green-500 mr-2" />
                  <div className="text-sm font-medium">Your Progress</div>
                </div>
                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Skill Level: Algorithms</span>
                    <span className="font-medium">73%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '73%' }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-blue-50 p-2 rounded text-xs">
                    <div className="font-medium">Recommended</div>
                    <div className="text-blue-700 mt-1">Graph Traversal</div>
                  </div>
                  <div className="bg-green-50 p-2 rounded text-xs">
                    <div className="font-medium">Completed</div>
                    <div className="text-green-700 mt-1">47 problems</div>
                  </div>
                  <div className="bg-yellow-50 p-2 rounded text-xs">
                    <div className="font-medium">Streak</div>
                    <div className="text-yellow-700 mt-1">7 days</div>
                  </div>
                  <div className="bg-purple-50 p-2 rounded text-xs">
                    <div className="font-medium">Next Goal</div>
                    <div className="text-purple-700 mt-1">Dynamic Prog.</div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-green-500 text-white text-xs px-3 py-1 rounded">Practice Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 stagger-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Tailored Solutions for Every Need
        </h2>
        <p className="text-muted-foreground text-lg">
          Whether you're teaching, recruiting, or improving your skills, 
          CodeForge AI adapts to your specific requirements.
        </p>
      </div>
      
      <Tabs defaultValue="educators" className="w-full">
        <div className="w-full">
          <TabsList className="w-full h-auto bg-muted/50 grid grid-cols-1 sm:grid-cols-3 mb-8">
            {audiences.map(audience => (
              <TabsTrigger 
                key={audience.id}
                value={audience.id}
                className="py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                <div className="flex items-center">
                  <div className="mr-2">{audience.icon}</div>
                  <span>For {audience.title}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        {audiences.map(audience => (
          <AudienceTab 
            key={audience.id}
            id={audience.id}
            icon={audience.icon}
            title={audience.title}
            description={audience.description}
            benefits={audience.benefits}
            mockUI={audience.mockUI}
          />
        ))}
      </Tabs>
    </section>
  );
};

export default TargetAudience;
