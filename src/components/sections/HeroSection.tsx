"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { websiteConfig } from "@/lib/data";
import { Container } from "@/components/ui/container";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-20 pb-10"
    >
      <Container className="flex flex-col items-center text-center space-y-8 max-w-4xl">
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-sm font-mono">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            Available for new projects
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl font-mono">
            Data-Driven Operations & <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-500 dark:from-neutral-200 dark:to-neutral-500">
              Strategic Automation
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto font-mono leading-relaxed">
            I am {websiteConfig.name}, an Operations Business Manager.
            I turn complex data into actionable strategies and build intelligent automation systems
            that scale business efficiency.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button asChild size="lg" className="h-12 px-8 text-base bg-foreground text-background hover:bg-foreground/90 rounded-none border border-foreground font-mono">
            <Link href="#contact">
              Get In Touch -&gt;
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base bg-background text-foreground hover:bg-accent rounded-none border border-border font-mono">
            <Link href="#booking">
              Book a Call
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-12 border-t border-border mt-12">
          <div className="p-6 border border-border bg-background/50 backdrop-blur-sm">
            <div className="text-4xl font-bold mb-2 font-mono">85%</div>
            <div className="text-sm text-muted-foreground font-mono">Manual Work Reduced</div>
          </div>
          <div className="p-6 border border-border bg-background/50 backdrop-blur-sm">
            <div className="text-4xl font-bold mb-2 font-mono">2x</div>
            <div className="text-sm text-muted-foreground font-mono">Efficiency Boost</div>
          </div>
          <div className="p-6 border border-border bg-background/50 backdrop-blur-sm">
            <div className="text-4xl font-bold mb-2 font-mono">100%</div>
            <div className="text-sm text-muted-foreground font-mono">Process Visibility</div>
          </div>
        </div>
      </Container>
    </section>
  );
}