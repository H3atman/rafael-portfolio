"use client";

import { Separator } from "@/components/ui/separator";
import { projectsData, Project } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { memo, useState } from "react";

// Memoized project card to prevent unnecessary re-renders
const ProjectCard = memo(({ project, index }: { project: Project, index: number }) => {
  return (
    <Card key={index} className="flex flex-col overflow-hidden group relative">
      {project.images && project.images.length > 1 ? (
        <div className="h-48 overflow-hidden bg-muted">
          <Carousel className="w-full">
            <CarouselContent>
              {project.images.map((image, imgIndex) => (
                <CarouselItem key={imgIndex}>
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={image}
                      alt={`${project.title} screenshot ${imgIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading={index < 2 && imgIndex === 0 ? "eager" : "lazy"} 
                      priority={index === 0 && imgIndex === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 size-6" />
            <CarouselNext className="right-1 size-6" />
          </Carousel>
        </div>
      ) : (
        <div className="relative h-48 overflow-hidden bg-muted">
          {/* Project image with loading priority only for the first project */}
          <Image 
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading={index < 2 ? "eager" : "lazy"} 
            priority={index === 0}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <div className="relative">
          {/* Truncated description that expands on hover */}
          <CardDescription className="line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
            {project.description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4 max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-300">
          {project.technologies.map((tech, i) => (
            <Badge key={i} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 pt-0">
        <Button asChild variant="outline" size="sm" className="flex-1">
          <Link href={project.github} target="_blank" rel="noopener noreferrer">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="mr-2"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            Code
          </Link>
        </Button>
        <Button asChild size="sm" className="flex-1">
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="mr-2"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
            Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
});

ProjectCard.displayName = 'ProjectCard';

// Memoized mobile project card
const MobileProjectCard = memo(({ project, index }: { project: Project, index: number }) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpanded(!expanded);
  };

  return (
    <Card className="relative">
      {project.images && project.images.length > 1 ? (
        <div className="h-40 overflow-hidden bg-muted">
          <Carousel className="w-full">
            <CarouselContent>
              {project.images.map((image, imgIndex) => (
                <CarouselItem key={imgIndex}>
                  <div className="relative h-40 overflow-hidden">
                    <Image 
                      src={image}
                      alt={`${project.title} screenshot ${imgIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw"
                      loading={index === 0 && imgIndex === 0 ? "eager" : "lazy"}
                      priority={index === 0 && imgIndex === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 size-6" />
            <CarouselNext className="right-1 size-6" />
          </Carousel>
        </div>
      ) : (
        <div className="relative h-40 overflow-hidden bg-muted">
          {/* Project image */}
          <Image 
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw"
            loading={index === 0 ? "eager" : "lazy"}
            priority={index === 0}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <div className="relative">
          <CardDescription className={expanded ? "" : "line-clamp-2"}>
            {project.description}
          </CardDescription>
          <button 
            onClick={toggleExpand}
            className="mt-1 text-xs text-primary flex items-center"
            aria-label={expanded ? "Show less" : "Read more"}
          >
            {expanded ? "Show less" : "Read more"}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={`ml-1 transition-transform ${expanded ? "rotate-180" : ""}`}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </CardHeader>
      <CardContent>
        {expanded && (
          <div className="flex flex-wrap gap-2 mb-4 animate-in fade-in duration-300">
            {project.technologies.map((tech, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button asChild variant="outline" size="sm" className="flex-1">
          <Link href={project.github} target="_blank" rel="noopener noreferrer">
            Code
          </Link>
        </Button>
        <Button asChild size="sm" className="flex-1">
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
});

MobileProjectCard.displayName = 'MobileProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <Container>
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
            Featured Projects
          </h2>
          <Separator className="w-20 h-1 bg-primary rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-[800px]">
            Explore my automation solutions that have delivered real-world value.
          </p>
        </div>

        {/* Desktop Project Cards Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden w-full max-w-md mx-auto">
          <Carousel className="w-full max-w-md">
            <CarouselContent>
              {projectsData.map((project, index) => (
                <CarouselItem key={index}>
                  <MobileProjectCard project={project} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="mx-2" />
              <CarouselNext className="mx-2" />
            </div>
          </Carousel>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <div className="max-w-3xl p-6 bg-muted/30 rounded-lg text-center">
            <h3 className="text-xl font-medium mb-2">Looking for a Custom Automation Solution?</h3>
            <p className="text-muted-foreground mb-6">
              I can help design and implement automation systems tailored to your specific business needs.
            </p>
            <Button asChild size="lg">
              <Link href="#contact">Discuss Your Project</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}