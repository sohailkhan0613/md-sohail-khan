import { useEffect } from 'react';
import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import SkillsSection from "@/components/home/SkillsSection";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import GamePreview from "@/components/home/GamePreview";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen bg-luxury-navy text-white"
    >
      <AnimatedBackground />
      <Navbar />
      <div className="fade-in">
        <main>
          <Hero />
          <AboutPreview />
          <SkillsSection />
          <PortfolioPreview />
          <GamePreview />
        </main>
      </div>
      <Footer />
    </motion.div>
  );
};

export default HomePage;
