"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navigationLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";

// Throttle function to limit how often a function can be called
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function throttle<T extends (...args: any[]) => any>(func: T, limit: number) {
  let inThrottle: boolean;
  let lastResult: ReturnType<T>;
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function(this: any, ...args: Parameters<T>): ReturnType<T> {
    if (!inThrottle) {
      inThrottle = true;
      lastResult = func.apply(this, args);
      setTimeout(() => (inThrottle = false), limit);
    }
    
    return lastResult;
  };
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Memoize the scroll handler to prevent recreation on each render
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md py-2 shadow-md"
          : "bg-transparent py-4"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity flex items-center"
        >
          <Image 
            src="/brand_guidelines/logo.png" 
            alt="RV Logo" 
            width={40} 
            height={40} 
            className="h-auto w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Theme Toggle for Mobile */}
          <ThemeToggle />
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
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
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-foreground/80 hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-accent"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}