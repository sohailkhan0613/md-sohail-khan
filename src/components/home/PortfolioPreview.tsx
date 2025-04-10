
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Chatbot Platform",
    category: "Kore.ai & Azure",
    description: "Development of conversational chatbots leveraging advanced AI capabilities.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&w=600&q=80",
  },
  {
    id: 2,
    title: "IT & HR Automation",
    category: "Node.js & Cloud",
    description: "Streamlining internal processes with automation workflows.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&w=600&q=80",
  },
  {
    id: 3,
    title: "Multi-lingual NLP Engine",
    category: "Python & NLP",
    description: "Building intelligent chatbots for clients including eBay and Yahoo.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&w=600&q=80",
  },
];

const PortfolioPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-luxury-navy relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-luxury-purple/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-gold/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-luxury-gold">Featured Projects</h2>
          <div className="w-20 h-1 bg-luxury-gold mx-auto mt-4 mb-6"></div>
          <p className="text-luxury-lightGray max-w-2xl mx-auto">
            A selection of my recent work showcasing my expertise in software development
            and AI implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group luxury-card overflow-hidden transition-all duration-700 delay-${
                index * 100
              } transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative overflow-hidden h-48 mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy to-transparent"></div>
              </div>
              <div className="p-4">
                <span className="text-sm text-luxury-gold">{project.category}</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  {project.title}
                </h3>
                <p className="text-luxury-lightGray text-sm mb-4">
                  {project.description}
                </p>
                <Link
                  to={`/portfolio`}
                  className="text-luxury-gold text-sm inline-flex items-center hover:underline"
                >
                  View Details
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/portfolio"
            className="btn-outline inline-flex items-center"
          >
            View All Projects
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
