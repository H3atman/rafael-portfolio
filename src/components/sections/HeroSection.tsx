"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { websiteConfig } from "@/lib/data";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useCallback } from "react";
import { Container } from "@/components/ui/container";

// Debounce function to limit how often a function can be called
function debounce(func: (args: unknown[]) => void, wait: number) {
  let timeout: NodeJS.Timeout;
  return function(...args: unknown[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(args), wait);
  };
}

export default function HeroSection() {
  // Memoize the observer callback to prevent recreating it on each render
  const handleIntersection = useCallback(() => {
    // Empty callback for future functionality
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      rootMargin: '-20% 0% -80% 0%',
      threshold: 0
    };
    
    // Create a debounced observer to reduce performance impact
    const debouncedHandler = debounce(handleIntersection, 100);
    const observer = new IntersectionObserver(debouncedHandler, observerOptions);
    
    sections.forEach(section => observer.observe(section));
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
      observer.disconnect();
    };
  }, [handleIntersection]); // Only recreate the effect if the callback changes

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-20 pb-10"
    >
      <Container className="grid gap-8 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Driving Operational Excellence Through{" "}
            <span className="relative">
              <span className="text-primary">Strategic Automation</span>
              <span className="absolute -bottom-2 left-0 h-1 w-full bg-primary rounded-full"></span>
            </span>
          </h2>
          
          <div className="text-xl text-muted-foreground max-w-[600px]">
            Hello, I&apos;m <span className="font-semibold text-foreground">{websiteConfig.name}</span>, an{" "}
            <HoverCard>
              <HoverCardTrigger asChild>
                <span className="cursor-help border-b border-dotted border-primary text-foreground">
                  {websiteConfig.title}
                </span>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">What does an Operations Manager & Automation Specialist do?</h4>
                  <p className="text-sm">
                    I lead operational strategy while implementing technical automation solutions that streamline workflows, optimize communication systems, and enhance data-driven decision making to maximize efficiency and reliability.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>{" "}
            with a proven track record of transforming business operations through technical innovation and process optimization.
          </div>
          
          <div className="space-y-3">
            <p className="font-medium">Expertise:</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-sm py-1 px-3">Custom Automation Development</Badge>
              <Badge variant="outline" className="text-sm py-1 px-3">Client Communication Systems</Badge>
              <Badge variant="outline" className="text-sm py-1 px-3">CRM & Airtable Integration</Badge>
              <Badge variant="outline" className="text-sm py-1 px-3">PowerBI Data Visualization</Badge>
              <Badge variant="outline" className="text-sm py-1 px-3">Data Processing Automation</Badge>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="relative overflow-hidden group">
              <Link href="#contact">
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute inset-0 bg-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#booking">
                <span className="relative z-10">Book a Call</span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={websiteConfig.resumeLink} target="_blank" rel="noopener noreferrer">
                View Resume
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden">
          {/* Placeholder for hero image - can be replaced with an actual image or animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background border border-border rounded-lg backdrop-blur-sm">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-16 h-16 text-primary"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="p-4 rounded-lg bg-background/80 border border-border">
                    <div className="text-3xl font-bold text-primary">75%</div>
                    <div className="text-sm text-muted-foreground">Reduction in manual data entry with CRM automation</div>
                  </div>
                  <div className="p-4 rounded-lg bg-background/80 border border-border">
                    <div className="text-3xl font-bold text-primary">90%</div>
                    <div className="text-sm text-muted-foreground">Reduction in manual data processes</div>
                  </div>
                  <div className="p-4 rounded-lg bg-background/80 border border-border">
                    <div className="text-3xl font-bold text-primary">80%</div>
                    <div className="text-sm text-muted-foreground">Increased decision-making efficiency</div>
                  </div>
                  <div className="p-4 rounded-lg bg-background/80 border border-border">
                    <div className="text-3xl font-bold text-primary">5%</div>
                    <div className="text-sm text-muted-foreground">Annual decrease in crime rates through data analysis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}