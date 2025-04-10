
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden py-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-luxury opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-luxury-navy to-transparent"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="hero-text font-serif text-white mb-6">
            <span className="block">Hi, I'm</span>{" "}
            <span className="text-luxury-gold">Mohammed Sohail Khan</span>
          </h1>
          <p className="text-xl md:text-2xl text-luxury-lightGray max-w-2xl mx-auto mb-10">
            Senior Software Engineer specializing in building exceptional
            digital experiences with a focus on AI and web technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portfolio" className="btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn-outline">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-luxury-gold" />
      </div>
    </div>
  );
};

export default Hero;
