import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    size: number;
    color: string;
    alpha: number;
    speedX: number;
    speedY: number;
  }>>([]);
  const mousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Initialize canvas
    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Create particles
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000);
      particlesRef.current = Array(particleCount).fill(0).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        color: `hsl(${Math.random() * 60 + 200}, 80%, 60%)`,
        alpha: Math.random() * 0.4 + 0.1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25
      }));
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach(p => {
        // Add mouse influence
        const dx = mousePosRef.current.x - p.x;
        const dy = mousePosRef.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Only apply force when mouse is nearby
        if (distance < 150) {
          const force = (150 - distance) * 0.0001;
          p.speedX += dx * force;
          p.speedY += dy * force;
        }

        // Apply friction
        p.speedX *= 0.99;
        p.speedY *= 0.99;

        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Boundary check
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });

      // Draw connections (same as before)
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(200, 200, 255, ${0.2 - distance/600})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    // Initialize and start
    initCanvas();
    animate();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', initCanvas);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', initCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-[-1] pointer-events-none"
    />
  );
};

export default AnimatedBackground;