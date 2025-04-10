
import { useEffect } from 'react';
import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import SkillsSection from "@/components/home/SkillsSection";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import GamePreview from "@/components/home/GamePreview";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-luxury-navy text-white">
      <AnimatedBackground />
      <Navbar />
      
      <main>
        <Hero />
        <AboutPreview />
        <SkillsSection />
        <PortfolioPreview />
        <GamePreview />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
