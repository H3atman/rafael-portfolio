export const websiteConfig = {
  name: "Rafael",
  title: "Operations Manager & Automation Specialist",
  email: "rafael@rvcodes.com",
  github: "https://github.com/H3atman",
  linkedin: "https://www.linkedin.com/in/villanueva-rafael/",
  about: "As an Operations Manager and Automation Specialist, I create seamless client experiences through custom integrations, workflow automation, and data management. My expertise spans designing integrated systems between GoHighLevel, Airtable, and custom client portals that have reduced manual work by 85% and technical support tickets by 70%. I've engineered automated contract signing and billing systems that cut document processing time by 90% and launched a company-wide referral system that increased qualified leads by 45%. By implementing DMARC, SPF, and DKIM protocols, I've enhanced email deliverability rates from 76% to 98%. With a strong background in data analysis since 2019, I combine technical skills in API development, JavaScript, Next.js, and Python with AI-driven automation to deliver solutions that significantly improve operational efficiency and reliability for businesses.",
  resumeLink: "/resume/Rafael Villanueva - Resume.pdf",
};

// Add Project interface to better type our data
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  images?: string[]; // Optional array for multiple screenshots
  link: string;
  github: string;
}

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const skillsData = {
  programmingLanguages: [
    { name: "JavaScript/Next.js", level: 85 },
    { name: "Python", level: 90 },
    { name: "HTML/CSS", level: 80 },
    { name: "API Development", level: 90 },
    { name: "Database Design", level: 80 },
    { name: "ETL Processes", level: 85 },
  ],
  automationTools: [
    { name: "GoHighLevel CRM", level: 95 },
    { name: "Airtable", level: 95 },
    { name: "Copilot Client Portal", level: 90 },
    { name: "OpenAI, Claude & DeepSeek", level: 90 },
    { name: "Slack Integrations", level: 90 },
    { name: "Email Deliverability (DMARC/SPF/DKIM)", level: 90 },
    { name: "Workflow Design & Implementation", level: 95 },
  ],
  otherSkills: [
    { name: "Data Processing & Analysis", level: 90 },
    { name: "Critical Thinking & Problem-solving", level: 90 },
    { name: "Client Relationship Management", level: 85 },
    { name: "Cross-functional Team Leadership", level: 85 },
    { name: "Process Optimization & Redesign", level: 90 },
    { name: "Integration & Workflow Design", level: 95 },
  ],
};

export const experienceData = [
  {
    company: "FirmOS Inc.",
    position: "Operations Manager",
    duration: "Nov 2024 - Mar 2025",
    description: [
      "Managed comprehensive email workflow ecosystem including pre-calls, post-calls, and marketing campaigns, ensuring consistent communication and reducing client follow-up issues by 65%",
      "Designed and implemented integration between GoHighLevel appointment bookings and Airtable, creating automated workflows for client onboarding, no-show handling, and call progression that reduced manual intervention by 85%",
      "Developed a custom client portal allowing clients to join prospect calls under their branded domain, increasing client brand consistency and reducing technical support tickets by 70%",
      "Launched and architected a company-wide referral system using GoHighLevel integrated with Airtable, resulting in a 45% increase in qualified leads and 30% reduction in customer acquisition costs",
      "Streamlined client communication processes by enhancing email deliverability rates from 76% to 98% through implementation of DMARC, SPF, and DKIM protocols, resulting in improved operational reliability and client satisfaction"
    ],
  },
  {
    company: "FirmOS Inc.",
    position: "Automation Specialist / Product Owner",
    duration: "Sep 2024 - Nov 2024",
    description: [
      "Created a comprehensive team KPI dashboard by integrating Airtable with custom visualization tools, providing real-time performance insights and improving team productivity by 35%",
      "Implemented automation connecting Go High Level CRM to Airtable, streamlining contact and appointment management while reducing manual data entry by 75%",
      "Developed Slack-Airtable integration for Start of Day (SOD) and End of Day (EOD) reporting workflows, increasing team accountability and improving documentation compliance by 40%",
      "Led development team in creating the critical client journey path, implementing a custom integration with Copilot client portal using Next.js and Copilot's SDK",
      "Engineered automated contract signing, invoice generation, and billing systems through Copilot's API, reducing document processing time by 90% and eliminating billing errors"
    ],
  },
  {
    company: "Philippine National Police",
    position: "Data Controller I",
    duration: "Oct 2022 - Present",
    description: [
      "Designed interactive PowerBI dashboards to visualize complex data sets, providing actionable insights to stakeholders and increasing decision-making efficiency by 80%",
      "Prepared and processed a large database of data, implementing automated systems for data categorization and advanced filtering, resulting in a 90% reduction in manual effort",
      "Streamlined document management processes by implementing digital storage systems for all incoming and outgoing documents, ensuring data security and accessibility"
    ],
  },
  {
    company: "Philippine National Police",
    position: "Statistician Aide",
    duration: "Mar 2019 - Oct 2022",
    description: [
      "Conducted comprehensive data analysis on crime rates in target neighborhoods, identifying key trends and patterns that contributed to a 5% decrease in overall crime rates per year",
      "Collaborated with cross-functional teams to develop and deliver informative presentations on crime statistics, providing actionable insights for improved response strategies",
      "Implemented data processing automation that significantly reduced manual effort in generating standardized reports for law enforcement agencies"
    ],
  },
];

export const projectsData: Project[] = [
  {
    title: "KP Cases Management System",
    description: "A comprehensive case management system developed for law enforcement, featuring user authentication, case encoding, and advanced search capabilities. Built with modern web technologies and secure authentication practices.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Supabase","Tailwind CSS", "Authentication", "shadcn/ui"],
    image: "/projects/kp-cases-login.png",
    images: [
      "/projects/kp-cases-login.png",
      "/projects/kp-cases-encoding.png"
    ],
    link: "https://kp-cases-v2.vercel.app/",
    github: "https://github.com/H3atman/kp-cases-v2",
  },
  {
    title: "MikroTik PPPoE Manager",
    description: "A Next.js web application for managing MikroTik router PPPoE users with features for batch updates, expiration management, and secure remote access to my local network via Cloudflare Tunnel. Deployed using Docker containers for reliable operation and Vercel for web hosting, enabling safe administration from anywhere.",
    technologies: ["Next.js", "React", "MikroTik API", "Cloudflare Tunnel", "Docker", "Vercel", "shadcn/ui", "Tailwind CSS"],
    image: "/projects/mikrotik-manager-login.jpg",
    images: [
      "/projects/mikrotik-manager-login.jpg",
      "/projects/mikrotik-manager-main.jpg"
      
    ],
    link: "https://github.com/H3atman/mikrotik-manager",
    github: "https://rg-networks.vercel.app/",
  },
  {
    title: "Automated Crime Processing Engine",
    description: "Transform raw CIRAS v2 data into standardized reports with automatic OFFENSE CATEGORY classification and Focus Crimes standardization - eliminating hours of manual Excel processing",
    technologies: ["Next.js", "React", "API Integration", "Responsive Design"],
    image: "/projects/crime_stat_webapp.png",
    link: "https://crime-stat-webapp-demo.vercel.app/",
    github: "#",
  },
];

export const testimonialsData = [
  {
    name: "Sarah Johnson",
    position: "CTO at Tech Solutions",
    content: "The automation solutions implemented have transformed our deployment process. We've seen a dramatic increase in efficiency and reliability.",
    image: "/testimonials/sarah.jpg",
  },
  {
    name: "Mark Davis",
    position: "Development Manager at InnovateTech",
    content: "Working with an automation specialist of this caliber has allowed our team to focus on innovation rather than repetitive tasks. The ROI has been substantial.",
    image: "/testimonials/mark.jpg",
  },
  {
    name: "Jennifer Lee",
    position: "Product Owner at Digital Systems",
    content: "The automated testing framework not only caught critical bugs early but also significantly reduced our time-to-market for new features.",
    image: "/testimonials/jennifer.jpg",
  },
];