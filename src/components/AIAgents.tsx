
import React, { useState } from 'react';
import { 
  FileText, 
  Code, 
  BrainCircuit, 
  Sparkles, 
  ArrowRight,
  Check,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const AgentCard = ({ 
  icon, 
  title, 
  description, 
  isActive, 
  onClick, 
  position,
  examples,
  color
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  isActive: boolean; 
  onClick: () => void; 
  position: number;
  examples: string[];
  color: string;
}) => {
  return (
    <motion.div 
      className={cn(
        "relative p-6 rounded-xl transition-all duration-300 cursor-pointer overflow-hidden",
        isActive 
          ? "bg-white border-2 border-primary shadow-lg z-20" 
          : "bg-white border border-border hover:border-primary/20 shadow-card"
      )}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: position * 0.1,
        ease: "easeOut"
      }}
      layout
      whileHover={!isActive ? { scale: 1.03, transition: { duration: 0.2 } } : {}}
    >
      <div 
        className={cn(
          "absolute -right-20 -top-20 w-40 h-40 rounded-full opacity-10 transition-all duration-500",
          isActive ? "scale-150" : "scale-100"
        )} 
        style={{ backgroundColor: color }}
      />
      
      <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        {isActive ? (
          <X className="h-5 w-5 cursor-pointer hover:text-primary" onClick={(e) => {
            e.stopPropagation();
            onClick();
          }} />
        ) : (
          <ArrowRight className="h-5 w-5 text-primary" />
        )}
      </div>
      
      <div 
        className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300",
          isActive ? `text-white` : "text-primary"
        )}
        style={{ backgroundColor: isActive ? color : `${color}20` }}
      >
        {icon}
      </div>
      
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className={cn(
        "text-sm mb-4",
        "text-muted-foreground"
      )}>
        {description}
      </p>
      
      <AnimatePresence>
        {isActive && (
          <motion.div 
            className="mt-4 pt-4 border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm font-medium mb-2">Examples:</p>
            <ul className="space-y-2">
              {examples.map((example, index) => (
                <motion.li 
                  key={index} 
                  className="text-xs flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <Check className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5 text-primary" />
                  <span>{example}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

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
      color: "#0EA5E9", // Ocean blue
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
      color: "#F97316", // Bright orange
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
      color: "#D946EF", // Magenta pink
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
        
        <div 
          className={cn(
            "grid gap-6 mb-12 transition-all duration-500",
            activeAgent !== null
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 max-w-3xl mx-auto"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          )}
        >
          {agents.map((agent, index) => (
            <AgentCard
              key={index}
              icon={agent.icon}
              title={agent.title}
              description={agent.description}
              isActive={activeAgent === index}
              onClick={() => handleCardClick(index)}
              position={index}
              examples={agent.examples}
              color={agent.color}
            />
          ))}
        </div>
        
        {/* Agent Flow Diagram - Only show when no agent is active */}
        <AnimatePresence>
          {activeAgent === null && (
            <motion.div 
              className="mt-20 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <div className="w-full max-w-4xl h-1.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-full"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
                {agents.map((agent, index) => (
                  <React.Fragment key={index}>
                    <motion.div 
                      className="flex flex-col items-center cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => handleCardClick(index)}
                    >
                      <div 
                        className="w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-colors duration-300 text-white"
                        style={{ backgroundColor: agent.color }}
                      >
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-xs font-medium text-center">{agent.title}</span>
                    </motion.div>
                    
                    {index < agents.length - 1 && (
                      <ArrowRight className="hidden md:block text-primary/50 mb-6 animate-pulse" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AIAgents;
