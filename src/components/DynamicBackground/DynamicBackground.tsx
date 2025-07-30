import { useEffect, useRef } from 'react';
import anime from 'animejs';
import './DynamicBackground.css';

const randomFloat = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const DynamicBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create particles
    const particleCount = 30;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      containerRef.current.appendChild(particle);
      particles.push(particle);
    }

    // Create animated shapes
    const shapes = ['circle', 'triangle', 'square'];
    const shapeElements = [];
    
    for (let i = 0; i < 8; i++) {
      const shape = document.createElement('div');
      shape.className = `shape ${shapes[i % shapes.length]}`;
      containerRef.current.appendChild(shape);
      shapeElements.push(shape);
    }

    // Particle animations
    particles.forEach((particle, i) => {
      animationRef.current.push(
        anime({
          targets: particle,
          translateX: () => randomInt(-100, 100) + '%',
          translateY: () => randomInt(-100, 100) + '%',
          scale: () => randomFloat(0.5, 2),
          opacity: () => randomFloat(0.2, 0.8),
          duration: () => randomInt(5000, 15000),
          easing: 'easeInOutQuad',
          direction: 'alternate',
          loop: true
        })
      );
    });

    // Shape animations
    shapeElements.forEach((shape, i) => {
      animationRef.current.push(
        anime({
          targets: shape,
          translateX: () => randomInt(-20, 20) + 'vw',
          translateY: () => randomInt(-20, 20) + 'vh',
          rotate: () => randomInt(0, 360),
          scale: () => randomFloat(0.5, 1.5),
          duration: () => randomInt(8000, 20000),
          easing: 'easeInOutSine',
          direction: 'alternate',
          loop: true,
          delay: i * 500
        })
      );
    });

    // Background color animation removed - replaced by CSS animation

    return () => {
      animationRef.current.forEach(anim => anim.pause());
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="bounce">
      <div 
        ref={containerRef}
        className="dynamic-background"
      />
    </div>
  );
};

export default DynamicBackground;
