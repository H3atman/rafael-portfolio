"use client";

import { Separator } from "@/components/ui/separator";
import { projectsData } from "@/lib/data";
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
import { Container } from "@/components/ui/container";

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
            <Card key={index} className="flex flex-col h-full overflow-hidden group">
              <div className="relative h-48 overflow-hidden bg-muted">
                {/* Project image placeholder - replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/50 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="32" 
                      height="32" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-primary"
                    >
                      <path d="M12.5 3h5a2 2 0 0 1 2 2v6h-3.5" />
                      <path d="M18.5 21H5.5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5" />
                      <path d="M7.5 16h9" />
                      <path d="M7.5 12h4.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <CardHeader className="flex-1">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-2 h-10">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
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
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden w-full max-w-md mx-auto">
          <Carousel className="w-full max-w-md">
            <CarouselContent>
              {projectsData.map((project, index) => (
                <CarouselItem key={index}>
                  <Card className="h-full">
                    <div className="relative h-40 overflow-hidden bg-muted">
                      {/* Project image placeholder */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/50 flex items-center justify-center">
                        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="28" 
                            height="28" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="text-primary"
                          >
                            <path d="M12.5 3h5a2 2 0 0 1 2 2v6h-3.5" />
                            <path d="M18.5 21H5.5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5" />
                            <path d="M7.5 16h9" />
                            <path d="M7.5 12h4.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="line-clamp-3">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
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