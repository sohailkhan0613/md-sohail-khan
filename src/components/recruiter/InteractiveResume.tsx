import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "web", label: "Web Apps" },
  { id: "ai", label: "AI & NLP" },
  { id: "automation", label: "Automation" },
  { id: "database", label: "Database" },
];

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

const InteractiveResume = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills = selectedCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
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
  );
};

export default InteractiveResume; 