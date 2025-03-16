
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#" },
        { name: "API", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Release Notes", href: "#" },
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "For Educators", href: "#educators" },
        { name: "For Recruiters", href: "#recruiters" },
        { name: "For Developers", href: "#developers" },
        { name: "Enterprise", href: "#" },
        { name: "Integrations", href: "#" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Contact", href: "#" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Security", href: "#" },
        { name: "Compliance", href: "#" },
      ]
    }
  ];
  
  const socialLinks = [
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Github size={18} />, href: "#", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Mail size={18} />, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="container px-6 md:px-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold mb-5">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">CF</span>
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                CodeForge
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Transforming coding problem creation and validation with advanced AI technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/30 transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((section, sectionIndex) => (
            <div key={sectionIndex} className={sectionIndex === 3 ? "col-span-1" : "col-span-1"}>
              <h3 className="font-medium mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} CodeForge AI. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
