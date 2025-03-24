export const websiteConfig = {
  name: "Rafael",
  title: "Operations Manager & Automation Specialist",
  email: "rafael@rvcodes.com",
  github: "https://github.com/H3atman",
  linkedin: "https://www.linkedin.com/in/villanueva-rafael/",
  about: "As an Operations Manager at FirmOS Inc. with expertise in automation, I specialize in streamlining client communication processes and optimizing operational systems. I've enhanced email deliverability rates from 76% to 98% through implementing DMARC, SPF, and DKIM protocols, while creating custom automation with deeplink technology that reduced technical issues by 90%. With a background in data analysis at the Philippine National Police from 2019 to 2024, I combine technical skills in API integrations, Python, and JavaScript with strong communication and problem-solving abilities to deliver automation solutions that significantly reduce manual effort and improve operational reliability. I also have experience deploying containerized applications using Docker and deploying web applications using Vercel and Coolify.",
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
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Web Development", level: 80 },
    { name: "API Integrations", level: 85 },
    { name: "Docker & Containers", level: 80 },
    { name: "Microsoft 365", level: 80 },
  ],
  automationTools: [
    { name: "Go High Level CRM", level: 90 },
    { name: "Airtable", level: 85 },
    { name: "Slack Integrations", level: 90 },
    { name: "Google Workspace", level: 85 },
    { name: "Power BI", level: 80 },
    { name: "Email Protocols (DMARC/SPF/DKIM)", level: 90 },
    { name: "Vercel & Coolify Deployment", level: 85 },
  ],
  otherSkills: [
    { name: "Data Processing & Analysis", level: 90 },
    { name: "Critical Thinking", level: 85 },
    { name: "Problem-solving", level: 85 },
    { name: "Communication", level: 90 },
    { name: "Teamwork/Collaboration", level: 85 },
    { name: "Containerization & Deployment", level: 80 },
  ],
};

export const experienceData = [
  {
    company: "FirmOS Inc.",
    position: "Operations Manager",
    duration: "Nov 2024 - March 2025",
    description: [
      "Streamlined client communication processes by enhancing email deliverability rates from 76% to 98% through implementation of DMARC, SPF, and DKIM protocols",
      "Optimized client meeting systems by creating custom automation with deeplink technology, reducing technical issues by 90%",
      "Eliminated operational overhead for support staff through effective automation implementations",
      "Implemented containerized deployment using Docker and Coolify, improving application stability and reducing deployment time by 70%",
      "Established CI/CD pipelines with Vercel for web applications, enabling rapid iterations and seamless deployment of frontend applications",
      "Improved operational reliability and client satisfaction through technical optimizations"
    ],
  },
  {
    company: "FirmOS Inc.",
    position: "Automation Specialist / Product Owner",
    duration: "Sep 2024 - Nov 2024",
    description: [
      "Implemented automation connecting Go High Level CRM to Airtable, streamlining contact and appointment management",
      "Reduced manual data entry by 75% through efficient integration solutions",
      "Developed Slack-Airtable integration for Start of Day (SOD) and End of Day (EOD) reporting workflows",
      "Increased team accountability and improved documentation compliance by 40%"
    ],
  },
  {
    company: "Philippine National Police",
    position: "Data Controller I",
    duration: "Oct 2022 - Sep 2024",
    description: [
      "Effectively stored and secured all outgoing and incoming documents creating physical and digital copies",
      "Designed interactive PowerBI dashboards to visualize complex data sets, providing actionable insights",
      "Increased decision-making efficiency by 80% through data visualization improvements",
      "Prepared and processed large databases, implementing automated systems for data categorization and advanced filtering",
      "Reduced manual effort by 90% through automation of data processing tasks"
    ],
  },
  {
    company: "Philippine National Police",
    position: "Statistician Aide",
    duration: "Mar 2019 - Oct 2022",
    description: [
      "Conducted comprehensive data analysis on crime rates in target neighborhoods, identifying key trends and patterns",
      "Aided in the development of targeted intervention strategies, resulting in a 5% decrease in overall crime rates per year",
      "Collaborated with cross-functional teams to develop and deliver informative presentations on crime statistics",
      "Educated local law enforcement officers on emerging crime trends and provided actionable insights for improved response strategies"
    ],
  },
];

export const projectsData: Project[] = [
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
  {
    title: "Client Onboarding Automation",
    description: "A comprehensive automation system using Go High Level API and Workflows that streamlines the entire client onboarding process, reducing manual steps by 90% and improving client satisfaction.",
    technologies: ["Go High Level API", "Zapier", "Airtable", "Python", "FastAPI"],
    image: "/projects/deployment-automation.jpg",
    link: "#",
    github: "#",
  },
  {
    title: "Data Processing Pipeline",
    description: "An automated system that processes and transforms large datasets using Python (Pandas/Polars) and connects with various APIs to generate actionable business insights.",
    technologies: ["Python", "Pandas", "Polars", "FastAPI", "Streamlit"],
    image: "/projects/monitoring-system.jpg",
    link: "#",
    github: "#",
  },
  {
    title: "Business Workflow Automation",
    description: "End-to-end workflow automation using Make and Zapier that connects multiple business systems, eliminating manual data entry and ensuring data consistency across platforms.",
    technologies: ["Make", "Zapier", "Airtable", "REST APIs", "Go High Level"],
    image: "/projects/test-automation.jpg",
    link: "#",
    github: "#",
  },
  {
    title: "Containerized Application Deployment",
    description: "Developed a streamlined application deployment system using Docker containers and Coolify, enabling quick setup and scaling of web applications and microservices with automated deployment pipelines.",
    technologies: ["Docker", "Coolify", "CI/CD", "Next.js", "Node.js", "GitHub Actions"],
    image: "/projects/docker-deployment.jpg",
    link: "#",
    github: "#",
  },
  {
    title: "Email Deliverability System",
    description: "Implemented DMARC, SPF, and DKIM protocols to enhance email deliverability rates from 76% to 98%, improving operational reliability and client satisfaction.",
    technologies: ["DMARC", "SPF", "DKIM", "Email Protocols", "Client Communication"],
    image: "/projects/workflow-automation.jpg",
    link: "#",
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