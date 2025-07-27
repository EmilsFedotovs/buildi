import { useEffect, useState } from 'react';

const ScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Floating geometric shapes */}
      <div 
        className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full animate-float"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div 
        className="absolute top-40 right-20 w-24 h-24 bg-steel-blue/10 rounded-lg rotate-12 animate-float"
        style={{ 
          transform: `translateY(${scrollY * 0.15}px) rotate(${12 + scrollY * 0.02}deg)`,
          animationDelay: '2s'
        }}
      />
      <div 
        className="absolute top-96 left-1/4 w-16 h-16 bg-primary/8 rounded-full animate-float"
        style={{ 
          transform: `translateY(${scrollY * 0.2}px)`,
          animationDelay: '4s'
        }}
      />
      <div 
        className="absolute bottom-40 right-10 w-40 h-40 bg-accent/3 rounded-full animate-float"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      />
      <div 
        className="absolute bottom-96 left-16 w-28 h-28 bg-steel-blue/8 rounded-lg -rotate-12 animate-float"
        style={{ 
          transform: `translateY(${scrollY * -0.12}px) rotate(${-12 - scrollY * 0.01}deg)`,
          animationDelay: '1s'
        }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          transform: `translateY(${scrollY * 0.05}px)`
        }}
      />
    </div>
  );
};

export default ScrollAnimation;