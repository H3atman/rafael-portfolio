"use client";

import React from 'react';
import Image from 'next/image';
import Marquee from '../ui/marquee';
import { Container } from '../ui/container';
import styles from '../ui/marquee/marquee.module.css';

// Define tools data with names and logo paths
const tools = [
  { name: 'Zapier', logo: '/tools/zapier-logo.svg' },
  { name: 'Make', logo: '/tools/make-logo.svg' },
  { name: 'Airtable', logo: '/tools/airtable-logo.svg' },
  { name: 'ChatGPT', logo: '/tools/openai-logo.svg' },
  { name: 'Claude', logo: '/tools/claude-logo.svg' },
  { name: 'Deepseek', logo: '/tools/deepseek-logo.png' },
  { name: 'GoHighLevel', logo: '/tools/highlevel-logo.png' },
  { name: 'Next.js', logo: '/tools/nextjs-logo.png' },
  { name: 'Docker', logo: '/tools/docker-logo.svg' },
  { name: 'Vercel', logo: '/tools/vercel-logo.png' },
  { name: 'Coolify', logo: '/tools/coolify-logo.png' },
];

const ToolsMarquee = () => {
  return (
    <section className="py-20 bg-black text-white">
      <Container>
        <h2 className="text-4xl font-bold tracking-tight text-center mb-10">
          Leveraging modern automation & development tools
        </h2>
      </Container>
      
      <Marquee speed={30}>
        {tools.map((tool) => (
          <div key={tool.name} className={styles.logoContainer}>
            <div className="relative w-full h-full">
              <Image
                src={tool.logo}
                alt={`${tool.name} logo`}
                fill
                className="object-contain brightness-0 invert" /* This applies white overlay effect */
                onError={(e) => {
                  // If image fails to load, replace with text
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = tool.name;
                    parent.classList.add('text-white', 'font-semibold', 'text-lg');
                  }
                }}
              />
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ToolsMarquee;