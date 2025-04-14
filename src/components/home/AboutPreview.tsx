
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-luxury-navy opacity-80 z-0"></div>

      {/* Background decoration with apple-style blur effect */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-luxury-purple/20 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-luxury-gold/10 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2 animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title text-luxury-gold opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]" style={{ animationDelay: "0.2s" }}>About Me</h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto mt-4 mb-6 opacity-0 animate-[scaleX_0.8s_ease-out_forwards]" style={{ animationDelay: "0.4s", transformOrigin: "center" }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            <div
              className={`md:col-span-2 transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="rounded-lg overflow-hidden border-2 border-luxury-gold relative group hover:shadow-2xl transition-all duration-500">
                <img
                  src="/lovable-uploads/08fb945f-3c3c-4250-9c4e-3665ed80f6e1.png"
                  alt="Mohd Sohail Khan"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-30"></div>
              </div>
            </div>

            <div
              className={`md:col-span-3 transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                Senior Software Engineer
              </h3>
              <p className="text-luxury-lightGray mb-6">
                With expertise in Node.js, backend development, and cloud architecture, 
                I strive to deliver cutting-edge solutions that have a tangible impact 
                on both business efficiency and customer satisfaction.
              </p>
              <p className="text-luxury-lightGray mb-6">
                I have successfully developed and deployed over 10 conversational 
                chatbots using Kore.ai and various backend platforms, hosted on Azure 
                for robust performance, stability, and security.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center text-luxury-gold hover:underline group"
              >
                <span className="transition-all duration-300 group-hover:mr-1">Learn more about me</span>
                <ArrowRight size={16} className="ml-2 transition-all duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
