
import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface AIAgentCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
  position: number;
  examples: string[];
  color: string;
}

const AIAgentCard: React.FC<AIAgentCardProps> = ({
  icon,
  title,
  description,
  isActive,
  onClick,
  position,
  examples,
  color
}) => {
  return (
    <motion.div 
      className={cn(
        "relative p-6 rounded-xl transition-all duration-500 cursor-pointer overflow-hidden",
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
      layoutId={`agent-card-${position}`}
      whileHover={!isActive ? { scale: 1.03, transition: { duration: 0.3 } } : {}}
    >
      <motion.div 
        className={cn(
          "absolute -right-20 -top-20 w-40 h-40 rounded-full opacity-10",
        )} 
        style={{ backgroundColor: color }}
        layoutId={`agent-bg-${position}`}
        initial={{ scale: 1 }}
        animate={{ 
          scale: isActive ? 1.5 : 1,
          transition: { duration: 0.5, ease: "easeInOut" }
        }}
      />
      
      <motion.div 
        className="absolute right-3 top-3 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {isActive ? (
          <X 
            className="h-5 w-5 cursor-pointer hover:text-primary" 
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }} 
          />
        ) : (
          <ArrowRight className="h-5 w-5 text-primary" />
        )}
      </motion.div>
      
      <motion.div 
        className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
        )}
        style={{ backgroundColor: isActive ? color : `${color}20` }}
        layoutId={`agent-icon-${position}`}
        animate={{ 
          backgroundColor: isActive ? color : `${color}20`,
          color: isActive ? "white" : "var(--primary)",
          transition: { duration: 0.5 }
        }}
      >
        {icon}
      </motion.div>
      
      <motion.h3 
        className="text-xl font-medium mb-2"
        layoutId={`agent-title-${position}`}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-sm text-muted-foreground mb-4"
        layoutId={`agent-desc-${position}`}
      >
        {description}
      </motion.p>
      
      <AnimatePresence>
        {isActive && (
          <motion.div 
            className="mt-4 pt-4 border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: 'auto',
              transition: { 
                duration: 0.5,
                ease: "easeInOut",
                staggerChildren: 0.1
              }
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              transition: { 
                duration: 0.4,
                ease: "easeInOut" 
              }
            }}
          >
            <p className="text-sm font-medium mb-2">Examples:</p>
            <ul className="space-y-2">
              {examples.map((example, index) => (
                <motion.li 
                  key={index} 
                  className="text-xs flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 0.3, delay: 0.2 + index * 0.05 }
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: -10,
                    transition: { duration: 0.2 }
                  }}
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

export default AIAgentCard;
