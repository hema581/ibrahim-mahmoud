import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Phone, MapPin, Code2, Palette, Globe, Database } from 'lucide-react';
import Navigation from '@/components/Navigation';
import heroAvatar from '@/assets/hero-avatar.jpg';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Portfolio = () => {
  const skills = [
    { name: 'HTML', icon: Code2, level: 95 },
    { name: 'CSS', icon: Palette, level: 90 },
    { name: 'JavaScript', icon: Globe, level: 88 },
    { name: 'React', icon: Database, level: 85 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Dashboard Analytics',
      description: 'A modern web application dashboard with real-time analytics and data visualization.',
      image: project1,
      technologies: ['React', 'TypeScript', 'Chart.js'],
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with payment integration and inventory management.',
      image: project2,
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Productivity application for team collaboration and project management with real-time updates.',
      image: project3,
      technologies: ['React', 'Firebase', 'Material-UI'],
      liveUrl: '#'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto section-padding text-center relative z-10">
          <div className="animate-slide-up">
            <div className="mb-8 relative inline-block">
              <img 
                src={heroAvatar} 
                alt="Ibrahim Mahmoud" 
                className="w-48 h-48 mx-auto rounded-full border-4 border-portfolio-primary glow-primary animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-portfolio-primary/20 to-portfolio-secondary/20 animate-glow"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-portfolio-text">Hello, I'm </span>
              <span className="text-gradient">Ibrahim Mahmoud</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-portfolio-text-muted mb-8 max-w-2xl mx-auto">
              Web Developer passionate about creating beautiful, functional, and user-friendly digital experiences
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-portfolio-primary hover:bg-portfolio-primary/80 text-white px-8 py-4 text-lg font-semibold glow-primary transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-portfolio-secondary text-portfolio-secondary hover:bg-portfolio-secondary/10 px-8 py-4 text-lg font-semibold"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-portfolio-accent/20 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-portfolio-secondary/20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-portfolio-primary/20 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-portfolio-bg-mid/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About Me</h2>
            <div className="w-24 h-1 bg-portfolio-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <p className="text-lg text-portfolio-text-muted leading-relaxed mb-6">
                I'm a passionate web developer with over 3 years of experience creating modern, 
                responsive websites and applications. I specialize in front-end development with 
                a strong focus on user experience and clean, maintainable code.
              </p>
              <p className="text-lg text-portfolio-text-muted leading-relaxed mb-6">
                My journey in web development started with curiosity about how websites work, 
                and it has evolved into a deep passion for crafting digital solutions that make 
                a real difference in people's lives.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-portfolio-text">
                  <MapPin className="w-5 h-5 text-portfolio-accent" />
                  <span>Available Worldwide</span>
                </div>
                <div className="flex items-center gap-2 text-portfolio-text">
                  <Mail className="w-5 h-5 text-portfolio-accent" />
                  <span>ibrahim@example.com</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="card-gradient p-6 border border-portfolio-primary/30 card-3d">
                <div className="text-3xl font-bold text-portfolio-primary mb-2">50+</div>
                <div className="text-portfolio-text-muted">Projects Completed</div>
              </Card>
              <Card className="card-gradient p-6 border border-portfolio-secondary/30 card-3d">
                <div className="text-3xl font-bold text-portfolio-secondary mb-2">3+</div>
                <div className="text-portfolio-text-muted">Years Experience</div>
              </Card>
              <Card className="card-gradient p-6 border border-portfolio-accent/30 card-3d">
                <div className="text-3xl font-bold text-portfolio-accent mb-2">100%</div>
                <div className="text-portfolio-text-muted">Client Satisfaction</div>
              </Card>
              <Card className="card-gradient p-6 border border-portfolio-primary/30 card-3d">
                <div className="text-3xl font-bold text-portfolio-primary mb-2">24/7</div>
                <div className="text-portfolio-text-muted">Support</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-portfolio-primary mx-auto rounded-full"></div>
            <p className="text-lg text-portfolio-text-muted mt-6 max-w-2xl mx-auto">
              Core technologies I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={skill.name} 
                  className="skill-card text-center group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4 relative">
                    <IconComponent className="w-12 h-12 mx-auto text-portfolio-accent group-hover:text-portfolio-primary transition-colors duration-300" />
                    <div className="absolute inset-0 bg-portfolio-primary/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-portfolio-text mb-3">{skill.name}</h3>
                  <div className="w-full bg-portfolio-bg-start rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-portfolio-primary to-portfolio-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-portfolio-text-muted">{skill.level}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-portfolio-bg-mid/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-portfolio-primary mx-auto rounded-full"></div>
            <p className="text-lg text-portfolio-text-muted mt-6 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="card-gradient border border-portfolio-primary/30 overflow-hidden card-3d group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-bg-start/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-portfolio-text mb-3 group-hover:text-portfolio-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-portfolio-text-muted mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-portfolio-primary/20 text-portfolio-primary text-sm rounded-full border border-portfolio-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-portfolio-primary hover:bg-portfolio-secondary text-white glow-primary transition-all duration-300"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    View Project
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-portfolio-primary mx-auto rounded-full"></div>
            <p className="text-lg text-portfolio-text-muted mt-6">
              Ready to start your next project? Let's create something amazing together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-portfolio-text mb-6">Let's Connect</h3>
              <p className="text-portfolio-text-muted mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll do my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 card-gradient rounded-lg border border-portfolio-primary/30">
                  <Mail className="w-6 h-6 text-portfolio-accent" />
                  <div>
                    <div className="font-semibold text-portfolio-text">Email</div>
                    <div className="text-portfolio-text-muted">ibrahim@example.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 card-gradient rounded-lg border border-portfolio-primary/30">
                  <Phone className="w-6 h-6 text-portfolio-accent" />
                  <div>
                    <div className="font-semibold text-portfolio-text">Phone</div>
                    <div className="text-portfolio-text-muted">+1 (555) 123-4567</div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10 p-3"
                  onClick={() => window.open('https://linkedin.com/in/ibrahim-mahmoud', '_blank')}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10 p-3"
                  onClick={() => window.open('https://github.com/ibrahim-mahmoud', '_blank')}
                >
                  <Github className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <Card className="card-gradient border border-portfolio-primary/30 p-8 animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-portfolio-text mb-2">Name</label>
                  <Input 
                    type="text" 
                    required
                    className="bg-portfolio-bg-start/50 border-portfolio-primary/30 text-portfolio-text placeholder:text-portfolio-text-muted focus:border-portfolio-primary"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-portfolio-text mb-2">Email</label>
                  <Input 
                    type="email" 
                    required
                    className="bg-portfolio-bg-start/50 border-portfolio-primary/30 text-portfolio-text placeholder:text-portfolio-text-muted focus:border-portfolio-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-portfolio-text mb-2">Message</label>
                  <Textarea 
                    required
                    rows={5}
                    className="bg-portfolio-bg-start/50 border-portfolio-primary/30 text-portfolio-text placeholder:text-portfolio-text-muted focus:border-portfolio-primary resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-primary hover:bg-portfolio-secondary text-white py-3 glow-primary transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-portfolio-bg-start border-t border-portfolio-primary/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-portfolio-text-muted">
            © 2025 Ibrahim Mahmoud – All Rights Reserved
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-portfolio-text-muted hover:text-portfolio-primary"
              onClick={() => window.open('https://linkedin.com/in/ibrahim-mahmoud', '_blank')}
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-portfolio-text-muted hover:text-portfolio-primary"
              onClick={() => window.open('https://github.com/ibrahim-mahmoud', '_blank')}
            >
              <Github className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-portfolio-text-muted hover:text-portfolio-primary"
              onClick={() => window.open('mailto:ibrahim@example.com')}
            >
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;