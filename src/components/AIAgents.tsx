
import React, { useState } from 'react';
import { 
  FileText, 
  Code, 
  BrainCircuit, 
  Sparkles, 
  ArrowRight,
  Check
} from 'lucide-react';
import { cn } from '@/lib/utils';

const AgentCard = ({ 
  icon, 
  title, 
  description, 
  isActive, 
  onClick, 
  position,
  examples 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  isActive: boolean; 
  onClick: () => void; 
  position: number;
  examples: string[];
}) => {
  return (
    <div 
      className={cn(
        "relative p-6 rounded-xl transition-all duration-300 cursor-pointer group",
        isActive 
          ? "bg-primary text-white shadow-lg z-10 scale-105" 
          : "bg-white border border-border hover:border-primary/20 shadow-card"
      )}
      onClick={onClick}
      style={{
        animationDelay: `${position * 0.1}s`,
      }}
    >
      <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
        {isActive ? (
          <Check className="h-5 w-5" />
        ) : (
          <ArrowRight className="h-5 w-5 text-primary" />
        )}
      </div>
      
      <div className={cn(
        "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
        isActive ? "bg-white/20" : "bg-primary/10"
      )}>
        <div className={isActive ? "text-white" : "text-primary"}>
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className={cn(
        "text-sm mb-4",
        isActive ? "text-white/80" : "text-muted-foreground"
      )}>
        {description}
      </p>
      
      {isActive && (
        <div className="mt-4 pt-4 border-t border-white/20 animate-fade-in">
          <p className="text-sm font-medium mb-2">Examples:</p>
          <ul className="space-y-2">
            {examples.map((example, index) => (
              <li key={index} className="text-xs flex items-start">
                <Check className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const AIAgents = () => {
  const [activeAgent, setActiveAgent] = useState<number>(0);
  
  const agents = [
    {
      icon: <FileText size={24} />,
      title: "Problem Setter",
      description: "Generates clear, engaging problem statements with precise requirements and solutions.",
      examples: [
        "Generates problem descriptions with clarity and specificity",
        "Creates sample inputs and outputs for validation",
        "Sets appropriate difficulty levels based on target audience",
        "Ensures problem statements are original and unique"
      ]
    },
    {
      icon: <Code size={24} />,
      title: "Test Case Generator",
      description: "Creates comprehensive test cases covering all edge cases and potential solution paths.",
      examples: [
        "Identifies edge cases based on static analysis",
        "Generates minimum and maximum input value tests",
        "Creates tests for boundary conditions and exception handling",
        "Builds performance tests for algorithmic efficiency"
      ]
    },
    {
      icon: <BrainCircuit size={24} />,
      title: "Automated Solver",
      description: "Validates problems by solving them using multiple approaches and algorithms.",
      examples: [
        "Implements multiple solution approaches automatically",
        "Verifies solutions against all test cases",
        "Analyzes time and space complexity of solutions",
        "Ensures problems are solvable within reasonable constraints"
      ]
    },
    {
      icon: <Sparkles size={24} />,
      title: "Critiquer",
      description: "Evaluates and refines problems for clarity, difficulty, and educational value.",
      examples: [
        "Assesses problem quality and educational value",
        "Provides feedback on clarity and ambiguity",
        "Suggests improvements to problem statements",
        "Verifies alignment with learning objectives"
      ]
    }
  ];

  return (
    <section id="features" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>
      
      <div className="container px-6 md:px-12 mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 stagger-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Powered by Four Specialized AI Agents
          </h2>
          <p className="text-muted-foreground text-lg">
            Our platform leverages four AI agents working in synergy to create, 
            test, solve, and refine coding problems with unmatched quality and precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {agents.map((agent, index) => (
            <AgentCard
              key={index}
              icon={agent.icon}
              title={agent.title}
              description={agent.description}
              isActive={activeAgent === index}
              onClick={() => setActiveAgent(index)}
              position={index}
              examples={agent.examples}
            />
          ))}
        </div>
        
        {/* Agent Flow Diagram */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
            {agents.map((agent, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center">
                  <div 
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors duration-300",
                      activeAgent === index 
                        ? "bg-primary text-white" 
                        : "bg-white text-primary border border-primary/30"
                    )}
                  >
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-xs font-medium text-center">{agent.title}</span>
                </div>
                
                {index < agents.length - 1 && (
                  <ArrowRight className="hidden md:block text-primary/30 mb-6" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgents;
