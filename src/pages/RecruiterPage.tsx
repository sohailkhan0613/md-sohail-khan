import { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScheduleCall from "@/components/recruiter/ScheduleCall";
import RecruiterHero from "@/components/recruiter/RecruiterHero";
import InteractiveResume from "@/components/recruiter/InteractiveResume";
import Testimonials from "@/components/recruiter/Testimonials";
import HowIBuiltThis from "@/components/recruiter/HowIBuiltThis";

const RecruiterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [animationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    setAnimationActive(true);
  }, []);

  useEffect(() => {
    const storedCount = localStorage.getItem('visitorCount');
    if (storedCount) {
      setVisitorCount(parseInt(storedCount, 10));
    } else {
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
        <RecruiterHero animationActive={animationActive} visitorCount={visitorCount} />
        <InteractiveResume />
        <Testimonials />
        <section id="schedule-call" className="py-12 px-6">
          <div className="container mx-auto max-w-md">
            <ScheduleCall />
          </div>
        </section>
        <HowIBuiltThis />
      </main>
      
      <Footer />

      <style dangerouslySetInnerHTML={{
        __html: `
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
        `
      }} />
    </div>
  );
};

export default RecruiterPage;
