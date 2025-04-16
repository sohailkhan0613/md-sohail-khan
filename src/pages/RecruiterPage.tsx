
import { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Download, FileText, Users, Briefcase, Award } from "lucide-react";
import { Link } from "react-router-dom";
import ScheduleCall from "@/components/recruiter/ScheduleCall";

// Skill categories for filtering
const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "web", label: "Web Apps" },
  { id: "ai", label: "AI & NLP" },
  { id: "automation", label: "Automation" },
  { id: "database", label: "Database" },
];

// Skills with categories
const skills = [
  { name: "Python", category: "ai", level: 90 },
  { name: "JavaScript", category: "web", level: 95 },
  { name: "Node.js", category: "web", level: 90 },
  { name: "Kore.ai", category: "ai", level: 95 },
  { name: "MongoDB", category: "database", level: 85 },
  { name: "Chatbot Development", category: "ai", level: 95 },
  { name: "RESTful APIs", category: "web", level: 85 },
  { name: "Azure", category: "automation", level: 80 },
  { name: "Zapier", category: "automation", level: 75 },
];

// Timeline milestones
const milestones = [
  {
    year: "2023",
    title: "Senior Software Engineer",
    company: "Kore.ai",
    description: "Led development of enterprise-level chatbots and automation systems for major clients"
  },
  {
    year: "2022",
    title: "AI Engineer",
    company: "Tech Solutions Inc.",
    description: "Built multi-lingual NLP engines for customer service automation"
  },
  {
    year: "2020",
    title: "Full Stack Developer",
    company: "Web Innovations",
    description: "Created enterprise knowledge bases and internal tools"
  }
];

// Testimonials
const testimonials = [
  {
    name: "Nanda kumar",
    role: "Director at Kore.AI",
    content: "Sohail developed an AI chatbot for our customer service that reduced support tickets by 45%. His technical skills and problem-solving abilities are exceptional."
  },
  {
    name: "Akram khan",
    role: "Manager at Mphasis",
    content: "Working with Sohail was a game-changer for our automation needs. He delivered high-quality solutions on time and was always willing to go the extra mile."
  },
  {
    name: "Ganer, Siddhaling",
    role: "Senior Manager at Genpact",
    content: "Sohail has consistently proven to be an key resource to the team. His strong technical background and expertise have been key in troubleshooting major issues and ensuring seamless execution of tasks. His significant contribution to the GRecruit UC-2 project has had a direct impact on its success, showcasing his ability to tackle complex challenges with ease and efficiency"
  }
];

// Upload the resume PDF
const RESUME_PDF_URL = "/lovable-uploads/08fb945f-3c3c-4250-9c4e-3665ed80f6e1.png";

const RecruiterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [animationActive, setAnimationActive] = useState(false);

  // Filter skills based on selected category
  const filteredSkills = selectedCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  // Animation effect when component mounts
  useEffect(() => {
    setAnimationActive(true);
  }, []);

  // Simulate visitor count (in a real implementation this would be stored in a database)
  useEffect(() => {
    // Get stored count from localStorage
    const storedCount = localStorage.getItem('visitorCount');
    if (storedCount) {
      setVisitorCount(parseInt(storedCount, 10));
    } else {
      // Generate a random number between 500-1000 for initial visitors
      const initialCount = Math.floor(Math.random() * 500) + 500;
      setVisitorCount(initialCount);
      localStorage.setItem('visitorCount', initialCount.toString());
    }
  }, []);

  return (
    <div className="min-h-screen bg-luxury-navy text-white">
      <AnimatedBackground />
      <Navbar />
      
      <main className="pt-24 pb-16 relative z-10">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-luxury opacity-30"></div>
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-luxury-navy to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 
              className={`text-4xl md:text-5xl font-serif font-bold text-white mb-6 transition-all duration-1000 ${
                animationActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              For <span className="text-luxury-gold">Recruiters</span>
            </h1>
            <p 
              className={`text-lg text-luxury-lightGray max-w-2xl mx-auto mb-6 transition-all duration-1000 delay-200 ${
                animationActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Thank you for your interest in my profile. This page is tailored specifically for recruiters 
              and hiring managers looking for skilled Software Engineers specializing in AI and automation.
            </p>
            
            <div 
              className={`flex flex-wrap justify-center gap-4 mb-8 transition-all duration-1000 delay-400 ${
                animationActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <a 
                href="#schedule-call" 
                className="btn-primary inline-flex items-center transform hover:scale-105 transition-all duration-300"
              >
                <Calendar className="mr-2" size={18} />
                Schedule a Call
              </a>
              <a 
                href={RESUME_PDF_URL} 
                className="btn-outline inline-flex items-center transform hover:scale-105 transition-all duration-300" 
                download="Mohd_Sohail_Khan_Resume.pdf"
              >
                <Download className="mr-2" size={18} />
                Download Resume
              </a>
            </div>
            
            <div 
              className={`flex justify-center items-center mt-2 transition-all duration-1000 delay-600 ${
                animationActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <Badge variant="outline" className="text-luxury-gold border-luxury-gold/30 px-3 py-1">
                <Users className="mr-2" size={14} />
                You're visitor #{visitorCount}
              </Badge>
            </div>
          </div>
        </section>
        
        {/* Interactive Resume Section */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-serif font-bold text-luxury-gold mb-8 text-center">
              Interactive Resume
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left column: Availability & Info */}
              <div className="luxury-card flex flex-col justify-between h-full transform hover:scale-[1.01] transition-all duration-500">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Availability Status
                  </h3>
                  <div className="flex items-center mb-6">
                    <span className="h-3 w-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    <p className="text-luxury-lightGray">
                      Open to full-time roles and freelance projects
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    Quick Links
                  </h3>
                  <div className="space-y-4 mb-8">
                    <a 
                      href="https://www.linkedin.com/in/mohd-sohail-khan-8b59a41ab/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-luxury-lightGray hover:text-luxury-gold transition-colors group"
                    >
                      <FileText className="mr-2" size={18} />
                      LinkedIn Profile
                      <ArrowRight className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" size={14} />
                    </a>
                    <a 
                      href="https://github.com/sohailkhan0613"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-luxury-lightGray hover:text-luxury-gold transition-colors group"
                    >
                      <FileText className="mr-2" size={18} />
                      GitHub Repository
                      <ArrowRight className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" size={14} />
                    </a>
                    <Link 
                      to="/portfolio"
                      className="flex items-center text-luxury-lightGray hover:text-luxury-gold transition-colors group"
                    >
                      <Briefcase className="mr-2" size={18} />
                      Portfolio Projects
                      <ArrowRight className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" size={14} />
                    </Link>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Contact Information
                  </h3>
                  <p className="text-luxury-lightGray mb-1">Email: sk581470@gmail.com</p>
                  <p className="text-luxury-lightGray">Phone: +91 9381 635 201</p>
                </div>
              </div>
              
              {/* Center column: Skills with Filtering */}
              <div className="luxury-card transform hover:scale-[1.01] transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-4">
                  Technical Skills
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {skillCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-3 py-1 rounded-full text-sm transition-all duration-300 transform hover:scale-105 ${
                        selectedCategory === category.id
                          ? "bg-luxury-gold text-luxury-navy"
                          : "bg-luxury-navy/50 text-white hover:bg-luxury-gold/20"
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
                
                <div className="space-y-4">
                  {filteredSkills.map((skill, index) => (
                    <div 
                      key={skill.name} 
                      className="group"
                      style={{ 
                        opacity: 0, 
                        animation: `fadeIn 0.5s ease-out forwards ${index * 0.1}s`
                      }}
                    >
                      <div className="flex justify-between mb-1 items-center">
                        <span className="text-white font-medium group-hover:text-luxury-gold transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-luxury-gold">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-luxury-navy/50 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-luxury-gold to-luxury-purple rounded-full transition-all duration-500 group-hover:from-luxury-purple group-hover:to-luxury-gold"
                          style={{ 
                            width: "0%", 
                            animation: `growWidth 1s ease-out forwards ${index * 0.1 + 0.3}s`,
                            animationFillMode: "forwards" 
                          }}
                          data-width={`${skill.level}%`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right column: Career Timeline */}
              <div className="luxury-card transform hover:scale-[1.01] transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-6">
                  Career Milestones
                </h3>
                
                <div className="relative pl-8">
                  {/* Timeline line */}
                  <div className="absolute top-0 left-3 bottom-0 w-px bg-luxury-gold/30"></div>
                  
                  {/* Timeline items */}
                  {milestones.map((milestone, index) => (
                    <div 
                      key={index} 
                      className="mb-8 relative"
                      style={{ 
                        opacity: 0, 
                        transform: "translateY(20px)", 
                        animation: `fadeInUp 0.5s ease-out forwards ${index * 0.2}s` 
                      }}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-[-27px] top-1 w-4 h-4 rounded-full bg-luxury-gold"></div>
                      
                      <div className="mb-1">
                        <Badge className="bg-luxury-gold/20 text-luxury-gold border-none">
                          {milestone.year}
                        </Badge>
                      </div>
                      
                      <h4 className="text-lg font-bold text-white">
                        {milestone.title}
                      </h4>
                      <p className="text-luxury-purple mb-1">{milestone.company}</p>
                      <p className="text-luxury-lightGray text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-serif font-bold text-luxury-gold mb-8 text-center">
              Professional Endorsements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="luxury-card hover:border-luxury-gold/50 transition-all duration-500 group transform hover:scale-[1.02]"
                >
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <Award className="text-luxury-gold mr-2" size={20} />
                      <CardTitle className="text-white group-hover:text-luxury-gold transition-colors">
                        {testimonial.name}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-luxury-purple">
                      {testimonial.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-luxury-lightGray">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Schedule Call Section */}
        <section id="schedule-call" className="py-12 px-6">
          <div className="container mx-auto max-w-md">
            <ScheduleCall />
          </div>
        </section>
        
        {/* How I Built This Section */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <div className="luxury-card overflow-hidden transform hover:scale-[1.01] transition-all duration-500">
              <div className="p-8">
                <h2 className="text-3xl font-serif font-bold text-luxury-gold mb-6">
                  How I Built This Portfolio
                </h2>
                
                <Tabs defaultValue="tech-stack" className="w-full">
                  <TabsList className="mb-6 bg-luxury-navy/50 p-1">
                    <TabsTrigger value="tech-stack" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-luxury-navy">
                      Tech Stack
                    </TabsTrigger>
                    <TabsTrigger value="development" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-luxury-navy">
                      Development Process
                    </TabsTrigger>
                    <TabsTrigger value="challenges" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-luxury-navy">
                      Challenges & Solutions
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="tech-stack" className="space-y-4">
                    <p className="text-luxury-lightGray mb-4">
                      This portfolio website is built with a modern tech stack featuring React, TypeScript, and Tailwind CSS. Here's a breakdown of the technologies used:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-luxury-navy/50 p-4 rounded-lg hover:bg-luxury-navy/70 transition-all">
                        <h4 className="text-luxury-gold font-bold mb-2">Frontend</h4>
                        <ul className="text-luxury-lightGray space-y-2">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                            React with TypeScript
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                            Tailwind CSS for styling
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                            Shadcn UI components
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                            Lucide React for icons
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-luxury-navy/50 p-4 rounded-lg hover:bg-luxury-navy/70 transition-all">
                        <h4 className="text-luxury-gold font-bold mb-2">Animation & Interactivity</h4>
                        <ul className="text-luxury-lightGray space-y-2">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                            Custom canvas animations
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                            Interactive game components
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                            Intersection Observer API
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                            Scroll animations
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-luxury-navy/50 p-4 rounded-lg hover:bg-luxury-navy/70 transition-all">
                        <h4 className="text-luxury-gold font-bold mb-2">Contact & Forms</h4>
                        <ul className="text-luxury-lightGray space-y-2">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                            React Hook Form
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                            Form validation
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                            Toast notifications
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                            Contact routing logic
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="development" className="space-y-4">
                    <p className="text-luxury-lightGray mb-4">
                      The development process followed a user-centered approach with several phases:
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center shrink-0">
                          <span className="text-luxury-gold font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="text-white font-bold mb-1">Planning & Design</h4>
                          <p className="text-luxury-lightGray">
                            Started with wireframes and mockups to establish the luxury aesthetic and site structure. Focused on creating a responsive, engaging experience for visitors.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center shrink-0">
                          <span className="text-luxury-gold font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="text-white font-bold mb-1">Component Architecture</h4>
                          <p className="text-luxury-lightGray">
                            Built reusable UI components for consistency across the site. Implemented a modular structure with separate pages and components to maintain clean code.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center shrink-0">
                          <span className="text-luxury-gold font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="text-white font-bold mb-1">Interactive Elements</h4>
                          <p className="text-luxury-lightGray">
                            Added engaging features like the canvas background animation, interactive games, and portfolio filters to create a memorable user experience.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center shrink-0">
                          <span className="text-luxury-gold font-bold">4</span>
                        </div>
                        <div>
                          <h4 className="text-white font-bold mb-1">Testing & Optimization</h4>
                          <p className="text-luxury-lightGray">
                            Rigorously tested on different devices to ensure responsive design. Optimized code and assets for performance and accessibility.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="challenges" className="space-y-4">
                    <p className="text-luxury-lightGray mb-4">
                      Building this portfolio presented several interesting challenges that required creative solutions:
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-luxury-navy/50 p-4 rounded-lg hover:bg-luxury-navy/70 transition-all">
                        <h4 className="text-luxury-gold font-bold mb-2">Canvas Animation Performance</h4>
                        <p className="text-luxury-lightGray">
                          <span className="text-white font-medium">Challenge:</span> The particle animation background initially caused performance issues on mobile devices.
                        </p>
                        <p className="text-luxury-lightGray mt-2">
                          <span className="text-white font-medium">Solution:</span> Implemented dynamic particle count based on device capability, optimized render loops, and added debouncing for resize events.
                        </p>
                      </div>
                      
                      <div className="bg-luxury-navy/50 p-4 rounded-lg hover:bg-luxury-navy/70 transition-all">
                        <h4 className="text-luxury-gold font-bold mb-2">Responsive Game Components</h4>
                        <p className="text-luxury-lightGray">
                          <span className="text-white font-medium">Challenge:</span> Making interactive games work well across all device sizes while maintaining playability.
                        </p>
                        <p className="text-luxury-lightGray mt-2">
                          <span className="text-white font-medium">Solution:</span> Used relative sizing based on viewport, implemented touch controls for mobile, and created adaptive layouts that restructure based on screen size.
                        </p>
                      </div>
                      
                      <div className="bg-luxury-navy/50 p-4 rounded-lg hover:bg-luxury-navy/70 transition-all">
                        <h4 className="text-luxury-gold font-bold mb-2">Project Filter System</h4>
                        <p className="text-luxury-lightGray">
                          <span className="text-white font-medium">Challenge:</span> Creating a smooth, animated filtering system for portfolio projects without jumpy layout shifts.
                        </p>
                        <p className="text-luxury-lightGray mt-2">
                          <span className="text-white font-medium">Solution:</span> Implemented CSS grid with fixed heights and transition delays, used opacity for smooth item removal, and maintained consistent grid spacing regardless of filter selection.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

      {/* Add the custom animations to style */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleX {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        @keyframes growWidth {
          from { width: 0%; }
          to { width: var(--data-width, 0%); }
        }
      `}</style>
    </div>
  );
};

export default RecruiterPage;
