import { PersonalProfile, Experience, Education, Project, Certificate, Skill } from '../types';

export const personalProfile: PersonalProfile = {
  name: "Avesh Kumar Maurya",
  title: "Java Full Stack Developer",
  email: "aveshmaurya1925@gmail.com",
  phone: "7380811900",
  location: "Noida, Uttar Pradesh, India",
  linkedin: "https://www.linkedin.com/in/aveshkumarmaurya/",
  github: "https://github.com/aveshkumarmaurya",
  summary: "Enthusiastic and detail-oriented Java Full Stack Developer with hands-on expertise in Java, Spring Boot, Hibernate, JDBC, HTML, CSS, JavaScript, Node.js, and MySQL. Skilled in developing responsive web applications, building high-performance RESTful APIs, and managing database schemas with strong analytical problem-solving skills.",
  avatarUrl: "/src/assets/images/developer_portrait_1784988227574.jpg",
  bannerUrl: "/src/assets/images/tech_banner_1784988242025.jpg",
  languages: ["English", "Hindi"]
};

export const initialExperiences: Experience[] = [
  {
    id: "exp-1",
    role: "Electrical Engineer",
    company: "Larsen and Toubro (L&T)",
    location: "Uttar Pradesh, India",
    startDate: "2018-07-01",
    endDate: "2023-07-31",
    period: "07/2018 - 07/2023",
    description: "Supervised high-voltage power engineering operations, project compliance, and site execution for major infrastructure projects, transitioning systematically into software engineering and Full Stack Java development.",
    responsibilities: [
      "Supervised team workflow, technical inspections, and safety compliance across project deliverables.",
      "Analyzed system schematics, power load distributions, and hardware-software integration parameters.",
      "Automated operational record tracking using custom scripting and structured database queries.",
      "Collaborated across multidisciplinary engineering teams to deliver high-availability systems on schedule."
    ],
    skills: ["Supervision", "Engineering Workflows", "Autocad", "Problem Solving", "SDLC"],
    type: "full-time"
  },
  {
    id: "exp-2",
    role: "Java Full Stack Web Developer Intern",
    company: "CodSoft & Prohosty Web Hosting",
    location: "Remote / Noida, India",
    startDate: "2023-08-01",
    endDate: "2024-02-28",
    period: "08/2023 - 02/2024",
    description: "Worked on client-facing web applications, RESTful microservices, database design, and cloud hosting configurations.",
    responsibilities: [
      "Developed web applications using Java, Servlets, JDBC, Spring Boot, and HTML/CSS/JavaScript.",
      "Configured web servers including Apache Tomcat and WebLogic for application deployment.",
      "Designed and optimized MySQL relational database schemas and CRUD API endpoints."
    ],
    skills: ["Java", "Spring Boot", "MySQL", "JavaScript", "Apache Tomcat", "WebLogic"],
    type: "internship"
  }
];

export const educationList: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor's Degree in Computer Science & Engineering",
    institution: "Shambhunath Institute of Engineering and Technology (SIET)",
    location: "Jhalwa, Prayagraj, Uttar Pradesh",
    completionDate: "2026-06-30",
    startDate: "2023-08-01",
    endDate: "2026-06-30",
    details: "Affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU). Specializing in Core Software Engineering, Data Structures, Algorithms, DBMS, Operating Systems, and Distributed Applications.",
    boardOrUniversity: "AKTU",
    grade: "Pursuing (Graduation June 2026)"
  },
  {
    id: "edu-2",
    degree: "Diploma in Electrical Engineering",
    institution: "Allahabad College Of Engineering & Management",
    location: "Fatehpur, Uttar Pradesh",
    completionDate: "2018-07-31",
    startDate: "2015-08-01",
    endDate: "2018-07-31",
    details: "Comprehensive study in Electrical Machinery, Control Systems, Power Electronics, Circuits, and Industrial Automation.",
    boardOrUniversity: "BTEUP",
    grade: "First Division"
  },
  {
    id: "edu-3",
    degree: "Intermediate (Class XII - PCM)",
    institution: "Janta Inter College",
    location: "Chheolaha, Fatehpur, Uttar Pradesh",
    completionDate: "2015-05-31",
    startDate: "2013-07-01",
    endDate: "2015-05-31",
    details: "Physics, Chemistry, Mathematics (PCM) specialization with emphasis on analytical problem solving.",
    boardOrUniversity: "UP Board",
    grade: "Passed"
  },
  {
    id: "edu-4",
    degree: "High School (Class X - PCM)",
    institution: "Dr R M L V P",
    location: "Chheolaha, Fatehpur, Uttar Pradesh",
    completionDate: "2013-06-30",
    startDate: "2011-07-01",
    endDate: "2013-06-30",
    details: "Foundational education in Mathematics, Science, and English.",
    boardOrUniversity: "UP Board",
    grade: "Passed"
  }
];

export const projectList: Project[] = [
  {
    id: "proj-1",
    title: "Banking Management System",
    description: "Enterprise Java web application with secure customer authentication, account management, fund transfers, and transaction ledger.",
    detailedDescription: "A full-featured banking portal leveraging Java Servlets, JDBC, Spring Boot patterns, and MySQL. Provides transaction safety, interest calculation logic, statement generation, and secure password hashing.",
    category: "fullstack",
    techStack: ["Java", "JDBC", "Servlets", "MySQL", "HTML5", "CSS3", "JavaScript"],
    startDate: "2023-09-01",
    endDate: "2023-11-15",
    githubUrl: "https://github.com/aveshmaurya/SBI-App",
    demoUrl: "https://banking-demo.example.com",
    image: "/SBI Banking.png",
    highlights: [
      "ACID-compliant transactional database handling with JDBC prepared statements",
      "Role-based access control for Customer and Bank Admin interfaces",
      "Real-time balance computation and interactive account statement logs"
    ],
    interactiveType: "banking-demo"
  },
  {
    id: "proj-2",
    title: "SGI Medico - Medical Portal Landing Page",
    description: "Responsive healthcare platform featuring patient appointment booking, doctor directory, and clinical service showcase.",
    detailedDescription: "Modern medical landing web application built with clean UI components, patient symptom checker, service request forms, and contact scheduling.",
    category: "web",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Web Design"],
    startDate: "2023-12-01",
    endDate: "2024-01-10",
    githubUrl: "https://github.com/aveshkumarmaurya/SGI-Medico",
    demoUrl: "https://sgi-medico.example.com",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Seamless cross-device responsiveness with optimized load speed",
      "Interactive doctor availability matrix & appointment submission form",
      "Accessible typography and smooth scroll navigation"
    ],
    interactiveType: "medical-landing"
  },
  {
    id: "proj-3",
    title: "Tour & Travel Booking Platform",
    description: "Travel agency web app facilitating destination search, tour package exploration, and instant itinerary booking.",
    detailedDescription: "Feature-packed travel portal displaying curated destination packages, pricing calculators, interactive photo galleries, and customer booking forms.",
    category: "web",
    techStack: ["HTML5", "CSS3", "JavaScript", "Node.js", "MySQL"],
    startDate: "2024-01-15",
    endDate: "2024-03-01",
    githubUrl: "https://github.com/aveshmaurya/Tour-Travel-website",
    demoUrl: "https://tour-travel.example.com",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Dynamic tour package filtering by price range, duration, and region",
      "Interactive booking summary preview modal with instant validation",
      "Customer reviews showcase and itinerary breakdown view"
    ],
    interactiveType: "travel-booking"
  },
  {
    id: "proj-4",
    title: "My Bucket - Productivity & Task Tracker",
    description: "Clean personal task manager app with priority tagging, drag-and-drop bucket lists, and progress tracking.",
    detailedDescription: "A productivity web application designed to help users organize daily goals, track task status, and filter completed milestones with persistent state storage.",
    category: "web",
    techStack: ["JavaScript", "HTML5", "CSS3", "LocalStorage API", "Node.js"],
    startDate: "2024-03-05",
    endDate: "2024-04-10",
    githubUrl: "https://github.com/aveshmaurya/thekingcobra",
    image: "/Mybucket.png",
    highlights: [
      "Categorized task buckets (Work, Education, Personal, Health)",
      "Instant task search and status toggle with visual completion stats",
      "Smooth animations for list items and task reordering"
    ],
    interactiveType: "task-bucket"
  },
  {
    id: "proj-5",
    title: "Classic Arcade Snake Game",
    description: "Interactive canvas-based arcade game with real-time score tracking, speed levels, sound effects, and high score board.",
    detailedDescription: "A retro Snake game built purely in JavaScript and HTML5 Canvas. Features smooth frame updates, collision detection algorithms, score persistence, and mobile touch controls.",
    category: "game",
    techStack: ["JavaScript", "HTML5 Canvas", "CSS3 Animations", "Web Audio API"],
    startDate: "2024-04-12",
    endDate: "2024-04-28",
    githubUrl: "https://github.com/aveshkumarmaurya/Snake-Game",
    demoUrl: "https://snake-game.example.com",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Direct HTML5 Canvas rendering engine running at 60 FPS",
      "Adjustable difficulty modes and keyboard/touch navigation",
      "Playable directly inside the live modal right here on this portfolio!"
    ],
    interactiveType: "snake-game"
  }
];

export const initialCertificates: Certificate[] = [
  {
    id: "cert-1",
    title: "Introduction to Data Science",
    issuer: "Infosys Springboard",
    issueDate: "2023-05-10",
    credentialUrl: "https://infosysspringboard.onwingspan.com/",
    imageUrl: "/Infosys data Science.png",
    category: "technical",
    type: "tech",
    tags: ["Data Science", "Python", "Analytics", "Infosys"]
  },
  {
    id: "cert-2",
    title: "Supply Chain Operations Academy",
    issuer: "Flipkart (SCOA)",
    issueDate: "2023-08-15",
    credentialUrl: "https://www.flipkart.com/",
    imageUrl: "/Flipkart SCOA.png",
    category: "non-tech",
    type: "non-tech",
    tags: ["Supply Chain", "Logistics", "Operations", "Flipkart"]
  },
  {
    id: "cert-3",
    title: "Cyber Security Awareness",
    issuer: "Cyber Security Training Institute",
    issueDate: "2020-04-05",
    credentialUrl: "https://example.com/cert/cyber",
    imageUrl: "/Cyber Awarness.png",
    category: "technical",
    type: "tech",
    tags: ["Cyber Security", "Network Safety", "Encryption"]
  },
  {
    id: "cert-4",
    title: "Web Technology Internship",
    issuer: "CodSoft",
    issueDate: "2023-10-01",
    credentialUrl: "https://www.codsoft.in",
    imageUrl: "/Codsoft.png",
    category: "internship",
    type: "tech",
    tags: ["Web Development", "Java", "Full Stack", "CodSoft"]
  },
  {
    id: "cert-5",
    title: "LLM For Young Developers Foundational Course",
    issuer: "AI Developer Community",
    issueDate: "2024-01-15",
    credentialUrl: "https://example.com/cert/llm",
    imageUrl: "/LLM FOR Young Developers.png",
    category: "technical",
    type: "tech",
    tags: ["LLM", "Generative AI", "Prompts", "Machine Learning"]
  },
  {
    id: "cert-6",
    title: "AI Skills Passport",
    issuer: "EY & Microsoft",
    issueDate: "2024-02-20",
    credentialUrl: "https://www.ey.com/en_gl/microsoft",
    imageUrl: "/EY Skill Couse Passport.png",
    category: "technical",
    type: "tech",
    tags: ["Artificial Intelligence", "EY", "Microsoft", "Azure AI"]
  },
  {
    id: "cert-7",
    title: "Web Hosting & Cloud Internship",
    issuer: "PROHOSTY WEB HOSTING",
    issueDate: "2023-12-01",
    credentialUrl: "https://prohosty.com",
    imageUrl: "/Prohosty.png",
    category: "internship",
    type: "tech",
    tags: ["Cloud Hosting", "Web Logic", "Tomcat", "DevOps"]
  },
  {
    id: "cert-8",
    title: "ATL Certification: Value Engineer & Positive Mindset",
    issuer: "Larsen & Toubro / ATL Training",
    issueDate: "2021-04-08",
    credentialUrl: "https://www.larsentoubro.com",
    imageUrl: "/Value Engineer.png",
    category: "atl",
    type: "non-tech",
    tags: ["Value Engineer", "PLC", "Effective Meetings", "Problem Solving", "Leadership"]
  },
  {
    id: "cert-9",
    title: "ATL Certification In 5S Methodology.pdf",
    issuer: "Larsen & Toubro / ATL Training",
    issueDate: "2020-04-11",
    credentialUrl: "https://www.larsentoubro.com",
    imageUrl: "/5S Methology.png",
    category: "atl",
    type: "non-tech",
    tags: ["Certification in 5S Methodology"]
  },
  {
    id: "cert-10",
    title: "ATL Certification: Certification in Six Sigma ",
    issuer: "Larsen & Toubro / ATL Training",
    issueDate: "2020-04-12",
    credentialUrl: "https://www.larsentoubro.com",
    imageUrl: "/Six Sigm.png",
    category: "atl",
    type: "non-tech",
    tags: ["Certification in Six Sigma"]
  },
  {
    id: "cert-11",
    title: "ATL Certification:Collaboration - Working with different set of teams ",
    issuer: "Larsen & Toubro / ATL Training",
    issueDate: "2020-04-13",
    credentialUrl: "https://www.larsentoubro.com",
    imageUrl: "/Collaboration.png",
    category: "atl",
    type: "non-tech",
    tags: ["Collaboration", "Teamwork", "Leadership"]
  },
  {
    id: "cert-12",
    title: "ATL Certification:Competency Certification in Adaptability ",
    issuer: "Larsen & Toubro / ATL Training",
    issueDate: "2020-04-14",
    credentialUrl: "https://www.larsentoubro.com",
    imageUrl: "/Competency Adaptibilty.png",
    category: "atl",
    type: "non-tech",
    tags: ["Adaptability", "Flexibility", "Change Management"]
  },
  {
    id: "cert-13",
    title: "ATL Certification:Conflict Management - Effective way of handling the conflict management",
    issuer: "Larsen & Toubro / ATL Training",
    issueDate: "2020-04-15",
    credentialUrl: "https://www.larsentoubro.com",
    imageUrl: "/Conflict Management.png",
    category: "atl",
    type: "non-tech",
    tags: ["Conflict Management", "Communication", "Negotiation"]
  },
  {
    id: "cert-14",
    title: "ATL Certification:Effective Meeting Management - Planning and Effective Meeting Management ",
    issuer: "Larsen & Toubro / ATL Training",
    issueDate: "2020-04-18",
    credentialUrl: "https://www.larsentoubro.com",
    imageUrl: "/EFM.png",
    category: "atl",
    type: "non-tech",
    tags: ["Planning and Effective Meeting Management"]
  },
  {
    id: "cert-15",
    title: "ATL Certification:Influencing - Process of influencing and its application",
    issuer: "Larsen & Toubro / ATL Training",
    issueDate: "2020-04-19",
    credentialUrl: "https://www.larsentoubro.com",
    imageUrl: "/Inflencing.png",
    category: "atl",
    type: "non-tech",
    tags: ["Influencing", "Application"]
  },
  {
    id: "cert-16",
    title: "ATL Certification:Fundamentals of PLC ",
    issuer: "Larsen & Toubro / ATL Training",
    issueDate: "2020-04-21",
    credentialUrl: "https://www.larsentoubro.com",
    imageUrl: "/PLC.png",
    category: "atl",
    type: "tech",
    tags: ["PLC", "Fundamentals"]
  },
  {
    id: "cert-17",
    title: "ATL Certification:Positive mindset - Remain positive during adversaries and challenges",
    issuer: "Larsen & Toubro / ATL Training",
    issueDate: "2020-04-22",
    credentialUrl: "https://www.larsentoubro.com",
    imageUrl: "/Positive MindSet.png",
    category: "atl",
    type: "non-tech",
    tags: ["Positive Mindset"]
  },
  {
    id: "cert-18",
    title: "ATL Certification:Problem Solving - Arriving at multiple solutions to a problem ",
    issuer: "Larsen & Toubro / ATL Training",
    issueDate: "2020-04-23",
    credentialUrl: "https://www.larsentoubro.com",
    imageUrl: "/Problem Solving.png",
    category: "atl",
    type: "non-tech",
    tags: ["Problem Solving", "Multiple Solutions"]
  },
  {
    id: "cert-19",
    title: "ATL Certification:Prevention of Sexual Harassment (PoSH) at Workplace",
    issuer: "Larsen & Toubro / ATL Training",
    issueDate: "2020-04-25",
    credentialUrl: "https://www.larsentoubro.com",
    imageUrl: "/POSH.png",
    category: "atl",
    type: "non-tech",
    tags: ["POSH", "Workplace Safety", "Sexual Harassment Prevention"]
  },
  {
    id: "cert-20",
    title: "Herohosty Web Services PVT LTD - Internship Certificate",
    issuer: "Herohosty Web Services PVT LTD",
    issueDate: "2025-07-22",
    credentialUrl: "contact@herohosty.com",
    imageUrl: "/Herohosty.png",
    category: "internship",
    type: "tech",
    tags: ["Web Development", "Full Stack"]
  }
  ,
  {
    id: "cert-21",
    title: "SQL Microcourse Certification",
    issuer: "Satish Dhawale",
    issueDate: "2026-07-24",
    credentialUrl: "skillcourse.in",
    imageUrl: "/SQL Certificate.png",
    category: "technical",
    type: "tech",
    tags: ["SQL", "Database", "MySQL"]
  }
  ,
  {
    id: "cert-22",
    title: "S O Infotech LTD",
    issuer: "SO INFOTECH LTD",
    issueDate: "2026-01-22",
    credentialUrl: "wwww.soinfotech.com",
    imageUrl: "/Internship certifcate.png",
    category: "technical",
    type: "tech",
    tags: ["Java", "Database", "MySQL"]
  }
];

export const skillList: Skill[] = [
  // TECHNICAL SKILLS - Backend & Java
  { name: "Java", category: "backend", type: "technical", proficiency: 92, featured: true },
  { name: "Spring Boot", category: "backend", type: "technical", proficiency: 88, featured: true },
  { name: "Hibernate / JPA", category: "backend", type: "technical", proficiency: 85, featured: true },
  { name: "JDBC & Servlets", category: "backend", type: "technical", proficiency: 90, featured: true },
  { name: "RESTful APIs", category: "backend", type: "technical", proficiency: 90, featured: true },
  { name: "Node.js", category: "backend", type: "technical", proficiency: 78, featured: false },
  { name: "C Programming", category: "backend", type: "technical", proficiency: 80, featured: false },

  // TECHNICAL SKILLS - Database & SQL
  { name: "MySQL", category: "database", type: "technical", proficiency: 88, featured: true },
  { name: "SQL Queries", category: "database", type: "technical", proficiency: 90, featured: true },
  { name: "Database Schema Design", category: "database", type: "technical", proficiency: 85, featured: false },

  // TECHNICAL SKILLS - Frontend & Web
  { name: "HTML5 & CSS3", category: "frontend", type: "technical", proficiency: 95, featured: true },
  { name: "JavaScript (ES6+)", category: "frontend", type: "technical", proficiency: 88, featured: true },
  { name: "Responsive Web Design", category: "frontend", type: "technical", proficiency: 92, featured: true },
  { name: "Bootstrap 5", category: "frontend", type: "technical", proficiency: 85, featured: false },
  { name: "Tailwind CSS", category: "frontend", type: "technical", proficiency: 82, featured: false },

  // TECHNICAL SKILLS - Tools & Deployment
  { name: "Apache Tomcat Server", category: "tools", type: "technical", proficiency: 85, featured: true },
  { name: "WebLogic Server", category: "tools", type: "technical", proficiency: 80, featured: false },
  { name: "Git & GitHub", category: "tools", type: "technical", proficiency: 90, featured: true },
  { name: "Visual Studio Code", category: "tools", type: "technical", proficiency: 92, featured: false },
  { name: "AutoCAD", category: "tools", type: "technical", proficiency: 75, featured: false },
  { name: "Microsoft Office & Excel", category: "tools", type: "technical", proficiency: 88, featured: false },

  // TECHNICAL SKILLS - Engineering Methodologies
  { name: "SDLC (Software Dev Lifecycle)", category: "core", type: "technical", proficiency: 90, featured: true },
  { name: "UML Modeling", category: "core", type: "technical", proficiency: 82, featured: false },

  // NON-TECHNICAL SKILLS - Soft Skills & Core Competencies
  { name: "Communication & Public Speaking", category: "soft", type: "non-technical", proficiency: 95, featured: true },
  { name: "Analytical Problem Solving", category: "soft", type: "non-technical", proficiency: 92, featured: true },
  { name: "Leadership & Team Supervision", category: "soft", type: "non-technical", proficiency: 88, featured: true },
  { name: "Value Engineering & Mindset", category: "soft", type: "non-technical", proficiency: 90, featured: true },
  { name: "Project & Site Operations", category: "soft", type: "non-technical", proficiency: 86, featured: false },
  { name: "Cross-Functional Collaboration", category: "soft", type: "non-technical", proficiency: 92, featured: true },
  { name: "Time Management & Planning", category: "soft", type: "non-technical", proficiency: 90, featured: false },
  { name: "Adaptability & Rapid Learning", category: "soft", type: "non-technical", proficiency: 94, featured: true }
];

// Helper functions for certificate management with LocalStorage
const CERTS_STORAGE_KEY = "avesh_portfolio_certificates";

export function getStoredCertificates(): Certificate[] {
  try {
    const saved = localStorage.getItem(CERTS_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error("Failed to load certificates from local storage", e);
  }
  return initialCertificates;
}
