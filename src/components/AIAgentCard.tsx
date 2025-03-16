
import React from 'react';
import { Check, ChevronRight, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface AIAgentCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
  position: number;
  details: string[];
  color: string;
}

const AIAgentCard: React.FC<AIAgentCardProps> = ({
  icon,
  title,
  description,
  isActive,
  onClick,
  position,
  details,
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
      layout="position"
      layoutId={`agent-card-${position}`}
      whileHover={!isActive ? { scale: 1.03, transition: { duration: 0.3 } } : {}}
      style={{ 
        height: isActive ? 'auto' : '280px', // Fixed height when not active
        minHeight: '280px'
      }}
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
        ) : null}
      </motion.div>
      
      <div className="flex flex-col h-full">
        <motion.div 
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
          )}
          style={{ backgroundColor: isActive ? color : `${color}20` }}
          layoutId={`agent-icon-${position}`}
          animate={{ 
            backgroundColor: isActive ? color : `${color}20`,
            color: isActive ? "white" : color,
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
        
        <div className="mt-auto">
          {!isActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full group mt-2"
              >
                <span>More Details</span>
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          )}
          
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
                <p className="text-sm font-medium mb-2">Details:</p>
                <ul className="space-y-2">
                  {details.map((detail, index) => (
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
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default AIAgentCard;
