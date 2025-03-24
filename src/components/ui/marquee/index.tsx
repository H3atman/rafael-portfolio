"use client";

import React, { useEffect, useRef } from 'react';
import styles from './marquee.module.css';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // Speed in pixels per second
  pauseOnHover?: boolean;
  reverse?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = 50,
  pauseOnHover = true,
  reverse = false,
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const containerElement = containerRef.current;
    
    if (!marqueeElement || !containerElement) return;
    
    // Clone the content to ensure continuous scrolling
    const contentClone = marqueeElement.cloneNode(true);
    containerElement.appendChild(contentClone);
    
    // Calculate animation duration based on content width and speed
    const calculateDuration = () => {
      const contentWidth = marqueeElement.offsetWidth;
      return contentWidth / speed;
    };
    
    // Set initial animation duration
    const contentElements = containerElement.children;
    Array.from(contentElements).forEach((el) => {
      (el as HTMLElement).style.animationDuration = `${calculateDuration()}s`;
      (el as HTMLElement).style.animationDirection = reverse ? 'reverse' : 'normal';
    });
    
    // Handle resize to adjust animation duration
    const handleResize = () => {
      const newDuration = calculateDuration();
      Array.from(contentElements).forEach((el) => {
        (el as HTMLElement).style.animationDuration = `${newDuration}s`;
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [speed, reverse]);

  return (
    <div 
      className={styles.marqueeContainer} 
      ref={containerRef}
      style={{ 
        '--pause-on-hover': pauseOnHover ? 'paused' : 'running',
        '--not-pause-on-hover': pauseOnHover ? 'running' : 'paused',
      } as React.CSSProperties}
    >
      <div className={styles.marquee} ref={marqueeRef}>
        {children}
      </div>
    </div>
  );
};

export default Marquee;