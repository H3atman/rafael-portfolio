import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

// Dynamically import sections that aren't immediately visible
const ProjectsSection = dynamic(() => 
  import("@/components/sections/ProjectsSection"), { 
    loading: () => <div className="py-20">Loading projects...</div>,
    ssr: true 
  }
);

// Temporarily commented out as per client request
// const TestimonialsSection = dynamic(() => 
//   import("@/components/sections/TestimonialsSection"), { 
//     loading: () => <div className="py-20 bg-muted/30">Loading testimonials...</div>,
//     ssr: true
//   }
// );

const BookingSection = dynamic(() => 
  import("@/components/sections/BookingSection"), { 
    loading: () => <div className="py-20">Loading booking section...</div>,
    ssr: true
  }
);

const ContactSection = dynamic(() => 
  import("@/components/sections/ContactSection"), { 
    loading: () => <div className="py-20">Loading contact form...</div>,
    ssr: true
  }
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      {/* Testimonials section temporarily removed */}
      <BookingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
