"use client";

import { Separator } from "@/components/ui/separator";
import { testimonialsData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { Container } from "@/components/ui/container";

export default function TestimonialsSection() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    api.on("settle", handleSelect);

    return () => {
      api.off("select", handleSelect);
      api.off("settle", handleSelect);
    };
  }, [api]);

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <Container>
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
            Client Testimonials
          </h2>
          <Separator className="w-20 h-1 bg-primary rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-[800px]">
            What clients and colleagues say about my automation expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-primary/10 bg-gradient-to-br from-primary/5 to-background">
                    <CardContent className="p-6 md:p-10">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="relative">
                          <Avatar className="h-20 w-20 border-4 border-background">
                            <AvatarFallback className="bg-primary/10 text-primary text-xl">
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          </Avatar>
                          <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-background">
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
                            >
                              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                            </svg>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-lg md:text-xl italic">"{testimonial.content}"</p>
                          <div className="pt-4">
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex items-center justify-center mt-8 gap-2">
              <CarouselPrevious className="static transform-none mx-2" />
              <div className="flex gap-2">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2.5 rounded-full transition-all ${
                      current === index ? "w-8 bg-primary" : "w-2.5 bg-primary/20"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <CarouselNext className="static transform-none mx-2" />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="p-6 rounded-lg border border-border">
            <h3 className="text-xl font-medium mb-4">Ready to Automate Your Processes?</h3>
            <p className="text-muted-foreground mb-2">
              Join these satisfied clients and experience the benefits of custom automation solutions.
            </p>
            <div className="flex justify-center mt-6">
              <div className="flex -space-x-4">
                {testimonialsData.map((testimonial, index) => (
                  <Avatar key={index} className="border-2 border-background h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  </Avatar>
                ))}
                <div className="flex items-center justify-center h-12 w-12 rounded-full border-2 border-background bg-muted text-muted-foreground text-sm font-medium">
                  +10
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 