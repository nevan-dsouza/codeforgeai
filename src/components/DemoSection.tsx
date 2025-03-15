
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Code, 
  BrainCircuit, 
  Sparkles, 
  ArrowRight,
  Play,
  Pause
} from 'lucide-react';
import { cn } from '@/lib/utils';

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  
  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };
  
  const demoSteps = [
    {
      title: "Problem Generation",
      description: "The Problem Setter AI generates a clear, engaging problem statement based on your specifications.",
      icon: <FileText className="h-5 w-5" />,
      content: `
1. Reverse a Linked List

Description:
Write a function that reverses a singly linked list.

Example:
Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL

Constraints:
- The number of nodes in the list is in the range [0, 5000]
- -5000 <= Node.val <= 5000
      `
    },
    {
      title: "Test Case Creation",
      description: "The Test Case Generator creates comprehensive test cases to validate all solution paths.",
      icon: <Code className="h-5 w-5" />,
      content: `
Test Cases Generated:

1. Empty list:
   Input: NULL
   Expected: NULL

2. Single node:
   Input: 1 -> NULL
   Expected: 1 -> NULL

3. Two nodes:
   Input: 1 -> 2 -> NULL
   Expected: 2 -> 1 -> NULL

4. Standard case:
   Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
   Expected: 5 -> 4 -> 3 -> 2 -> 1 -> NULL

5. Edge case - negative values:
   Input: -1 -> -2 -> -3 -> NULL
   Expected: -3 -> -2 -> -1 -> NULL
      `
    },
    {
      title: "Solution Validation",
      description: "The Automated Solver implements and validates multiple solution approaches.",
      icon: <BrainCircuit className="h-5 w-5" />,
      content: `
Iterative Solution:
\`\`\`python
def reverseList(head):
    prev = None
    current = head
    
    while current:
        next_temp = current.next
        current.next = prev
        prev = current
        current = next_temp
    
    return prev
\`\`\`

Recursive Solution:
\`\`\`python
def reverseList(head):
    if not head or not head.next:
        return head
    
    new_head = reverseList(head.next)
    head.next.next = head
    head.next = None
    
    return new_head
\`\`\`

All test cases passed. Time complexity: O(n), Space complexity: O(1) for iterative, O(n) for recursive.
      `
    },
    {
      title: "Quality Assurance",
      description: "The Critiquer evaluates the problem for clarity, educational value and provides refinements.",
      icon: <Sparkles className="h-5 w-5" />,
      content: `
Problem Quality Assessment:

✓ Clarity: Problem statement is clear and concise
✓ Difficulty: Appropriate for intermediate level
✓ Educational Value: High - teaches fundamental data structure manipulation
✓ Originality: Medium - standard problem but with comprehensive test cases

Refinements Applied:
1. Added visual example for clarity
2. Expanded constraints section
3. Added hint system for struggling users
4. Added follow-up question for advanced learners: "Can you implement both iterative and recursive solutions?"

Problem is ready for deployment.
      `
    }
  ];
  
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See CodeForge AI in Action
          </h2>
          <p className="text-muted-foreground text-lg">
            Watch how our platform transforms a simple specification 
            into a comprehensive, validated coding problem in minutes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Steps sidebar */}
          <div className="lg:col-span-4 space-y-4">
            {demoSteps.map((step, index) => (
              <div 
                key={index}
                onClick={() => setCurrentStep(index)}
                className={cn(
                  "flex items-start p-4 rounded-lg cursor-pointer transition-all duration-300",
                  currentStep === index 
                    ? "bg-white shadow-md border border-primary/20" 
                    : "hover:bg-white/60"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0",
                  currentStep === index 
                    ? "bg-primary text-white" 
                    : "bg-muted text-muted-foreground"
                )}>
                  {index + 1}
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <span className="mr-2 text-primary">{step.icon}</span>
                    <h3 className="font-medium">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
            
            <Button onClick={togglePlayback} className="w-full mt-4 group">
              {isPlaying ? (
                <>
                  <Pause className="mr-2 h-4 w-4" />
                  <span>Pause Demo</span>
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  <span>Play Demo</span>
                </>
              )}
            </Button>
          </div>
          
          {/* Demo content */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-xl border border-border shadow-xl overflow-hidden">
              <div className="bg-slate-800 text-white px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div>
                  <span className="text-sm font-mono">CodeForge AI - {demoSteps[currentStep].title}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400">{currentStep + 1} of {demoSteps.length}</span>
                </div>
              </div>
              
              <div className="p-6 bg-slate-50 min-h-[400px] font-mono text-sm whitespace-pre-wrap overflow-y-auto">
                {demoSteps[currentStep].content}
              </div>
              
              <div className="bg-white p-4 border-t border-border flex justify-between items-center">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                >
                  Previous Step
                </Button>
                
                <div className="flex space-x-1">
                  {demoSteps.map((_, index) => (
                    <div 
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-colors duration-300",
                        currentStep === index ? "bg-primary" : "bg-muted"
                      )}
                    />
                  ))}
                </div>
                
                <Button 
                  onClick={() => setCurrentStep(Math.min(demoSteps.length - 1, currentStep + 1))}
                  disabled={currentStep === demoSteps.length - 1}
                >
                  Next Step
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
