
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const CallToAction = () => {
  const pricingFeatures = [
    "Generate unlimited coding problems",
    "Access to all four AI agents",
    "API access for integrations",
    "Custom problem templates",
    "Premium support"
  ];

  return (
    <section className="py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 opacity-70"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1/2 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl overflow-hidden shadow-xl border border-white/30 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Coding Problem Workflow?
              </h2>
              <p className="text-lg mb-8 text-muted-foreground">
                Join thousands of educators, recruiters, and developers who have 
                streamlined their workflow with CodeForge AI.
              </p>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 text-primary text-sm font-medium rounded-full px-3 py-1">
                    Getting Started Is Easy
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Sign up for a free account in seconds",
                    "Generate your first problem immediately",
                    "Explore templates or create custom specifications",
                    "Use our API to integrate with your existing systems"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="font-medium text-xs text-green-700">{index + 1}</span>
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <Button size="lg" className="w-full sm:w-auto relative overflow-hidden group">
                  <span className="relative z-10 flex items-center">
                    Get Started For Free
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={18} />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
                <p className="text-sm text-muted-foreground">
                  No credit card required. Free plan includes 10 problems per month.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12 relative">
              <div className="absolute top-0 right-0 p-3">
                <div className="text-xs font-medium bg-blue-500 text-white px-3 py-1 rounded-full shadow-sm">
                  Most Popular
                </div>
              </div>
              
              <div className="mb-8">
                <p className="text-sm font-medium text-muted-foreground mb-2">PREMIUM PLAN</p>
                <div className="flex items-end mb-2">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-muted-foreground ml-2">/month</span>
                </div>
                <p className="text-muted-foreground">
                  Everything you need for professional usage
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                {pricingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-blue-700" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button size="lg" variant="outline" className="w-full border-primary/20 hover:border-primary/40 hover:bg-primary/5">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                  View All Plans
                </span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-medium mb-6">
            Trusted by Leading Organizations
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'].map((company, index) => (
              <div key={index} className="h-12 w-32 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-6 bg-slate-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
