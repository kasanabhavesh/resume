export type SocialLink = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type CertificationItem = {
  name: string;
  issuer: string;
  status: "Planned" | "In Progress" | "Completed";
  expectedDate?: string;
};

export type ProjectItem = {
  name: string;
  summary: string;
  impact: string;
  tech: string[];
};

export type ResumeData = {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  socials: SocialLink[];
  resumePdfPath: string;
  experience: ExperienceItem[];
  skills: SkillCategory[];
  certifications: CertificationItem[];
  projects: ProjectItem[];
  featureFlags: {
    technicalBlog: boolean;
  };
};

export const resumeData: ResumeData = {
  name: "Bhavesh Kasana",
  title: "Principal Software Engineer",
  summary:
    "Principal engineer with 11 years of product engineering experience, specializing in event-driven platforms, cloud-native modernization, and high-throughput distributed systems.",
  location: "West Delhi, India",
  email: "bhaveshkasana@gmail.com",
  phone: "+91-9910181511",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/kasanabhavesh",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/bhavesh-kasana",
    },
  ],
  resumePdfPath: "/resume.pdf",
  experience: [
    {
      company: "Apollo 247",
      role: "Principal Engineer",
      location: "Remote",
      start: "Aug 2021",
      end: "Present",
      highlights: [
        "Architected a high-throughput real-time analytics platform processing 1M+ events per day.",
        "Established architecture and code review culture to improve resiliency and reduce defects.",
        "Mentored engineers and improved delivery quality through test automation best practices.",
        "Authored and maintained large-scale TypeScript and Java services powering critical products.",
      ],
    },
    {
      company: "Safe Security",
      role: "Platform Engineer",
      location: "Remote",
      start: "Jul 2019",
      end: "Aug 2021",
      highlights: [
        "Built centralized logging capabilities with ELK for monitoring and incident visibility.",
        "Implemented telemetry and anomaly detection using TIGK-based observability workflows.",
        "Led migration from PHP to TypeScript and decomposed monoliths into microservices.",
        "Delivered Docker and Kubernetes-based deployment pipelines and a self-upgradable secure agent.",
      ],
    },
    {
      company: "StalkBuyLove",
      role: "Lead Software Engineer",
      location: "Delhi, India",
      start: "Nov 2016",
      end: "Jul 2019",
      highlights: [
        "Designed an API gateway around Magento to enable microservice routing and gradual modernization.",
        "Built logistics automation workflows spanning recommendations, tracking, RTO, NDR, and redispatches.",
        "Created a full-featured return and exchange module for multi-cycle reverse logistics operations.",
      ],
    },
    {
      company: "Angular Technologies",
      role: "Senior Software Engineer",
      location: "Gurgaon, India",
      start: "Dec 2015",
      end: "Nov 2016",
      highlights: [
        "Delivered backend platform features and accelerated feature execution in cross-functional product teams.",
      ],
    },
    {
      company: "Blinkit",
      role: "Software Engineer",
      location: "Gurgaon, India",
      start: "May 2015",
      end: "Dec 2015",
      highlights: [
        "Contributed to core e-commerce engineering workflows and high-availability product components.",
      ],
    },
  ],
  skills: [
    {
      category: "AI",
      items: ["RAG", "Data Chunking", "Embedding Generation", "LangChain", "LangGraph", "LangSmith", "VectorDB", "Openclaw"],
    },
    {
      category: "Distributed Systems",
      items: ["Kafka", "RabbitMQ", "Event-Driven Architecture", "HLD", "LLD"],
    }, 
    {
      category: "Cloud Native",
      items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "Ansible"],
    },
    {
      category: "Languages & Frameworks",
      items: ["TypeScript", "Java", "Python", "Node.js", "React", "GraphQL", "REST API"],
    },
    {
      category: "Data & Platform",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Nginx"],
    },
    {
      category: "Engineering Excellence",
      items: ["DSA", "Code Review", "Observability", "Performance Optimization", "GenAI", "CursorAI"],
    },
  ],
  certifications: [
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Linux Foundation",
      status: "Planned",
      expectedDate: "2026",
    },
    {
      name: "AWS Certified Solutions Architect - Associate (SAA-C03)",
      issuer: "Amazon Web Services",
      status: "Planned",
      expectedDate: "2026",
    },
  ],
  projects: [
    {
      name: "Real-Time Analytics Platform",
      summary: "Built a streaming analytics architecture to process product and operational events at scale.",
      impact: "Sustained 150M+ daily events with low-latency dashboards and actionable insights.",
      tech: ["TypeScript", "Java", "Kafka", "GCP"],
    },
    {
      name: "Cloud Migration Program",
      summary: "Directed migration of on-prem systems to cloud-native infrastructure patterns.",
      impact: "Reduced infra costs by 30% while improving resilience and deployment velocity.",
      tech: ["GCP", "Terraform", "Kubernetes", "Observability"],
    },
    {
      name: "Payments Core Services",
      summary: "Designed and delivered critical payments services from scratch for multi-vertical operations.",
      impact: "Enabled reliable high-volume daily transaction processing across Apollo24/7 units.",
      tech: ["Node.js", "TypeScript", "PostgreSQL", "Redis"],
    },
  ],
  featureFlags: {
    technicalBlog: false,
  },
};
