import { useEffect, useState } from 'react';
import "./recruiter-page-keyframes.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense, lazy } from "react";
const AnimatedBackground = lazy(() => import("@/components/AnimatedBackground"));
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
    <ErrorBoundary>
      <div className="min-h-screen bg-luxury-navy text-white">
        {/* Video Background */}
        <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover scale-in">
            <source src="/luxury-hero-bg1.mp4" type="video/mp4" />
          </video>
        </div>
        <Suspense fallback={<div className="w-full h-96 bg-gray-900 animate-pulse" />}> 
          <AnimatedBackground />
        </Suspense>
        <Navbar />
        <main className="pt-24 pb-16 relative z-10">
          <RecruiterHero animationActive={animationActive} visitorCount={visitorCount} />
          <InteractiveResume />
          <Testimonials />
          <section id="schedule-call" className="py-12 px-6 zoom-in">
            <div className="container mx-auto max-w-md">
              <ScheduleCall />
            </div>
          </section>
          <HowIBuiltThis />
        </main>
        <Footer />
        {/* Keyframes moved to recruiter-page-keyframes.css */}
      </div>
    </ErrorBoundary>
  );
};

export default RecruiterPage;
