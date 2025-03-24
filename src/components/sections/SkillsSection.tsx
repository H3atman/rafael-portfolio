"use client";

import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillsData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { useEffect, useRef, useState } from "react";
import { AnimatedProgress } from "@/components/ui/animated-progress";

export default function SkillsSection() {
  // Animation states for each tab
  const [animateProgramming, setAnimateProgramming] = useState(false);
  const [animateAutomation, setAnimateAutomation] = useState(false);
  const [animateOther, setAnimateOther] = useState(false);
  
  // Reference to the section for intersection observer
  const sectionRef = useRef<HTMLElement>(null);

  // Handle tab change
  const handleTabChange = (value: string) => {
    // Reset and trigger animation for the selected tab
    if (value === "programming") {
      setAnimateProgramming(false);
      // Short delay to ensure state is reset before animating
      setTimeout(() => setAnimateProgramming(true), 50);
      setAnimateAutomation(false);
      setAnimateOther(false);
    } else if (value === "automation") {
      setAnimateAutomation(false);
      setTimeout(() => setAnimateAutomation(true), 50);
      setAnimateProgramming(false);
      setAnimateOther(false);
    } else if (value === "other") {
      setAnimateOther(false);
      setTimeout(() => setAnimateOther(true), 50);
      setAnimateProgramming(false);
      setAnimateAutomation(false);
    }
  };

  // Setup intersection observer to trigger animations when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Initial animation for the default tab
          setAnimateProgramming(true);
        } else {
          // Reset animations when not in view
          setAnimateProgramming(false);
          setAnimateAutomation(false);
          setAnimateOther(false);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <Container>
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
            Technical Skills
          </h2>
          <Separator className="w-20 h-1 bg-primary rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-[800px]">
            My expertise in AI-powered automation and system integration enables me to create intelligent, scalable solutions that transform business operations and drive exceptional client experiences.
          </p>
        </div>

        <Tabs defaultValue="programming" className="w-full max-w-4xl mx-auto" onValueChange={handleTabChange}>
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="programming">Technical Skills</TabsTrigger>
            <TabsTrigger value="automation">AI & Automation</TabsTrigger>
            <TabsTrigger value="other">Business Skills</TabsTrigger>
          </TabsList>
          
          <TabsContent value="programming" className="space-y-8">
            <div className="grid gap-6">
              {skillsData.programmingLanguages.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <AnimatedProgress 
                    value={skill.level} 
                    delay={200 + index * 200}
                    animate={animateProgramming}
                    className="h-2"
                  />
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <h3 className="text-lg font-medium mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                <Badge className="px-3 py-1">API Development</Badge>
                <Badge className="px-3 py-1">Workflow Design</Badge>
                <Badge className="px-3 py-1">ETL Processes</Badge>
                <Badge className="px-3 py-1">JavaScript</Badge>
                <Badge className="px-3 py-1">Next.js</Badge>
                <Badge className="px-3 py-1">Python</Badge>
                <Badge className="px-3 py-1">HTML/CSS</Badge>
                <Badge className="px-3 py-1">Database Design</Badge>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="automation" className="space-y-8">
            <div className="grid gap-6">
              {skillsData.automationTools.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <AnimatedProgress 
                    value={skill.level} 
                    delay={200 + index * 200}
                    animate={animateAutomation}
                    className="h-2"
                  />
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <h3 className="text-lg font-medium mb-4">Software & Platforms</h3>
              <div className="flex flex-wrap gap-3">
                <Badge className="px-3 py-1">GoHighLevel CRM</Badge>
                <Badge className="px-3 py-1">Copilot Client Portal</Badge>
                <Badge className="px-3 py-1">Airtable</Badge>
                <Badge className="px-3 py-1">OpenAI & Claude</Badge>
                <Badge className="px-3 py-1">Email Marketing Systems</Badge>
                <Badge className="px-3 py-1">Slack</Badge>
                <Badge className="px-3 py-1">Microsoft 365</Badge>
                <Badge className="px-3 py-1">Google Workspace</Badge>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="other" className="space-y-8">
            <div className="grid gap-6">
              {skillsData.otherSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <AnimatedProgress 
                    value={skill.level} 
                    delay={200 + index * 200}
                    animate={animateOther}
                    className="h-2"
                  />
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <h3 className="text-lg font-medium mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                <Badge className="px-3 py-1">Critical Thinking</Badge>
                <Badge className="px-3 py-1">Problem-solving</Badge>
                <Badge className="px-3 py-1">Client Relationship Management</Badge>
                <Badge className="px-3 py-1">Cross-functional Team Leadership</Badge>
                <Badge className="px-3 py-1">Process Optimization</Badge>
                <Badge className="px-3 py-1">Redesign</Badge>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 p-6 bg-muted/30 rounded-lg border border-border max-w-4xl mx-auto">
          <h3 className="text-xl font-medium mb-4">My AI Automation Philosophy</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-primary"
                >
                  <path d="M12 2v4" />
                  <path d="M12 18v4" />
                  <path d="m4.93 4.93 2.83 2.83" />
                  <path d="m16.24 16.24 2.83 2.83" />
                  <path d="M2 12h4" />
                  <path d="M18 12h4" />
                  <path d="m4.93 19.07 2.83-2.83" />
                  <path d="m16.24 7.76 2.83-2.83" />
                </svg>
              </div>
              <h4 className="font-medium">AI-Enhanced Processes</h4>
              <p className="text-sm text-muted-foreground">I strategically integrate AI to enhance existing workflows, focusing first on optimizing the process to ensure maximum efficiency with minimal complexity.</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-primary"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
              </div>
              <h4 className="font-medium">Intelligent Integration</h4>
              <p className="text-sm text-muted-foreground">I create seamless connections between business systems like CRMs, Airtable, and AI tools to enable data flow that powers intelligent business decisions and automation.</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-primary"
                >
                  <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                  <path d="M10 2c1 .5 2 2 2 5" />
                </svg>
              </div>
              <h4 className="font-medium">Human-Centered Design</h4>
              <p className="text-sm text-muted-foreground">I design AI-powered solutions with a focus on the human experience, ensuring systems are intuitive, reliable, and enhance rather than replace human capabilities.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}