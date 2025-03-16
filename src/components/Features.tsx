
import { 
  CloudCog, 
  PuzzleIcon, 
  RefreshCw, 
  Layers, 
  Share2, 
  ZapIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  index: number;
}) => {
  return (
    <div 
      className="p-6 rounded-xl border border-border bg-white shadow-card hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <span className="text-primary">{icon}</span>
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <CloudCog size={24} />,
      title: "Cloud-Based Architecture",
      description: "Seamlessly scale to meet your needs with our robust cloud infrastructure, supporting enterprise-level usage."
    },
    {
      icon: <PuzzleIcon size={24} />,
      title: "Modular Integration",
      description: "Easily integrate with your existing LMS, recruitment platforms, or development environments through our API."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Regular Updates",
      description: "Our platform continuously evolves with new problem types, domains, and enhanced AI capabilities through regular updates."
    },
    {
      icon: <Layers size={24} />,
      title: "Customizable Frameworks",
      description: "Target specific programming languages, frameworks, concepts or difficulty levels based on your requirements."
    },
    {
      icon: <Share2 size={24} />,
      title: "Collaborative Features",
      description: "Share, review and collaborate on problems with team members, with built-in version control and feedback mechanisms."
    },
    {
      icon: <ZapIcon size={24} />,
      title: "Blazing Fast Generation",
      description: "Generate comprehensive problems in seconds—not hours—while maintaining exceptional quality and accuracy."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 stagger-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Streamline Your Problem Creation Workflow
        </h2>
        <p className="text-muted-foreground text-lg">
          Kodey does more than just generate problems—it transforms 
          your entire workflow for maximum efficiency and quality.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
