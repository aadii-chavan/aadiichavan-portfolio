export interface Member {
  id: number;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  projects: Project[];
  image: string;
  github?: string;
  linkedin?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface Strength {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const teamMembers: Member[] = [
  {
    id: 1,
    name: "Arjun Sharma",
    role: "Team Lead & Full Stack Developer",
    bio: "Passionate about building scalable web applications and leading innovative projects.",
    skills: ["React", "Node.js", "Python", "AWS", "MongoDB"],
    projects: [
      {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with React and Node.js",
        tags: ["React", "Node.js", "MongoDB"],
        github: "https://github.com"
      },
      {
        id: 2,
        title: "Task Management App",
        description: "Collaborative task management with real-time updates",
        tags: ["React", "Socket.io", "Express"],
        github: "https://github.com"
      }
    ],
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "UI/UX Designer & Frontend Developer",
    bio: "Creating beautiful and intuitive user experiences with modern design principles.",
    skills: ["Figma", "React", "TailwindCSS", "JavaScript", "Adobe XD"],
    projects: [
      {
        id: 3,
        title: "Design System Library",
        description: "Comprehensive design system for consistent UI components",
        tags: ["Figma", "React", "Storybook"],
        link: "https://example.com"
      },
      {
        id: 4,
        title: "Mobile Banking UI",
        description: "Modern mobile banking interface design",
        tags: ["Figma", "Prototyping", "User Research"],
        link: "https://example.com"
      }
    ],
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
    linkedin: "https://linkedin.com"
  },
  {
    id: 3,
    name: "Rohit Kumar",
    role: "Backend Developer & DevOps",
    bio: "Specializing in robust backend systems and cloud infrastructure management.",
    skills: ["Python", "Django", "Docker", "AWS", "PostgreSQL"],
    projects: [
      {
        id: 5,
        title: "Microservices API",
        description: "Scalable microservices architecture with Docker",
        tags: ["Python", "Docker", "AWS"],
        github: "https://github.com"
      },
      {
        id: 6,
        title: "CI/CD Pipeline",
        description: "Automated deployment pipeline for web applications",
        tags: ["Jenkins", "Docker", "AWS"],
        github: "https://github.com"
      }
    ],
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    github: "https://github.com"
  },
  {
    id: 4,
    name: "Sneha Gupta",
    role: "Data Scientist & ML Engineer",
    bio: "Turning data into actionable insights with machine learning and AI.",
    skills: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "Jupyter"],
    projects: [
      {
        id: 7,
        title: "Predictive Analytics Model",
        description: "Machine learning model for sales forecasting",
        tags: ["Python", "TensorFlow", "Pandas"],
        github: "https://github.com"
      },
      {
        id: 8,
        title: "Computer Vision App",
        description: "Real-time object detection application",
        tags: ["OpenCV", "Python", "Deep Learning"],
        github: "https://github.com"
      }
    ],
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
    github: "https://github.com"
  },
  {
    id: 5,
    name: "Vikash Singh",
    role: "Mobile App Developer",
    bio: "Building cross-platform mobile applications with modern frameworks.",
    skills: ["React Native", "Flutter", "Firebase", "JavaScript", "Dart"],
    projects: [
      {
        id: 9,
        title: "Fitness Tracking App",
        description: "Cross-platform fitness app with social features",
        tags: ["React Native", "Firebase", "Redux"],
        link: "https://example.com"
      },
      {
        id: 10,
        title: "Food Delivery App",
        description: "On-demand food delivery mobile application",
        tags: ["Flutter", "Firebase", "Google Maps"],
        link: "https://example.com"
      }
    ],
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
    github: "https://github.com"
  },
  {
    id: 6,
    name: "Anita Reddy",
    role: "QA Engineer & Tester",
    bio: "Ensuring software quality through comprehensive testing and automation.",
    skills: ["Selenium", "Jest", "Cypress", "Python", "JavaScript"],
    projects: [
      {
        id: 11,
        title: "Automated Test Suite",
        description: "Comprehensive testing framework for web applications",
        tags: ["Selenium", "Python", "pytest"],
        github: "https://github.com"
      },
      {
        id: 12,
        title: "Performance Testing Tool",
        description: "Custom tool for load and performance testing",
        tags: ["JMeter", "Python", "Grafana"],
        github: "https://github.com"
      }
    ],
    image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400",
    github: "https://github.com"
  }
];

export const teamProjects: Project[] = [
  {
    id: 13,
    title: "Smart City Management System",
    description: "Comprehensive platform for city infrastructure management with IoT integration, real-time monitoring, and citizen services portal.",
    tags: ["React", "Node.js", "IoT", "MongoDB", "Machine Learning"],
    featured: true,
    link: "https://example.com",
    github: "https://github.com"
  },
  {
    id: 14,
    title: "Healthcare Analytics Dashboard",
    description: "Advanced analytics platform for healthcare data visualization, patient monitoring, and predictive health insights.",
    tags: ["Python", "TensorFlow", "React", "PostgreSQL", "D3.js"],
    featured: true,
    link: "https://example.com",
    github: "https://github.com"
  },
  {
    id: 15,
    title: "Sustainable Agriculture Platform",
    description: "AI-powered platform for crop monitoring, yield prediction, and sustainable farming practices.",
    tags: ["Python", "Computer Vision", "React Native", "AWS", "PostgreSQL"],
    featured: true,
    github: "https://github.com"
  },
  {
    id: 16,
    title: "Educational Resource Hub",
    description: "Collaborative platform for sharing educational resources with peer-to-peer learning features.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com"
  },
  {
    id: 17,
    title: "E-Commerce Analytics Platform",
    description: "Advanced business intelligence platform for e-commerce with real-time sales tracking, customer behavior analysis, and predictive insights.",
    tags: ["React", "Python", "Django", "PostgreSQL", "Chart.js"],
    featured: true,
    link: "https://example.com",
    github: "https://github.com"
  },
  {
    id: 18,
    title: "Cybersecurity Threat Detection",
    description: "AI-powered system for detecting and preventing cybersecurity threats in real-time with machine learning algorithms.",
    tags: ["Python", "TensorFlow", "React", "Elasticsearch", "Docker"],
    featured: true,
    link: "https://example.com",
    github: "https://github.com"
  },
  {
    id: 19,
    title: "Financial Portfolio Tracker",
    description: "Comprehensive financial management platform for tracking investments, analyzing market trends, and portfolio optimization.",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL", "WebSocket"],
    featured: true,
    link: "https://example.com",
    github: "https://github.com"
  }
];

export const teamStrengths: Strength[] = [
  {
    id: 1,
    title: "Full-Stack Expertise",
    description: "Comprehensive knowledge across frontend, backend, mobile, and cloud technologies.",
    icon: "💻"
  },
  {
    id: 2,
    title: "Agile Methodology",
    description: "Experienced in agile development practices with efficient project delivery.",
    icon: "⚡"
  },
  {
    id: 3,
    title: "Innovation Focus",
    description: "Passionate about cutting-edge technologies and innovative problem-solving approaches.",
    icon: "🚀"
  },
  {
    id: 4,
    title: "User-Centric Design",
    description: "Strong emphasis on user experience and intuitive interface design.",
    icon: "🎨"
  },
  {
    id: 5,
    title: "Collaborative Spirit",
    description: "Excellent teamwork and communication skills for effective collaboration.",
    icon: "🤝"
  },
  {
    id: 6,
    title: "Quality Assurance",
    description: "Rigorous testing and quality assurance practices for reliable software delivery.",
    icon: "✅"
  }
];