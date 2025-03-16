import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Code, 
  BrainCircuit, 
  Sparkles, 
  ArrowRight,
  Play,
  Pause,
  Lightbulb,
  CheckCircle2,
  Terminal,
  ArrowLeft
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [activeProblemTab, setActiveProblemTab] = useState("description");
  const [activeSolutionTab, setActiveSolutionTab] = useState("javascript");
  
  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };
  
  const renderRatingBadge = (score: number, maxScore: number = 5) => {
    let color;
    
    if (score >= 4.5) {
      color = "bg-green-100 text-green-800 border-green-200";
    } else if (score >= 4) {
      color = "bg-green-100 text-green-800 border-green-200";
    } else if (score >= 3) {
      color = "bg-yellow-100 text-yellow-800 border-yellow-200";
    } else if (score >= 2) {
      color = "bg-orange-100 text-orange-800 border-orange-200";
    } else {
      color = "bg-red-100 text-red-800 border-red-200";
    }
    
    return (
      <div className="flex items-center">
        <span className={`text-sm font-medium px-2 py-0.5 rounded ${color}`}>
          {score}/{maxScore}
        </span>
      </div>
    );
  };
  
  const demoSteps = [
    {
      title: "Problem Generation",
      description: "The Problem Setter AI generates a clear, engaging problem statement based on your specifications.",
      icon: <FileText className="h-5 w-5" />,
      problem: {
        title: "Two Sum",
        difficulty: "Easy",
        tags: ["Arrays", "Hash Table"],
        description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
        examples: [
          {
            input: "nums = [2,7,11,15], target = 9",
            output: "[0,1]",
            explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
          },
          {
            input: "nums = [3,2,4], target = 6",
            output: "[1,2]",
            explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
          }
        ]
      }
    },
    {
      title: "Test Case Creation",
      description: "The Test Case Generator creates comprehensive test cases to validate all solution paths.",
      icon: <Code className="h-5 w-5" />,
      problem: {
        title: "Two Sum",
        difficulty: "Easy",
        tags: ["Arrays", "Hash Table"],
        description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.`,
        testCases: [
          {
            input: "nums = [2,7,11,15], target = 9",
            expected: "[0,1]"
          },
          {
            input: "nums = [3,2,4], target = 6",
            expected: "[1,2]"
          },
          {
            input: "nums = [3,3], target = 6",
            expected: "[0,1]"
          },
          {
            input: "nums = [-1,-2,-3,-4,-5], target = -8",
            expected: "[2,4]"
          },
          {
            input: "nums = [0,4,3,0], target = 0",
            expected: "[0,3]"
          }
        ]
      }
    },
    {
      title: "Solution Validation",
      description: "The Automated Solver implements and validates multiple solution approaches.",
      icon: <BrainCircuit className="h-5 w-5" />,
      problem: {
        title: "Two Sum",
        difficulty: "Easy",
        tags: ["Arrays", "Hash Table"],
        solutions: {
          javascript: `function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}`,
          python: `def twoSum(nums, target):
    num_map = {}
    
    for i, num in enumerate(nums):
        complement = target - num
        
        if complement in num_map:
            return [num_map[complement], i]
            
        num_map[num] = i
    
    return []`,
          java: `public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        
        if (map.containsKey(complement)) {
            return new int[] { map.get(complement), i };
        }
        
        map.put(nums[i], i);
    }
    
    return new int[0];
}`
        },
        console: `Running tests...
✓ Test case 1 passed
✓ Test case 2 passed
✓ Test case 3 passed
✓ Test case 4 passed
✓ Test case 5 passed

Performance:
Time Complexity: O(n)
Space Complexity: O(n)

All test cases passed!`
      }
    },
    {
      title: "Quality Assurance",
      description: "The Critiquer evaluates the problem for clarity, educational value and provides refinements.",
      icon: <Sparkles className="h-5 w-5" />,
      problem: {
        title: "Two Sum",
        difficulty: "Easy",
        tags: ["Arrays", "Hash Table"],
        quality: {
          clarity: {
            score: 5,
            comment: "Problem statement is clear and concise."
          },
          difficulty: {
            score: 4,
            comment: "Appropriate for intermediate level."
          },
          education: {
            score: 5,
            comment: "Teaches fundamental hash table usage."
          },
          coverage: {
            score: 5,
            comment: "Comprehensive test cases including edge cases."
          },
          feedback: `This is an excellent introductory problem that teaches:
- Hash table usage for O(n) lookup
- Array traversal techniques
- Problem decomposition

Recommendations:
- Add a follow-up question on optimizing for memory
- Include a visual example for better understanding
- Add hints for learners who might struggle`
        }
      }
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
          <div className="lg:col-span-3 space-y-4">
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
          
          <div className="lg:col-span-9">
            <div className="bg-[#151a2d] rounded-xl overflow-hidden border border-[#272e48] shadow-xl">
              <div className="bg-[#1e2436] text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center">
                  <ArrowLeft className="h-5 w-5 mr-4 text-slate-400" />
                  <h3 className="text-xl font-medium">
                    {demoSteps[currentStep].problem?.title || "Two Sum"}
                  </h3>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-[#345336] text-green-300">
                    Easy
                  </span>
                  {demoSteps[currentStep].problem?.tags?.map((tag, i) => (
                    <span key={i} className="px-2 py-1 rounded-full text-xs font-medium bg-[#2d3345] text-blue-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row min-h-[600px]">
                <div className="w-full md:w-1/2 border-r border-[#272e48]">
                  <div className="bg-[#1e2436] border-b border-[#272e48] px-2">
                    <Tabs value={activeProblemTab} className="w-full">
                      <TabsList className="w-full h-10 bg-transparent">
                        <TabsTrigger 
                          value="description" 
                          onClick={() => setActiveProblemTab("description")}
                          className="text-sm data-[state=active]:bg-[#151a2d] data-[state=active]:text-white text-slate-400 rounded-none"
                        >
                          Description
                        </TabsTrigger>
                        <TabsTrigger 
                          value="solution" 
                          onClick={() => setActiveProblemTab("solution")}
                          className="text-sm data-[state=active]:bg-[#151a2d] data-[state=active]:text-white text-slate-400 rounded-none"
                        >
                          Solution
                        </TabsTrigger>
                        <TabsTrigger 
                          value="discussion" 
                          onClick={() => setActiveProblemTab("discussion")}
                          className="text-sm data-[state=active]:bg-[#151a2d] data-[state=active]:text-white text-slate-400 rounded-none"
                        >
                          Discussion
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  
                  <div className="p-6 text-white overflow-y-auto max-h-[540px]">
                    {currentStep === 0 && (
                      <div className="space-y-6">
                        <p className="text-slate-300">{demoSteps[0].problem.description}</p>
                        
                        <div className="space-y-4">
                          <h4 className="font-medium">Examples:</h4>
                          {demoSteps[0].problem.examples.map((example, i) => (
                            <div key={i} className="p-3 bg-[#1d2335] rounded-md">
                              <div className="text-sm">
                                <p className="font-medium text-slate-200">Input: <span className="font-mono text-yellow-300">{example.input}</span></p>
                                <p className="font-medium text-slate-200">Output: <span className="font-mono text-green-300">{example.output}</span></p>
                                <p className="text-slate-400 mt-2">{example.explanation}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <p className="text-slate-300">{demoSteps[1].problem.description}</p>
                        
                        <div className="space-y-4">
                          <h4 className="font-medium flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-green-400 mr-2" />
                            <span>Test Cases Generated:</span>
                          </h4>
                          {demoSteps[1].problem.testCases.map((test, i) => (
                            <div key={i} className="p-3 bg-[#1d2335] rounded-md">
                              <div className="text-sm">
                                <p className="font-medium text-slate-200">Input: <span className="font-mono text-yellow-300">{test.input}</span></p>
                                <p className="font-medium text-slate-200">Expected: <span className="font-mono text-green-300">{test.expected}</span></p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {currentStep === 2 && (
                      <div className="space-y-4">
                        <div className="bg-[#1e2436] border border-[#272e48] rounded mb-4">
                          <div className="border-b border-[#272e48] px-2">
                            <Tabs value={activeSolutionTab} className="w-full">
                              <TabsList className="w-full h-10 bg-transparent">
                                <TabsTrigger 
                                  value="javascript" 
                                  onClick={() => setActiveSolutionTab("javascript")}
                                  className="text-xs data-[state=active]:bg-[#151a2d] data-[state=active]:text-white text-slate-400 rounded-none"
                                >
                                  JavaScript
                                </TabsTrigger>
                                <TabsTrigger 
                                  value="python" 
                                  onClick={() => setActiveSolutionTab("python")}
                                  className="text-xs data-[state=active]:bg-[#151a2d] data-[state=active]:text-white text-slate-400 rounded-none"
                                >
                                  Python
                                </TabsTrigger>
                                <TabsTrigger 
                                  value="java" 
                                  onClick={() => setActiveSolutionTab("java")}
                                  className="text-xs data-[state=active]:bg-[#151a2d] data-[state=active]:text-white text-slate-400 rounded-none"
                                >
                                  Java
                                </TabsTrigger>
                              </TabsList>
                            </Tabs>
                          </div>
                          <pre className="p-4 text-sm font-mono text-green-300 overflow-x-auto">
                            {activeSolutionTab === "javascript" && demoSteps[2].problem.solutions.javascript}
                            {activeSolutionTab === "python" && demoSteps[2].problem.solutions.python}
                            {activeSolutionTab === "java" && demoSteps[2].problem.solutions.java}
                          </pre>
                        </div>
                        
                        <div className="mt-4">
                          <h4 className="font-medium flex items-center mb-2">
                            <Terminal className="h-4 w-4 text-slate-400 mr-2" />
                            <span>Console Output:</span>
                          </h4>
                          <pre className="p-4 bg-[#1a1e2d] text-sm font-mono text-slate-300 rounded-md overflow-x-auto">
                            {demoSteps[2].problem.console}
                          </pre>
                        </div>
                      </div>
                    )}
                    
                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <h4 className="font-medium">Problem Quality Assessment:</h4>
                          <div className="grid grid-cols-2 gap-4">
                            {Object.entries(demoSteps[3].problem.quality).slice(0, 4).map(([key, value]) => {
                              if (typeof value === 'object' && value.score !== undefined) {
                                let badgeColor = "";
                                if (value.score === 5) badgeColor = "bg-green-100 text-green-800 border-green-200";
                                else if (value.score === 4) badgeColor = "bg-blue-100 text-blue-800 border-blue-200";
                                else if (value.score === 3) badgeColor = "bg-yellow-100 text-yellow-800 border-yellow-200";
                                else if (value.score === 2) badgeColor = "bg-orange-100 text-orange-800 border-orange-200";
                                else badgeColor = "bg-red-100 text-red-800 border-red-200";
                                
                                return (
                                  <div key={key} className="p-3 bg-[#1d2335] rounded-md">
                                    <div className="flex justify-between items-center mb-2">
                                      <span className="text-sm capitalize font-medium">
                                        {key === "education" ? "Education" : 
                                         key === "coverage" ? "Coverage" : 
                                         key.charAt(0).toUpperCase() + key.slice(1)}:
                                      </span>
                                      <div className="flex items-center">
                                        <span className={`text-sm font-medium px-2 py-0.5 rounded ${badgeColor}`}>
                                          {value.score}/5
                                        </span>
                                      </div>
                                    </div>
                                    <p className="text-xs text-slate-400">{value.comment}</p>
                                  </div>
                                );
                              }
                              return null;
                            })}
                          </div>
                          
                          <div className="p-4 bg-[#1d2335] rounded-md mt-4">
                            <h5 className="font-medium mb-2">Feedback & Recommendations:</h5>
                            <div className="text-sm whitespace-pre-wrap text-slate-300">
                              {demoSteps[3].problem.quality.feedback}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col">
                  <div className="bg-[#1e2436] border-b border-[#272e48] flex items-center justify-between px-4 py-2">
                    <span className="text-slate-300 text-sm">Code Editor</span>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="h-8 bg-[#2d3345] border-[#3d4356] text-slate-300 hover:bg-[#3d4356]">
                        <Lightbulb className="h-4 w-4 mr-1" />
                        <span className="text-xs">Hint</span>
                      </Button>
                      <Button size="sm" className="h-8 bg-indigo-600 hover:bg-indigo-700 text-white">
                        <Play className="h-4 w-4 mr-1" />
                        <span className="text-xs">Run</span>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex-grow bg-[#151a2d] p-4 font-mono text-sm text-slate-300 overflow-hidden">
                    <pre className="text-green-300">
{`function twoSum(nums, target) {
  // Write your code here
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}`}</pre>
                  </div>
                  
                  <div className="bg-[#1a1e2d] border-t border-[#272e48] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">Console Output</span>
                      <span className="text-xs text-slate-500">Run your code to see output here</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#1e2436] p-4 border-t border-[#272e48] flex justify-between items-center">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="bg-[#2d3345] border-[#3d4356] text-slate-300 hover:bg-[#3d4356]"
                >
                  Previous Step
                </Button>
                
                <div className="flex space-x-1">
                  {demoSteps.map((_, index) => (
                    <div 
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-colors duration-300",
                        currentStep === index ? "bg-primary" : "bg-[#2d3345]"
                      )}
                    />
                  ))}
                </div>
                
                <Button 
                  onClick={() => setCurrentStep(Math.min(demoSteps.length - 1, currentStep + 1))}
                  disabled={currentStep === demoSteps.length - 1}
                  className="bg-primary hover:bg-primary/90"
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
