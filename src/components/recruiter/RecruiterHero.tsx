import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Download, Users } from "lucide-react";

const RESUME_PDF_URL = "/lovable-uploads/08fb945f-3c3c-4250-9c4e-3665ed80f6e1.png";

interface RecruiterHeroProps {
  animationActive: boolean;
  visitorCount: number;
}

const RecruiterHero = ({ animationActive, visitorCount }: RecruiterHeroProps) => {
  return (
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
  );
};

export default RecruiterHero; 