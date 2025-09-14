import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Home, User, Code, Briefcase, Mail, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
          scrolled 
            ? 'card-gradient backdrop-blur-lg border border-portfolio-primary/30 glow-primary' 
            : 'bg-transparent'
        }`}
      >
        {navigationItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-portfolio-primary text-white glow-primary'
                  : 'text-portfolio-text-muted hover:text-portfolio-primary hover:bg-portfolio-primary/10'
              }`}
            >
              <IconComponent className="w-4 h-4 mr-2" />
              {item.label}
            </Button>
          );
        })}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Menu Button */}
        <Button
          className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 ${
            scrolled 
              ? 'card-gradient border border-portfolio-primary/30 glow-primary' 
              : 'bg-portfolio-primary/20 backdrop-blur-sm'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-portfolio-text" />
          ) : (
            <Menu className="w-6 h-6 text-portfolio-text" />
          )}
        </Button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-portfolio-bg-start/95 backdrop-blur-lg">
            <div className="flex flex-col items-center justify-center min-h-screen gap-6">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    size="lg"
                    onClick={() => scrollToSection(item.id)}
                    className={`px-8 py-4 rounded-full text-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-portfolio-primary text-white glow-primary'
                        : 'text-portfolio-text-muted hover:text-portfolio-primary hover:bg-portfolio-primary/10'
                    }`}
                  >
                    <IconComponent className="w-6 h-6 mr-3" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <Button
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full bg-portfolio-primary hover:bg-portfolio-secondary text-white glow-primary transition-all duration-300 ${
          scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        onClick={() => scrollToSection('home')}
      >
        <Home className="w-6 h-6" />
      </Button>
    </>
  );
};

export default Navigation;