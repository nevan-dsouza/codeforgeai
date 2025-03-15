
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  Briefcase, 
  Code, 
  ChevronRight, 
  Check
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

const AudienceTab = ({ 
  id, 
  icon, 
  title, 
  description, 
  benefits, 
  imageSrc 
}: { 
  id: string; 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  benefits: string[]; 
  imageSrc: string;
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
          <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-slate-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-5/6 glass rounded-lg border border-white/30 shadow-lg overflow-hidden">
                {/* Mock UI based on the audience */}
                <div className="bg-slate-800 h-10 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <div className="space-y-4">
                    <div className="w-2/3 h-5 bg-slate-200 rounded"></div>
                    <div className="space-y-2">
                      <div className="w-full h-3 bg-slate-200 rounded"></div>
                      <div className="w-full h-3 bg-slate-200 rounded"></div>
                      <div className="w-3/4 h-3 bg-slate-200 rounded"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-24 bg-slate-100 rounded"></div>
                      <div className="h-24 bg-slate-100 rounded"></div>
                    </div>
                    <div className="flex justify-end">
                      <div className="w-24 h-8 bg-blue-500 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      imageSrc: "/placeholder.svg"
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
      imageSrc: "/placeholder.svg"
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
      imageSrc: "/placeholder.svg"
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
        <TabsList className="w-full bg-muted/50 p-1 grid grid-cols-1 sm:grid-cols-3 gap-1 mb-8">
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
        
        {audiences.map(audience => (
          <AudienceTab 
            key={audience.id}
            id={audience.id}
            icon={audience.icon}
            title={audience.title}
            description={audience.description}
            benefits={audience.benefits}
            imageSrc={audience.imageSrc}
          />
        ))}
      </Tabs>
    </section>
  );
};

export default TargetAudience;
