import { useEffect, useState, useRef } from "react";
import { useMotionValue, useTransform, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();
  const videoOpacity = useTransform(scrollY, [0, 400], [1, 0.5]);
  const videoScale = useTransform(scrollY, [0, 400], [1, 1.1]);

  useEffect(() => {
    setLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 40;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 40;
      setParallax({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" ref={heroRef}>
      {/* Animated background video */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ opacity: videoOpacity, scale: videoScale }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/placeholder.svg"
        >
          <source src="/luxury-hero-bg.mp4" type="video/mp4" />
        </video>
      </motion.div>
      {/* ...existing code... */}
      <AnimatePresence>
        {loaded && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="absolute left-1/4 top-1/3 w-64 h-64 bg-luxury-gold/20 rounded-full filter blur-3xl"
              style={{ x: parallax.x, y: parallax.y }}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, type: "spring" }}
            />
            <motion.div
              className="absolute right-1/4 bottom-1/3 w-80 h-80 bg-luxury-purple/10 rounded-full filter blur-3xl"
              style={{ x: -parallax.x, y: -parallax.y }}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, type: "spring" }}
            />
            {/* Sparkles */}
            {[...Array(18)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-luxury-gold opacity-60 pointer-events-none"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.5 + i * 0.07, repeat: Infinity, repeatType: "reverse" }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate={loaded ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: -40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-serif font-bold mb-6"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-luxury-gold via-luxury-purple to-luxury-gold bg-clip-text text-transparent animate-gradient-move">Mohammed Sohail Khan</span>
              <span className="text-white"> — I Build Powerful Solutions</span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-luxury-lightGray mb-8 md:mb-12"
            >
              I'm a Senior Software Engineer specializing in AI and automation with a passion
              for creating conversational chatbots and enterprise solutions.
              Open to full-time roles and freelance opportunities.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }} whileTap={{ scale: 0.96 }}>
                <Link
                  to="/portfolio"
                  className="btn-primary inline-flex items-center"
                >
                  View My Work
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }} whileTap={{ scale: 0.96 }}>
                <Link
                  to="/contact"
                  className="btn-outline inline-flex items-center"
                >
                  Let's Connect
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="mt-8"
            >
              <Link
                to="/for-recruiters"
                className="inline-flex items-center text-luxury-gold hover:text-luxury-purple transition-colors duration-300"
              >
                <Briefcase className="mr-2" size={18} />
                Recruiter? View my specialized portfolio
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Down arrow animation */}
      <AnimatePresence>
        {loaded && (
          <motion.div
            className="absolute bottom-8 left-0 right-0 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              className="animate-bounce"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 10, delay: 1.2 }}
            >
              <div className="w-1 h-16 bg-gradient-to-b from-luxury-gold to-transparent rounded-full mx-auto"></div>
              <div className="w-3 h-3 border-r-2 border-b-2 border-luxury-gold transform rotate-45 mx-auto -mt-3"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
