export const websiteConfig = {
  name: "Rafael",
  title: "Automation Specialist",
  email: "rafael@rvcodes.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  about: "I'm an experienced automation specialist with expertise in streamlining workflows, implementing CI/CD pipelines, and developing robust automated solutions that enhance efficiency and reduce manual effort.",
  resumeLink: "/resume.pdf",
};

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
    { name: "PowerShell", level: 80 },
    { name: "Bash", level: 75 },
  ],
  automationTools: [
    { name: "Jenkins", level: 90 },
    { name: "GitHub Actions", level: 85 },
    { name: "Azure DevOps", level: 80 },
    { name: "Ansible", level: 70 },
    { name: "Terraform", level: 65 },
  ],
  otherSkills: [
    { name: "CI/CD", level: 90 },
    { name: "Docker", level: 85 },
    { name: "Kubernetes", level: 75 },
    { name: "REST APIs", level: 80 },
    { name: "Test Automation", level: 85 },
  ],
};

export const experienceData = [
  {
    company: "Tech Innovations Inc.",
    position: "Senior Automation Engineer",
    duration: "Jan 2021 - Present",
    description: [
      "Led the implementation of CI/CD pipelines that reduced deployment time by 75%",
      "Developed custom automation scripts that saved 20+ hours of manual work weekly",
      "Automated testing processes resulting in 60% reduction in QA cycle time",
      "Integrated various systems using REST APIs and webhooks",
    ],
  },
  {
    company: "Digital Solutions Corp",
    position: "DevOps Engineer",
    duration: "Mar 2018 - Dec 2020",
    description: [
      "Built and maintained automation infrastructure using Jenkins and Docker",
      "Implemented infrastructure as code using Terraform and Ansible",
      "Created monitoring and alerting automation that improved incident response time by 40%",
      "Developed self-healing systems that reduced downtime by 30%",
    ],
  },
  {
    company: "Software Systems LLC",
    position: "Systems Administrator",
    duration: "Jun 2016 - Feb 2018",
    description: [
      "Automated routine server maintenance tasks using PowerShell and Bash scripts",
      "Implemented backup and recovery automation solutions",
      "Created documentation and workflow automations that improved team efficiency",
    ],
  },
];

export const projectsData = [
  {
    title: "Deployment Automation Framework",
    description: "A comprehensive framework that automates the entire deployment process from code commit to production, featuring canary deployments, automatic rollbacks, and detailed monitoring.",
    technologies: ["Jenkins", "Docker", "Kubernetes", "Python", "Terraform"],
    image: "/projects/deployment-automation.jpg",
    link: "#",
    github: "#",
  },
  {
    title: "Infrastructure Monitoring System",
    description: "An automated system that monitors infrastructure health, predicts potential issues, and initiates self-healing protocols before problems impact end-users.",
    technologies: ["Prometheus", "Grafana", "Python", "Ansible", "Go"],
    image: "/projects/monitoring-system.jpg",
    link: "#",
    github: "#",
  },
  {
    title: "Test Automation Suite",
    description: "End-to-end test automation framework that integrates with CI/CD pipelines to ensure quality at every stage of development with minimal manual intervention.",
    technologies: ["Selenium", "Jest", "Python", "JavaScript", "GitHub Actions"],
    image: "/projects/test-automation.jpg",
    link: "#",
    github: "#",
  },
  {
    title: "Workflow Automation Tool",
    description: "A tool that automates complex business workflows by integrating various systems and services, reducing manual steps and potential for human error.",
    technologies: ["Node.js", "Express", "RESTful APIs", "MongoDB", "RabbitMQ"],
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