
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase } from "lucide-react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background decoration */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute left-1/4 top-1/3 w-64 h-64 bg-luxury-gold/20 rounded-full filter blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/3 w-80 h-80 bg-luxury-purple/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`text-4xl md:text-6xl font-serif font-bold mb-6 transition-all duration-1000 ${
              loaded
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform -translate-y-10"
            }`}
          >
            <span className="text-white">Hi, I'm </span>
            <span className="text-luxury-gold">Mohammed Sohail Khan</span>
            <span className="text-white"> — I Build Powerful Solutions</span>
          </h1>

          <p
            className={`text-xl text-luxury-lightGray mb-8 md:mb-12 transition-all duration-1000 delay-300 ${
              loaded
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          >
            I'm a Senior Software Engineer specializing in AI and automation with a passion 
            for creating conversational chatbots and enterprise solutions. 
            Open to full-time roles and freelance opportunities.
          </p>

          <div
            className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-500 ${
              loaded
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          >
            <Link
              to="/portfolio"
              className="btn-primary inline-flex items-center"
            >
              View My Work
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link
              to="/contact"
              className="btn-outline inline-flex items-center"
            >
              Let's Connect
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
          
          <div
            className={`mt-8 transition-all duration-1000 delay-700 ${
              loaded
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          >
            <Link
              to="/for-recruiters"
              className="inline-flex items-center text-luxury-gold hover:text-luxury-purple transition-colors duration-300"
            >
              <Briefcase className="mr-2" size={18} />
              Recruiter? View my specialized portfolio
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Down arrow animation */}
      <div
        className={`absolute bottom-8 left-0 right-0 flex justify-center transition-opacity duration-1000 delay-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-luxury-gold to-transparent rounded-full mx-auto"></div>
          <div className="w-3 h-3 border-r-2 border-b-2 border-luxury-gold transform rotate-45 mx-auto -mt-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
