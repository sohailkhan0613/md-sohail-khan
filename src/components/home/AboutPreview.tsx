
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

      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-luxury-purple/20 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-luxury-gold/10 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title text-luxury-gold">About Me</h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto mt-4 mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            <div
              className={`md:col-span-2 transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="rounded-lg overflow-hidden border-2 border-luxury-gold relative">
                <img
                  src="/lovable-uploads/9b01988d-f0ff-4503-b78e-889e2c4fd55f.png"
                  alt="Mohd Sohail Khan"
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy to-transparent opacity-50"></div>
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
                className="inline-flex items-center text-luxury-gold hover:underline"
              >
                Learn more about me
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
