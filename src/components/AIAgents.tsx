
import React, { useState } from 'react';
import { 
  FileText, 
  Code, 
  BrainCircuit, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import AIAgentCard from './AIAgentCard';

const AIAgents = () => {
  const [activeAgent, setActiveAgent] = useState<number | null>(null);
  
  const handleCardClick = (index: number) => {
    setActiveAgent(activeAgent === index ? null : index);
  };
  
  const agents = [
    {
      icon: <FileText size={24} />,
      title: "Problem Setter",
      description: "Generates clear, engaging problem statements with precise requirements and solutions.",
      color: "#8B5CF6", // Vivid purple
      details: [
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
      color: "#0EA5E9", // Ocean blue
      details: [
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
      color: "#F97316", // Bright orange
      details: [
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
      color: "#D946EF", // Magenta pink
      details: [
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
        
        <LayoutGroup>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            layout
            transition={{ 
              layout: { duration: 0.6, ease: "easeInOut" },
              opacity: { duration: 0.3 }
            }}
          >
            {agents.map((agent, index) => (
              <AIAgentCard
                key={index}
                icon={agent.icon}
                title={agent.title}
                description={agent.description}
                isActive={activeAgent === index}
                onClick={() => handleCardClick(index)}
                position={index}
                details={agent.details}
                color={agent.color}
              />
            ))}
          </motion.div>
        </LayoutGroup>
        
        {/* Agent Flow Diagram - Show always regardless of active agent */}
        <motion.div 
          className="mt-8 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.5, 
              delay: 0.2,
              ease: "easeOut" 
            }
          }}
        >
          <div className="flex justify-center items-center space-x-4 md:space-x-10">
            {agents.map((agent, index) => (
              <React.Fragment key={index}>
                {/* Agent Number */}
                <div className="flex flex-col items-center">
                  <motion.div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-2 text-white cursor-pointer"
                    style={{ backgroundColor: agent.color }}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 0 15px rgba(0,0,0,0.1)",
                      transition: { duration: 0.3 }
                    }}
                    onClick={() => handleCardClick(index)}
                  >
                    <span className="text-sm font-bold">{index + 1}</span>
                  </motion.div>
                </div>
                
                {/* Arrow between numbers */}
                {index < agents.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0.5 }}
                    animate={{ 
                      opacity: [0.5, 1, 0.5],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <ArrowRight className="text-primary/70" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIAgents;
