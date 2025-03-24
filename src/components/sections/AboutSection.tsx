import { websiteConfig } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <Container>
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
            About Me
          </h2>
          <Separator className="w-20 h-1 bg-primary rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-[800px]">
            Get to know my journey and what drives my passion for AI-powered automation and business integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <p className="text-lg">{websiteConfig.about}</p>
              
              <p className="text-lg">
                With a strong background in both software development and operations management, I specialize in leveraging AI technologies to bridge the gap between business objectives and technical implementation. I create seamless, intelligent workflows that drive efficiency, enhance client experiences, and reduce operational costs.
              </p>
              
              <p className="text-lg">
                My goal is to help businesses harness the power of AI-driven automation and system integration to eliminate repetitive tasks, streamline complex processes, and unlock new opportunities for innovation and growth.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <div className="text-4xl font-bold text-primary">6+</div>
                    <div className="text-sm font-medium">Years of Automation Experience</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <div className="text-4xl font-bold text-primary">15+</div>
                    <div className="text-sm font-medium">AI & Automation Projects Completed</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <div className="text-4xl font-bold text-primary">2000+</div>
                    <div className="text-sm font-medium">Hours Saved Through AI Automation</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <div className="text-4xl font-bold text-primary">8+</div>
                    <div className="text-sm font-medium">AI & Automation Tools Mastered</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="aspect-square rounded-xl bg-gradient-to-tr from-primary/10 via-primary/5 to-background border border-border overflow-hidden relative">
              {/* Profile image */}
              <div className="absolute inset-0 flex items-center justify-center p-16">
                <div className="relative w-full h-full overflow-hidden rounded-lg border-4 border-primary/20">
                  <Image 
                    src="/profile_pic/picofme.png" 
                    alt="Rafael Villanueva" 
                    fill 
                    className="object-cover object-center scale-80"
                    priority
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-primary/10"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 rounded-full bg-primary/20"></div>
              <div className="absolute top-1/3 left-1/4 w-6 h-6 rounded-full bg-primary/30"></div>
              <div className="absolute bottom-1/4 right-1/3 w-10 h-10 rounded-full bg-primary/15"></div>
            </div>
            
            {/* Experience cards positioned absolutely */}
            <Card className="absolute top-10 -right-6 z-10 max-w-[180px] shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-primary/10">
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
                      className="text-primary"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M7 7h10" />
                      <path d="M7 12h10" />
                      <path d="M7 17h10" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">AI Automation</div>
                    <div className="text-xs text-muted-foreground">Expert Level</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="absolute -bottom-6 left-6 z-10 max-w-[180px] shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-primary/10">
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
                      className="text-primary"
                    >
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">System Integration</div>
                    <div className="text-xs text-muted-foreground">Expert Level</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}