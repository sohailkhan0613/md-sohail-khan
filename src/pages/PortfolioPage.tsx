
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef, useState } from "react";
import { ExternalLink, Github, Code } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  longDescription: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Chatbot Platform",
    category: "Kore.ai & Azure",
    description: "Development of conversational chatbots leveraging advanced AI capabilities.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&w=800&q=80",
    longDescription: "Designed and implemented a comprehensive chatbot platform using Kore.ai that powers multiple enterprise-level virtual assistants. The platform features advanced NLP capabilities, multi-language support, and seamless integration with various business systems. Deployed on Azure for high availability and scalability, this solution has significantly improved customer engagement metrics while reducing support costs.",
    technologies: ["Kore.ai", "Azure", "Node.js", "NLP", "Machine Learning", "REST APIs"],
    demoLink: "#",
  },
  {
    id: 2,
    title: "IT & HR Automation",
    category: "Node.js & Cloud",
    description: "Streamlining internal processes with automation workflows.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&w=800&q=80",
    longDescription: "Developed a comprehensive automation system for internal IT and HR processes, resulting in a 40% reduction in manual workload. The solution includes workflow automation for employee onboarding, support ticket routing, and resource allocation. Built with Node.js and deployed on cloud infrastructure, the system integrates with existing enterprise software through custom APIs.",
    technologies: ["Node.js", "Express", "MongoDB", "Azure Functions", "RPA", "REST APIs"],
    githubLink: "https://github.com/sohailkhan0613",
  },
  {
    id: 3,
    title: "Multi-lingual NLP Engine",
    category: "Python & NLP",
    description: "Building intelligent chatbots for clients including eBay and Yahoo.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&w=800&q=80",
    longDescription: "Created a sophisticated NLP engine that powers multi-lingual chatbots for major clients including eBay and Yahoo. The engine supports 10+ languages with high accuracy intent recognition and entity extraction. Implemented advanced conversational flows with context awareness and sentiment analysis to enhance user experience across various channels including web, mobile, and messaging platforms.",
    technologies: ["Python", "TensorFlow", "NLP", "Docker", "Kubernetes", "Microservices"],
    githubLink: "https://github.com/sohailkhan0613",
    demoLink: "#",
  },
  {
    id: 4,
    title: "Enterprise Knowledge Base",
    category: "Full Stack",
    description: "Centralized information system with AI-powered search capabilities.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&w=800&q=80",
    longDescription: "Architected and built a comprehensive knowledge management system that serves as the central repository for enterprise information. The platform features AI-powered search, dynamic content generation, and advanced analytics. Integration with existing systems ensures data consistency while providing a unified interface for users across the organization.",
    technologies: ["React", "Node.js", "ElasticSearch", "GraphQL", "PostgreSQL", "Docker"],
    githubLink: "https://github.com/sohailkhan0613",
  },
  {
    id: 5,
    title: "Financial Services Chatbot",
    category: "AI & FinTech",
    description: "Secure virtual assistant for banking and financial services.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&w=800&q=80",
    longDescription: "Developed a highly secure chatbot for financial services that assists users with account management, transaction history, and financial advice. The solution implements bank-grade security protocols while providing a conversational interface that handles complex financial queries. Deployed across multiple channels including mobile apps and web portals to serve thousands of users daily.",
    technologies: ["Kore.ai", "Node.js", "OAuth 2.0", "Banking APIs", "Azure", "Security Protocols"],
    demoLink: "#",
  },
  {
    id: 6,
    title: "Healthcare Assistant",
    category: "Healthcare & AI",
    description: "AI-powered healthcare assistant for patient engagement.",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&w=800&q=80",
    longDescription: "Created an AI-powered healthcare assistant that helps patients manage appointments, medication reminders, and general health inquiries. The system integrates with electronic health records while maintaining strict HIPAA compliance. Natural language processing capabilities allow the assistant to understand complex medical queries and provide appropriate responses or escalate to human staff when necessary.",
    technologies: ["Python", "Healthcare APIs", "HIPAA Compliance", "NLP", "Azure Health", "React Native"],
    githubLink: "https://github.com/sohailkhan0613",
  },
];

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const categories = ["All", ...Array.from(new Set(projects.map(project => project.category)))];
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-luxury-navy text-white">
      <AnimatedBackground />
      <Navbar />
      
      <main className="pt-24 pb-16 relative">
        {/* Video Background */}
        <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover flip-in-x">
            <source src="/4167404-uhd_2160_2880_24fps.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-luxury opacity-30 scale-in"></div>
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-luxury-navy to-transparent fade-in"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 flip-in-x">
              My <span className="text-luxury-gold swing">Portfolio</span>
            </h1>
            <p className="text-lg text-luxury-lightGray max-w-2xl mx-auto mb-12 fade-in">
              Explore my featured projects showcasing expertise in AI, chatbot development,
              and innovative software solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12 zoom-in">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedCategory === category
                      ? "bg-luxury-gold text-luxury-navy pulse"
                      : "bg-luxury-navy/50 text-white hover:bg-luxury-gold/20 scale-in"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Portfolio Grid */}
        <section
          ref={sectionRef}
          className="py-12 px-6 zoom-in"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group luxury-card overflow-hidden cursor-pointer transition-all duration-700 delay-${
                    index * 100
                  } transform ${
                    isVisible
                      ? "opacity-100 translate-y-0 scale-in"
                      : "opacity-0 translate-y-10"
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden h-56 mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 flip-in-x"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy to-transparent fade-in"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-luxury-gold/90 text-luxury-navy text-xs font-medium rounded-full swing">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mt-1 mb-2 rubber-band">
                      {project.title}
                    </h3>
                    <p className="text-luxury-lightGray text-sm mb-4 fade-in">
                      {project.description}
                    </p>
                    <button
                      className="text-luxury-gold text-sm inline-flex items-center hover:underline zoom-in"
                    >
                      View Details
                      <ExternalLink size={14} className="ml-1 rotate-in" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            ></div>
            
            <div className="relative bg-luxury-navy border border-luxury-gold/30 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-luxury-lightGray hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <div className="p-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-serif font-bold text-luxury-gold mb-2">
                    {selectedProject.title}
                  </h2>
                  <span className="inline-block px-3 py-1 bg-luxury-gold/20 text-luxury-gold text-sm rounded-full mb-4">
                    {selectedProject.category}
                  </span>
                </div>
                
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-white mb-2">Project Overview</h3>
                  <p className="text-luxury-lightGray">
                    {selectedProject.longDescription}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-white mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-luxury-navy border border-luxury-purple/30 text-luxury-purple text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#24292e] text-white rounded hover:bg-[#24292e]/90 transition-colors"
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </a>
                  )}
                  
                  {selectedProject.demoLink && (
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-luxury-gold text-luxury-navy rounded hover:bg-luxury-gold/90 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;
